import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './slider.module.scss'
import { Navigation } from 'swiper/modules';


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
    <div style={{marginTop:'140px'}}>
      <Swiper slidesPerView={'auto'} freeMode navigation={true} modules={[Navigation]} style={{ width: '100%', height: '100%' }}>
        {eclipseEvents.map((event, index) => (
          <SwiperSlide key={index} style={{ width: '400px', height: '100%' }}>
            <div className="eclipse-event">
              <p className={s.year}>{event.year}</p>
              <p>{event.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
