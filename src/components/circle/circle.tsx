import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import s from './circle.module.scss';

const CircleComponent = ({ numPoints }: any) => {
  const circlePathRef = useRef<any>(null);
  const itemsRef = useRef<any>([]);
  const tl = useRef(gsap.timeline({ paused: true,reversed:true }));
  const trackerRef = useRef({ item: 0 });
const wrapper = useRef<any>(null)


  const items = itemsRef.current;



  const numItems = 8;
  const itemStep = 1 / 8;
  const wrapProgress = gsap.utils.wrap(0, 1);
  const snap = useRef(gsap.utils.snap(itemStep)).current;
  const wrapTracker = gsap.utils.wrap(0, numItems);

  gsap.registerPlugin(MotionPathPlugin);
  useLayoutEffect(() => {
    const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
    circlePath.id = "circlePath";
    circlePathRef.current?.appendChild(circlePath);

    gsap.set(items, {
      motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        end: (i:number) => i / 8
      } as any,
      scale: 0.9
    });

    tl.current.to(wrapper.current, {
      rotation: 360,
      transformOrigin: 'center',
      duration: 1,
      ease: 'none'
    });

    console.log(items);

    tl.current.to(items, {
      rotation: "-=360",
      transformOrigin: 'center',
      duration: 1,
      ease: 'none',
    }, 0);


    tl.current.to(trackerRef.current, {
      item: 8,
      duration: 1,
      ease: 'none',
      modifiers: {
        item(value) {
          console.log(value
          );
          return wrapTracker(numItems - Math.round(value))
        }
      }
    }, 0);
  }, []);

  function moveWheel(amount:number) {

    // let progress = tl.current.progress();
    // console.log(progress)
    // tl.current.progress(wrapProgress(snap(tl.current.progress() + amount)))
    // // let next = tracker.item;
    // tl.current.progress(progress);

    gsap.to(tl.current, {
      progress: snap(tl.current.progress() + amount),
      modifiers: {
        progress: wrapProgress
      }
    });
  }



  return (
    <div>
      <div className={s.container}>
        <div className={s.wrapper} ref={wrapper}>
          {Array.from({ length: numPoints }, (_, index) => (
            <div key={index} className={`${s.item} ${index === 0 ? s.active : ''}`} ref={el => itemsRef.current[index] = el}>
              {index + 1}
            </div>
          ))}
          <svg viewBox="0 0 300 300" ref={circlePathRef}>
            <circle id="holder" className={s.st0} cx="151" cy="151" r="150" />
          </svg>
        </div>
        <div className={s.start}>&#8592; Active</div>
      </div>
      <div className={s.container} style={{ textAlign: "center" }}>
        <button id="prev" onClick={() => moveWheel(itemStep)}>Prev</button>
        <button id="next" onClick={() => moveWheel(-itemStep)}>Next</button>
        {/*<button id="prev" onClick={() => {}}>Prev</button>*/}
        {/*<button id="next" onClick={() => {}}>Next</button>*/}
      </div>
    </div>
  );
};

export default CircleComponent;
