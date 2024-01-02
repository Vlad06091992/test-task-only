import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import s from './circle.module.scss';
import './circle.css';

interface CircleComponentProps {
  numPoints: number;
}

export const CircleComponent: React.FC<CircleComponentProps> = ({ numPoints }) => {
  const circlePathRef = useRef<SVGSVGElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tl = useRef<gsap.core.Timeline>({} as gsap.core.Timeline);
  const trackerRef = useRef<{ item: number }>({ item: 0 });
  const wrapper = useRef<HTMLDivElement>(null);

  const items = itemsRef.current;

  const numItems = numPoints;
  const itemStep = 1 / numPoints;
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
        alignOrigin: [0.4, 0.4],
        start:-0.12,
        end: (i: number) => i / numPoints - 0.12,
      } as any,
      scale: 0.9,
    });

    tl.current = gsap.timeline({ paused: true, reversed: true });

    tl.current.to(wrapper.current, {
      rotation: 360,
      transformOrigin: 'central',
      duration: 1,
      ease: 'none',
    });

    tl.current.to(items, {
      rotation: "-=360",
      transformOrigin: 'center',
      duration: 1,
      ease: 'none',
    }, 0);

    tl.current.to(trackerRef.current, {
      item: numPoints,
      duration: 1,
      ease: 'none',
      modifiers: {
        item(value: number) {
          return wrapTracker(numItems - Math.round(value));
        },
      },
    }, 0);
  }, []);


  function rotate(i:number) {
    let current = trackerRef.current.item;

    if (i === current) {
      return;
    }

    let diff = current - i;

    if (Math.abs(diff) < (numItems / 2)) {
      moveWheel(diff * itemStep);
    } else {
      let amt = numItems - Math.abs(diff);

      if (current > i) {
        moveWheel(amt * -itemStep);
      } else {
        moveWheel(amt * itemStep);
      }
    }
  }

    function moveWheel(amount: number) {
    let progress = tl.current.progress();
    tl.current.progress(wrapProgress(snap(tl.current.progress() + amount)));
    let next = trackerRef.current.item;
    tl.current.progress(progress);

    const activeItem = document.querySelector('.item.active');
    if (activeItem) {
      activeItem.classList.remove('active');
    }

    if (items && items[next]) {
      items[next]?.classList.add('active');
    }

    gsap.to(tl.current, {
      progress: snap(tl.current.progress() + amount),
      modifiers: {
        progress: wrapProgress,
      },
    });
  }

  return (
    <div>
      <div className={s.container}>
        <div className={s.wrapper} ref={wrapper}>
          {Array.from({ length: numPoints }, (_, index) => (
            <div onClick={()=>rotate(index)}
              key={index}
              className={`item ${index === trackerRef.current.item ? 'active' : ''}`}
              ref={(el) => itemsRef.current[index] = el}
            >
              <div className={s.number}>
                {index + 1}

              </div>
            </div>
          ))}
          <svg viewBox="0 0 530 530" ref={circlePathRef} >
            <circle id="holder" className={s.st0} cx="266" cy="266" r="265"   style={{
              flexShrink: 0,
              borderRadius: "50%",
              border: "1px solid var(--Black-blue, #42567A)",
              opacity: 0.2,
            }} />
          </svg>
        </div>
      </div>
      <div className={s.container} style={{ textAlign: "center" }}>
        <button id="prev" onClick={() => moveWheel(itemStep)}>Prev</button>
        <button id="next" onClick={() => moveWheel(-itemStep)}>Next</button>
      </div>
    </div>
  );
};

