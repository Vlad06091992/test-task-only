import s from "./time-range-controller.module.scss";
import { PrevButton } from "../../components/ui/prev-button/prev-button";
import { NextButton } from "../../components/ui/next-button/next-button";
import React from "react";

type Props = {
  index: number
  currentRange: number
  numberOfRanges: number
  changeCurrentData: (i: number) => void
  changeCurrentIndex: (i: number) => void
}

export const TimeRangeController = ({
                                      currentRange,
                                      numberOfRanges,
                                      index,
                                      changeCurrentIndex,
                                      changeCurrentData
                                    }: Props) => {
  return (<div className={s.pagination}>
    <p>0{currentRange}/0{numberOfRanges}</p>
    {/*<p className=`0{s.pages}`>{currentRange}/0{numberOfRanges}</p>*/}
    <div>
      <PrevButton className={s.button} onClick={() => {
        changeCurrentData(index - 1);
        changeCurrentIndex(index - 1);
      }} disabled={currentRange === 1} />
      <NextButton className={s.button} onClick={() => {

        changeCurrentData(index + 1);
        changeCurrentIndex(index + 1);
        console.log("click");
      }} disabled={currentRange === numberOfRanges} />
    </div>

  </div>);
};