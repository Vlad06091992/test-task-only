import s from "./time-range-controller.module.scss";
import { PrevButton } from "../../components/ui/prev-button/prev-button";
import { NextButton } from "../../components/ui/next-button/next-button";
import React from "react";

type Props = {
  currentRange: 1 | 2 | 3 | 4 | 5 | 6
  numberOfRanges:2 | 3 | 4 | 5 | 6
}

export const TimeRangeController = ({currentRange,numberOfRanges}:Props) => {
  return (<div className={s.pagination}>
    <p className={s.pages}>06/06</p>
    <div>
      <PrevButton className={s.button} onClick={() => {
        console.log("click");
      }} disabled={currentRange === 1} />
      <NextButton className={s.button} onClick={() => {

        console.log("click");
      }} disabled={currentRange === numberOfRanges} />
    </div>

  </div>);
};