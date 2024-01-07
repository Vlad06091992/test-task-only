import React from "react";
import s from "./counter.module.scss";
import { useCounter } from "./useCounter";

type Props = {
  leftNumber:number
  rightNumber:number
}

export const Counter = React.memo(({ leftNumber, rightNumber }: Props) => {
  const { animate, rightNumberRef, leftNumberRef } = useCounter(leftNumber, rightNumber);

  return (<div className={s.counter}>
    <div className={s.leftNumber} ref={leftNumberRef}>{animate ? 0 : leftNumber}</div>
    <div className={s.rightNumber} ref={rightNumberRef}>{animate ? 0 : rightNumber}</div>
  </div>);
});