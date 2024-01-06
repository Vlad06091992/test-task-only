import * as React from "react";
import { Blok } from "../blok/blok";

export type Data = DataItem[]

export type DataItem = {
  theme:string
  dates:[number,number]
  items:{year:number,description:string}[]
}

const data:Data = [
  {
    theme: "Наука",
    dates:[1991,2000],
    items: [
      {
        year: 1991,
        description: "Открытие интернета для общественности"
      },
      {
        year: 1992,
        description: "Запуск Хаббл-телескопа"
      },
      {
        year: 1993,
        description: "Описан первый экзопланет"
      },
      {
        year: 1994,
        description: "Открытие Юпитеровского спутника Шо"
      },
      {
        year: 1995,
        description: "Геном человека впервые полностью расшифрован"
      },
      {
        year: 1996,
        description: "Определение возраста Вселенной с использованием телескопа Хаббл"
      },
      {
        year: 1997,
        description: "Рождение первой овцы-клона Долли"
      },
      {
        year: 1998,
        description: "Открытие экзопланеты в системе 47 Урса Майора"
      },
      {
        year: 1999,
        description: "Определение структуры белка рибосомы"
      },
      {
        year: 2000,
        description: "Обнаружение гигантской области затмения на поверхности Солнца"
      }
    ]
  }, {
    theme: "Литература",
    dates:[1995,2004],
    items: [
      {
        year: 1995,
        description: "Выход романа 'Сотник' Александра Петрова"
      },
      {
        year: 1998,
        description: "Нобелевская премия по литературе Владимиру Звингли"
      },
      {
        year: 2001,
        description: "Публикация первого романа о Гарри Поттере, 'Гарри Поттер и философский камень'"
      },
      {
        year: 2003,
        description: "Выход романа 'Ангелы и демоны' Дэна Брауна"
      },
      {
        year: 2004,
        description: "Нобелевская премия по литературе Эльфрид Йеллинек"
      }
    ]
  },
  {
    theme: "Кино",
    dates:[1980,2004],
    items: [
      {
        year: 1980,
        description: "Выход фильма 'Империя контраатакует' (Звездные войны)"
      },
      {
        year: 1984,
        description: "Премьера фильма 'Терминатор' Джеймса Кэмерона"
      },
      {
        year: 1989,
        description: "Премьера фильма 'Назад в будущее 2'"
      },
      {
        year: 1994,
        description: "Премьера фильма 'Криминальное чтиво' Квентина Тарантино"
      },
      {
        year: 1999,
        description: "Премьера фильма 'Матрица' братьев Вачовски"
      },
      {
        year: 2004,
        description: "Выход фильма 'Властелин колец: Возвращение короля'"
      }
    ]
  }, {
    theme: "Космос",
    dates:[1957,1970],
    items: [
      {
        year: 1957,
        description: "Запуск первого искусственного спутника Земли 'Спутник-1'"
      },
      {
        year: 1961,
        description: "Первый полёт человека в космос. Гагарин на 'Востоке-1'"
      },
      {
        year: 1969,
        description: "Посадка первого человека на Луну (Аполлон-11)"
      },
      {
        year: 1971,
        description: "Запуск первой космической станции 'Салют-1'"
      },
      {
        year: 1970,
        description: "Запуск первого автоматического аппарата на поверхность Венеры (Венера-7)"
      }
    ]
  }, {
    theme: "Технологии",
    dates:[1930,1990],
    items: [
      {
        year: 1930,
        description: "Создание первого коммерческого цветного телевизора"
      },
      {
        year: 1947,
        description: "Изобретение транзистора в Белл Лабораториз"
      },
      {
        year: 1956,
        description: "Разработка первого компьютера среди частных компаний (IBM 305 RAMAC)"
      },
      {
        year: 1973,
        description: "Разработка первого мобильного телефона (Motorola DynaTAC 8000X)"
      },
      {
        year: 1983,
        description: "Появление первого Интернет домена '.com'"
      },
      {
        year: 1990,
        description: "Создание World Wide Web (WWW) Тимом Бернерс-Ли"
      }
    ]
  },
  {
    theme: "Искусство XIX-XX века",
    dates: [1800, 2000],
    items: [
      {
        year: 1818,
        description: "Выход романа 'Франкенштейн' Мэри Шелли"
      },
      {
        year: 1874,
        description: "Выставка импрессионистов в Париже"
      },
      {
        year: 1889,
        description: "Открытие Эйфелевой башни в Париже"
      },
      {
        year: 1913,
        description: "Скандал с картиной 'Искусство вора' Марселя Дюшана"
      },
      {
        year: 1924,
        description: "Манифест сюрреализма Андре Бретона"
      },
      {
        year: 1930,
        description: "Картина 'Леди с гражданской маской' Рене Магритта"
      },
      {
        year: 1953,
        description: "Возникновение концептуального искусства"
      },
      {
        year: 1962,
        description: "Картина 'Мерилин Диписи' Анди Уорхола"
      },
      {
        year: 1977,
        description: "Открытие памятника Всемирного наследия 'Галапагосские острова'"
      },
      {
        year: 1999,
        description: "Открытие Театра Лицея в Барселоне"
      }
    ]
  }
];


const App = () => {
  return (<div>
    <Blok data={data} />
  </div>);
};

export default App;
