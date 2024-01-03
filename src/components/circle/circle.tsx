import React, { useState } from "react";
import s from "./circle.module.scss";
import "./circle.css";
import { Counter } from "../counter/counter";
import { useCircleAnimation } from "./useCircleAnimation";

interface CircleComponentProps {
  numPoints: number;
}

export const CircleComponent: React.FC<CircleComponentProps> = ({ numPoints }) => {

  const dates = [
    [2015, 2022],
    [1990, 2000],
    [1995, 2006],
    [2005, 2007],
    [1986, 2030],
    [1992, 1997]
  ];


  const [numbers, setNumbers] = useState(dates[0]);
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

  return (
    <div className={s.container}>
      <div className={`${s.line} ${s.horizontalLine}`}></div>
      <div className={`${s.line} ${s.verticalLine}`}></div>
      <div className={s.wrapper} ref={wrapper}>
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
      </div>
      <div className={s.divCenter}>
        <Counter leftNumber={numbers[0]} rightNumber={numbers[1]} />
      </div>


    </div>
    // <div className={s.container} style={{ textAlign: "center" }}>
    //   <button id="prev" onClick={() => moveWheel(itemStep)}>Prev</button>
    //   <button id="next" onClick={() => moveWheel(-itemStep)}>Next</button>
    // </div>
  );
};

