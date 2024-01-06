import React, { useState } from "react";
import s from "./blok.module.scss";
import { Counter } from "../counter/counter";
import { Circle } from "../circle/circle";
import { HorizontalLine } from "../horizontal-line/horizontal-line";
import { VerticalLine } from "../vertical-line/vertical-line";
import { Title } from "../title/title";
import { ItemTitle } from "../item-title/item-title";
import { TimeRangeController } from "../../components/time-range-controller/time-range-controller";
import { Slider } from "../../components/swiper/slider";
import { Data } from "../../components/app/app";



interface CircleComponentProps {
  data:Data
}

export const Blok: React.FC<CircleComponentProps> = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [currentData, setCurrentData] = useState(data[0]);

  console.log(index);

  const changeCurrentData = (index:number) =>{
    setCurrentData(data[index])
  }

  const changeCurrentIndex = (index:number) =>{
      setIndex(index)
  }

  return (
    <div className={s.container}>
      <Title title={"Исторические даты"} />
      <ItemTitle title={currentData.theme} />
      <HorizontalLine />
      <VerticalLine />
      <Circle index={index} changeCurrentIndex={changeCurrentIndex} changeCurrentData={changeCurrentData} numPoints={data.length} />
      <Counter leftNumber={currentData.dates[0]} rightNumber={currentData.dates[1]} />
      <TimeRangeController changeCurrentIndex={changeCurrentIndex} changeCurrentData={changeCurrentData}  index={index} currentRange={index + 1} numberOfRanges={data.length} />
      <Slider eclipseEvents={currentData.items} />
    </div>
  );
};

