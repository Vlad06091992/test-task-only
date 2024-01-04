import s from "./circle.module.scss";
import "./circle.css"
import React from "react";
import { useCircleAnimation } from "./useCircleAnimation";

type Props = {
  numPoints:number,
  dates:Array<Array<number>>
  setNumbers:(arg:Array<number>)=>void
  numbers:Array<number>
}

export const Circle = ({numPoints,dates,setNumbers,numbers}:Props) => {
  const { wrapper, onClickHandler, itemsRef, circlePathRef, trackerRef } = useCircleAnimation(numbers, numPoints);

  const onClickHandlerWithPromise = (index:number) => {
    Promise.resolve()
      .then((res) => {
        setNumbers(dates[index]);
      })
      .then(() => {
        onClickHandler(index);
      });
  };

  return (<div className={s.circle} ref={wrapper}>
    {Array.from({ length: numPoints }, (_, index) => {
      return (
        <div onClick={()=>onClickHandlerWithPromise(index)}
             key={index}
             className={`item ${index === trackerRef.current.item ? "active" : ""}`}
             ref={(el) => itemsRef.current[index] = el}
        >
          <div className={s.number}>
            {index + 1}
          </div>
        </div>
      );
    })}
    <svg
      viewBox="0 0 532 532"
      ref={circlePathRef}
      style={{
        position: "absolute"
      }}
    >
      <circle
        id="holder"
        className={s.st0}
        cx="266"
        cy="266"
        r="266"
      />
    </svg>
  </div>)
}