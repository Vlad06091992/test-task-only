import React, { useEffect, useState } from "react";
import { useSwiper } from 'swiper/react';
import s from './swiper-nav-buttons.module.scss';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  const[isBeginning,setIsBeginning] = useState(false)

  // console.log(swiper);
useEffect(()=>{

},[swiper])

  return (
    <div className="swiper-nav-btns">
      <button
disabled={isBeginning}
        className={s.prev}
        onClick={() => {
          setIsBeginning(swiper.isBeginning)
          console.log(swiper.isBeginning)
          swiper.slidePrev()}}
      >
        Prev
      </button>
      <button onClick={() => swiper.slideNext()}>
        Next
      </button>
    </div>
  );
};