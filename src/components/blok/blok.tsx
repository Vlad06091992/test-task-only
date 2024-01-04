import React, { useState } from "react";
import s from "./blok.module.scss";
import { Counter } from "../counter/counter";

import { Circle } from "../circle/circle";
import { Slider } from "../slider/slider";
import { PrevButton } from "../../components/ui/prev-button/prev-button";
import { NextButton } from "../../components/ui/next-button/next-button";
import { HorizontalLine } from "../horizontal-line/horizontal-line";
import { VerticalLine } from "../vertical-line/vertical-line";
import { Title } from "../title/title";
import { ItemTitle } from "../item-title/item-title";

interface CircleComponentProps {
  numPoints: number;
}

export const Blok: React.FC<CircleComponentProps> = ({ numPoints }) => {

  const dates = [
    [2015, 2022],
    [1990, 2000],
    [1995, 2006],
    [2005, 2007],
    [1986, 2030],
    [1992, 1997]
  ];

  const [numbers, setNumbers] = useState(dates[0]);


  return (
    <div className={s.container}>
     <Title title={'Исторические даты'}/>
      <ItemTitle title={'Наука'}/>
      <HorizontalLine/>
      <VerticalLine/>
      <Circle numbers={numbers} dates={dates} setNumbers={setNumbers} numPoints={numPoints} />
      <Counter leftNumber={numbers[0]} rightNumber={numbers[1]} />
      <div className={s.buttons}>
        <PrevButton className={s.button} onClick={() => {
          console.log("click");
        }} disabled={true} />
        <NextButton className={s.button} onClick={() => {
          console.log("click");
        }} />
      </div>
      <Slider />

    </div>
    // <div className={s.container} style={{ textAlign: "center" }}>
    //   <button id="prev" onClick={() => moveWheel(itemStep)}>Prev</button>
    //   <button id="next" onClick={() => moveWheel(-itemStep)}>Next</button>
    // </div>
  );
};

