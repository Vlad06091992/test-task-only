import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./slider.module.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Swiper as SwiperType } from "swiper";
import { SliderNavButtons } from "./slider-nav-buttons/slider-nav-buttons";



type Props = {
  eclipseEvents:{year:number, description:string}[]
}

export const Slider = ({eclipseEvents}:Props) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnding, setIsEnding] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrevButtonClick = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextButtonClick = () => {
    swiperRef.current?.slideNext();
  };

  const updateSwiperState = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnding(swiperRef.current.isEnd);
    }
  };


  const[opacity,setOpacity] = useState(1)

  useEffect(()=>{
    setOpacity(0)
  },[])


  return (
    <motion.div
      key={eclipseEvents[0].year}
      className={s.itemTitle}
      initial={{opacity}}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}>
    <div style={{ marginTop: "841px" }}>
      <Swiper style={{ width: "80%" }}
              slidesPerView={3}
              spaceBetween={80}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={() => updateSwiperState()}
      >
        {eclipseEvents.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="eclipse-event">
              <p className={s.year}>{event.year}</p>
              <p className={s.description}>{event.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavButtons handleNextButtonClick={handleNextButtonClick} handlePrevButtonClick={handlePrevButtonClick} isBeginning={isBeginning} isEnding={isEnding}/>

    </div>
    </motion.div>
  );
};