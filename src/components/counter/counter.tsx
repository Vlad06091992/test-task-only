import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import s from './counter.module.scss'

export const Counter = ({leftNumber,rightNumber}:any) => {
  const[animate,setAnimate] = useState(false)
  const leftNumberRef = useRef(null)
  const rightNumberRef = useRef(null)

  useEffect(() => {
    setAnimate(true)
  }, []);


  useLayoutEffect(()=>{
    gsap.to(leftNumberRef.current, { innerText: leftNumber, duration: 1,
      snap: {
        innerText:1
      }
    });

    gsap.to(rightNumberRef.current, { innerText: rightNumber, duration: 1,
      snap: {
        innerText:1
      }
    });
    },[leftNumber,rightNumber])


  return (<div className={s.counter}>
    <div className={s.leftNumber} ref={leftNumberRef}>{animate? 0: leftNumber}</div>
    <div className={s.rightNumber} ref={rightNumberRef}>{animate? 0: rightNumber}</div>
  </div>)
}