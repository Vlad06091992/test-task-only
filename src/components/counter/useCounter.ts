import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export const useCounter = (leftNumber:number,rightNumber:number) => {
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

  return {animate,rightNumberRef,leftNumberRef}

}