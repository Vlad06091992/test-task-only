import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';
import { Navigation } from 'swiper/modules';


const eclipseEvents = [
  {
    year: 2005,
    date: '13 сентября',
    description: 'Частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
  },
  {
    year: 2005,
    date: '3 апреля',
    description: 'Частное солнечное затмение, видимое в Австралии, Новой Зеландии и островах Тихого океана',
  },
  {
    year: 2005,
    date: '31 марта',
    description: 'Полное солнечное затмение, видимое в Южной Африке, Австралии и Новой Зеландии',
  },
  {
    year: 2005,
    date: '8 апреля',
    description: 'Частное солнечное затмение, видимое в большей части Южной Америки',
  },
  {
    year: 2005,
    date: '14 октября',
    description: 'Полное солнечное затмение, видимое в Южной Америке, юго-западной части Африки и Антарктиде',
  },
  {
    year: 2005,
    date: '3 октября',
    description: 'Частное солнечное затмение, видимое в большей части Северной Америки',
  },
  {
    year: 2005,
    date: '22 сентября',
    description: 'Частное солнечное затмение, видимое в Австралии, Новой Зеландии и островах Тихого океана',
  },
  {
    year: 2005,
    date: '1 июнь',
    description: 'Частное солнечное затмение, видимое в большей части Северной Америки',
  },
  {
    year: 2005,
    date: '20 марта',
    description: 'Частное солнечное затмение, видимое в большей части Африки и Азии',
  },
  {
    year: 2005,
    date: '6 марта',
    description: 'Частное солнечное затмение, видимое в Южной Америке, Африке и островах Тихого океана',
  },
];


export const Slider = () => {
  return (
    <>
      <Swiper slidesPerView={'auto'} freeMode navigation={true} modules={[Navigation]} style={{ width: '100%', height: '100%' }}>
        {eclipseEvents.map((event, index) => (
          <SwiperSlide key={index} style={{ width: 'auto', height: '100%' }}>
            <div className="eclipse-event">
              <p>{event.year}</p>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
