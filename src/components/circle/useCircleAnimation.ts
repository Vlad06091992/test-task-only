import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";

export const useCircleAnimation = (numPoints:number,index:number) => {
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
  useEffect(() => {
    const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
    circlePath.id = "circlePath";
    circlePathRef.current?.appendChild(circlePath);

    gsap.set(items, {
      motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.4, 0.4],
        start:0.166,
        end: (i: number) => i / numPoints - 0.166 ,
      } as any,
      scale: 1,
    });

    tl.current = gsap.timeline({ paused: true, reversed: true });

    tl.current.to(wrapper.current, {
      rotation: 360,
      transformOrigin: 'center center',
      duration: 1,
      ease: 'none',
    });

    tl.current.to(items, {
      rotation: "-=360",
      transformOrigin: 'center center',
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

  useEffect(() => {
    rotate(index)
  }, [index]);

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

  const onClickHandler = (index:number) =>{rotate(index)};

  function moveWheel(amount: number) {
    let progress = tl.current.progress();
    tl.current.progress(wrapProgress(snap(tl.current.progress() + amount)));
    let next = trackerRef.current.item;
    tl.current.progress(progress);

    gsap.to(tl.current, {
      progress: snap(tl.current.progress() + amount),
      modifiers: {
        progress: wrapProgress,
      },
    });

    const activeItem = document.querySelector(' .active');

    if (activeItem) {
      activeItem.classList.remove('active');
    }

    if (items && items[next]) {
      items[next]?.classList.add('active');
    }
  }
  return { circlePathRef, itemsRef, wrapper, rotate,trackerRef,onClickHandler };
};