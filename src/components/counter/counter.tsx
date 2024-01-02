import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const Counter = ({from,to}:any) => {
  const tl = useRef<gsap.core.Timeline>({} as gsap.core.Timeline);

  const counterRef = useRef(null)
  useLayoutEffect(()=>{
    gsap.to(counterRef.current, { innerText: to, duration: 3,
      snap: {
        innerText:5
      }
    });


  },[to,from])

  return (<div ref={counterRef}>{from}</div>)
}