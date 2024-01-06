import s from "./circle.module.scss";
import "./circle.css"
import React from "react";
import { useCircleAnimation } from "./useCircleAnimation";

type Props = {
  numPoints:number,
  changeCurrentData:(i:number)=>void
  changeCurrentIndex:(i:number)=>void
  index:number
}

export const Circle = ({numPoints,changeCurrentData,changeCurrentIndex,index}:Props) => {
  const { wrapper, onClickHandler, itemsRef, circlePathRef, trackerRef } = useCircleAnimation( numPoints,index);

  const onClickHandlerWithPromise = (index:number) => {
    Promise.resolve()
      .then((res) => {
        changeCurrentData(index);
        changeCurrentIndex(index);
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