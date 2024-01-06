import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./slider.module.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Swiper as SwiperType } from "swiper";
import { SliderNavButtons } from "./slider-nav-buttons/slider-nav-buttons";
import { useMediaQuery } from "react-responsive";
import './swiper.css'


type Props = {
  eclipseEvents: { year: number, description: string }[]
}

export const Slider = ({ eclipseEvents }: Props) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnding, setIsEnding] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const isMobileDevice = useMediaQuery({ query: "(max-width: 320px)" });
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


  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setOpacity(0);
  }, []);


  return (
    <motion.div
      key={eclipseEvents[0].description}
      className={s.itemTitle}
      initial={{ opacity }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}>
      <div className={s.sliderWrapper}>
        <Swiper style={{ width: "80%" }}
                pagination={isMobileDevice}
                slidesPerView={isMobileDevice ? 1.44 : 3}
                spaceBetween={isMobileDevice ? 25 : 80}
                modules={[Navigation, Pagination]}
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
        <SliderNavButtons handleNextButtonClick={handleNextButtonClick} handlePrevButtonClick={handlePrevButtonClick}
                          isBeginning={isBeginning} isEnding={isEnding} />

      </div>
    </motion.div>
  );
};