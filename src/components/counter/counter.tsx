import React from "react";
import s from "./counter.module.scss";
import { useCounter } from "./useCounter";

export const Counter = React.memo(({ leftNumber, rightNumber }: any) => {
  const { animate, rightNumberRef, leftNumberRef } = useCounter(leftNumber, rightNumber);

  return (<div className={s.counter}>
    <div className={s.leftNumber} ref={leftNumberRef}>{animate ? 0 : leftNumber}</div>
    <div className={s.rightNumber} ref={rightNumberRef}>{animate ? 0 : rightNumber}</div>
  </div>);
});