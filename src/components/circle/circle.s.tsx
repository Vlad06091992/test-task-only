import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import s from './circle.module.scss';

const CircleComponent = ({ numPoints }: any) => {
  const wrapperPathRef = useRef<any>(null);
  const circlePathRef = useRef<any>(null);
  const itemsRef = useRef<any>([]);
  const tl = useRef(gsap.timeline({ paused: true,reversed:true }));
  const trackerRef = useRef({ item: 0 });

  const items = itemsRef.current;
  const numItems = items.length;
  const itemStep = 1 / numItems;
  const wrapProgress = gsap.utils.wrap(0, 1);
  const snap = gsap.utils.snap(itemStep);
  const wrapTracker = gsap.utils.wrap(0, numItems);


  useLayoutEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
    circlePath.id = "circlePath";
    circlePathRef.current?.appendChild(circlePath);

    console.log(items);
    console.log(tl.current)
    gsap.set(items, {
      motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        end: (i:number) => i / items.length
      } as any,
      scale: 0.9
    });

    tl.current.to(wrapperPathRef.current, {
      rotation: 360,
      transformOrigin: 'center',
      duration: 1,
      ease: 'none'
    });

    tl.current.to(items, {
      rotation: "-=360",
      transformOrigin: 'center',
      duration: 1,
      ease: 'none',
    }, 0);

    console.log(trackerRef.current);

    tl.current.to(trackerRef.current, {
      item: numItems,
      duration: 1,
      ease: 'none',
      modifiers: {
        item(value) {
          return wrapTracker(numItems - Math.round(value))
        }
      }
    }, 0);
  }, [items,numItems,wrapTracker]);

  const moveWheel = (amount: number) => {
    debugger
    const progress = tl.current.progress();

    tl.current.progress(wrapProgress(snap(tl.current.progress() + amount)))
    const next = trackerRef.current.item;
    tl.current.progress(progress);

    // itemsRef.current[next - 1].classList.remove(s.active);
    // itemsRef.current[next].classList.add(s.active);

    gsap.to(tl.current, {
      progress: snap(tl.current.progress() + amount),
      modifiers: {
        progress: gsap.utils.wrap(0, 1)
      }
    });
  };



  return (
    <div>
      <div className={s.container}>
        <div className={s.wrapper} ref={wrapperPathRef}>
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
        <button id="prev" onClick={() => moveWheel(0.125)}>Prev</button>
        <button id="next" onClick={() => moveWheel(-0.125)}>Next</button>
        {/*<button id="prev" onClick={() => {}}>Prev</button>*/}
        {/*<button id="next" onClick={() => {}}>Next</button>*/}
      </div>
    </div>
  );
};

export default CircleComponent;
