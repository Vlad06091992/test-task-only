import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './slider.module.scss'
import { A11y, Navigation, Pagination } from 'swiper';
import {SwiperNavButtons} from "./swiper-nav-buttons/swiper-nav-buttons"



const eclipseEvents = [
  {
    year: 2005,
    description: 'Частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
  },
  {
    year: 2005,
    description: 'Частное солнечное затмение, видимое в Австралии, Новой Зеландии и островах Тихого океана',
  },
  {
    year: 2005,
    description: 'Полное солнечное затмение, видимое в Южной Африке, Австралии и Новой Зеландии',
  },
  {
    year: 2005,
    description: 'Частное солнечное затмение, видимое в большей части Южной Америки',
  },
  {
    year: 2005,
    description: 'Полное солнечное затмение, видимое в Южной Америке, юго-западной части Африки и Антарктиде',
  },
  {
    year: 2005,
    description: 'Частное солнечное затмение, видимое в большей части Северной Америки',
  },
  {
    year: 2005,
    description: 'Частное солнечное затмение, видимое в Австралии, Новой Зеландии и островах Тихого океана',
  },
  {
    year: 2005,
    description: 'Частное солнечное затмение, видимое в большей части Северной Америки',
  },
  {
    year: 2005,
    description: 'Частное солнечное затмение, видимое в большей части Африки и Азии',
  },
  {
    year: 2005,
    description: 'Частное солнечное затмение, видимое в Южной Америке, Африке и островах Тихого океана',
  },
];


export const Slider = () => {


  return (
    <div style={{marginTop:'841px'}}>

      <Swiper slidesPerView={'auto'} freeMode navigation={true} modules={[Navigation]} style={{ width: '85%', height: '100%' }}>
        <SwiperNavButtons />
        {eclipseEvents.map((event, index) => (
          <SwiperSlide key={index} style={{ maxWidth: '400px', height: '100%' }}>
            <div style={{margin:'0px 40px'}} className="eclipse-event">
              <p className={s.year}>{event.year}</p>
              <p className={s.description}>{event.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
