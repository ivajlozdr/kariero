import { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import face4 from "../../assets/images/faces/4.jpg";
import face15 from "../../assets/images/faces/15.jpg";
import face11 from "../../assets/images/faces/11.jpg";
import face8 from "../../assets/images/faces/8.jpg";
import face9 from "../../assets/images/faces/9.jpg";

export const widgetData = [
  {
    title: "Total Revenue",
    value: 120000,
    options: [
      { label: "Total Revenue", value: 120000 },
      { label: "Smthn Else", value: 23872 }
    ],
    showSorting: true,
    icon: "bi-cash"
  },
  {
    title: "Total Deals",
    value: 150,
    options: [],
    showSorting: false,
    icon: "bi-briefcase"
  },
  {
    title: "Profit Earned",
    value: 20000,
    options: [],
    showSorting: false,
    icon: "bi-piggy-bank"
  },
  {
    title: "Total Customers",
    value: 500,
    options: [],
    showSorting: false,
    icon: "bi-person-circle"
  }
];

export const hardcodedData = {
  usersCount: [
    {
      user_count: 11
    }
  ],
  topRecommendations: [
    {
      id: 448,
      imdbID: "tt12888462",
      title_en: "My Octopus Teacher",
      title_bg: "Моят учител октопод",
      type: "movie",
      awards: "Won 1 Oscar. 11 wins & 15 nominations total",
      recommendations: 10,
      oscar_wins: "1",
      oscar_nominations: "0",
      total_wins: "11",
      total_nominations: "15"
    },
    {
      id: 449,
      imdbID: "tt11464826",
      title_en: "The Social Dilemma",
      title_bg: "Социалната дилема",
      type: "movie",
      awards: "Won 2 Primetime Emmys. 8 wins & 22 nominations total",
      recommendations: 9,
      oscar_wins: "0",
      oscar_nominations: "0",
      total_wins: "8",
      total_nominations: "22"
    },
    {
      id: 393,
      imdbID: "tt9208876",
      title_en: "The Falcon and the Winter Soldier",
      title_bg: "Ястребът и Зимният войник",
      type: "series",
      awards: "Nominated for 5 Primetime Emmys. 2 wins & 41 nominations total",
      recommendations: 9,
      oscar_wins: "0",
      oscar_nominations: "0",
      total_wins: "2",
      total_nominations: "41"
    },
    {
      id: 450,
      imdbID: "tt14152756",
      title_en: "Seaspiracy",
      title_bg: "Морска конспирация",
      type: "movie",
      awards: "1 nomination",
      recommendations: 8,
      oscar_wins: "0",
      oscar_nominations: "0",
      total_wins: "0",
      total_nominations: "1"
    },
    {
      id: 602,
      imdbID: "tt0816692",
      title_en: "Interstellar",
      title_bg: "Интерстелар",
      type: "movie",
      awards: "Won 1 Oscar. 44 wins & 148 nominations total",
      recommendations: 8,
      oscar_wins: "1",
      oscar_nominations: "0",
      total_wins: "44",
      total_nominations: "148"
    },
    {
      id: 409,
      imdbID: "tt10293938",
      title_en: "Outer Banks",
      title_bg: "Външните банки",
      type: "series",
      awards: "4 wins & 13 nominations",
      recommendations: 8,
      oscar_wins: "0",
      oscar_nominations: "0",
      total_wins: "4",
      total_nominations: "13"
    },
    {
      id: 406,
      imdbID: "tt2403776",
      title_en: "Shadow and Bone",
      title_bg: "Сянка и кост",
      type: "series",
      awards: "Nominated for 1 Primetime Emmy. 2 wins & 6 nominations total",
      recommendations: 7,
      oscar_wins: "0",
      oscar_nominations: "0",
      total_wins: "2",
      total_nominations: "6"
    },
    {
      id: 395,
      imdbID: "tt1312171",
      title_en: "The Umbrella Academy",
      title_bg: "Академия 'Чадър'",
      type: "series",
      awards: "Nominated for 7 Primetime Emmys. 13 wins & 61 nominations total",
      recommendations: 7,
      oscar_wins: "0",
      oscar_nominations: "0",
      total_wins: "13",
      total_nominations: "61"
    },
    {
      id: 408,
      imdbID: "tt9059350",
      title_en: "Warrior Nun",
      title_bg: "Монахинята-войска",
      type: "series",
      awards: "6 wins & 9 nominations",
      recommendations: 7,
      oscar_wins: "0",
      oscar_nominations: "0",
      total_wins: "6",
      total_nominations: "9"
    },
    {
      id: 456,
      imdbID: "tt11989890",
      title_en: "David Attenborough: A Life on Our Planet",
      title_bg: "Дейвид Атънбъро: Животът на нашата планета",
      type: "movie",
      awards: "Won 3 Primetime Emmys. 8 wins & 10 nominations total",
      recommendations: 6,
      oscar_wins: "0",
      oscar_nominations: "0",
      total_wins: "8",
      total_nominations: "10"
    }
  ],
  topGenres: [
    {
      genre_en: "Drama",
      genre_bg: "Драма",
      count: 190
    },
    {
      genre_en: "Adventure",
      genre_bg: "Приключенски",
      count: 161
    },
    {
      genre_en: "Action",
      genre_bg: "Екшън",
      count: 133
    },
    {
      genre_en: "Comedy",
      genre_bg: "Комедия",
      count: 73
    },
    {
      genre_en: "Documentary",
      genre_bg: "Документален",
      count: 72
    },
    {
      genre_en: "Animation",
      genre_bg: "Анимация",
      count: 49
    },
    {
      genre_en: "Sci-Fi",
      genre_bg: "Научна фантастика",
      count: 47
    },
    {
      genre_en: "Fantasy",
      genre_bg: "Фентъзи",
      count: 32
    },
    {
      genre_en: "Crime",
      genre_bg: "Криминален",
      count: 31
    },
    {
      genre_en: "Biography",
      genre_bg: "Биография",
      count: 28
    }
  ],
  genrePopularityOverTime: {
    "1944": {
      Crime: {
        genre_en: "Crime",
        genre_bg: "Криминален",
        genre_count: 3
      }
    },
    "1947": {
      Crime: {
        genre_en: "Crime",
        genre_bg: "Криминален",
        genre_count: 3
      }
    },
    "1949": {
      "Film-Noir": {
        genre_en: "Film-Noir",
        genre_bg: "Филм-ноар",
        genre_count: 3
      }
    },
    "1950": {
      Crime: {
        genre_en: "Crime",
        genre_bg: "Криминален",
        genre_count: 3
      }
    },
    "1955": {
      Crime: {
        genre_en: "Crime",
        genre_bg: "Криминален",
        genre_count: 3
      }
    },
    "1990": {
      Adventure: {
        genre_en: "Adventure",
        genre_bg: "Приключенски",
        genre_count: 6
      }
    },
    "1991": {
      Comedy: {
        genre_en: "Comedy",
        genre_bg: "Комедия",
        genre_count: 2
      }
    },
    "2000": {
      Drama: {
        genre_en: "Drama",
        genre_bg: "Драма",
        genre_count: 2
      }
    },
    "2003": {
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 3
      }
    },
    "2005": {
      Adventure: {
        genre_en: "Adventure",
        genre_bg: "Приключенски",
        genre_count: 3
      },
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 3
      },
      Comedy: {
        genre_en: "Comedy",
        genre_bg: "Комедия",
        genre_count: 2
      }
    },
    "2007": {
      Comedy: {
        genre_en: "Comedy",
        genre_bg: "Комедия",
        genre_count: 3
      },
      Drama: {
        genre_en: "Drama",
        genre_bg: "Драма",
        genre_count: 3
      }
    },
    "2009": {
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 6
      },
      Comedy: {
        genre_en: "Comedy",
        genre_bg: "Комедия",
        genre_count: 3
      }
    },
    "2010": {
      Action: {
        genre_en: "Action",
        genre_bg: "Екшън",
        genre_count: 12
      },
      Adventure: {
        genre_en: "Adventure",
        genre_bg: "Приключенски",
        genre_count: 6
      },
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 3
      }
    },
    "2011": {
      Biography: {
        genre_en: "Biography",
        genre_bg: "Биография",
        genre_count: 3
      }
    },
    "2012": {
      Action: {
        genre_en: "Action",
        genre_bg: "Екшън",
        genre_count: 3
      },
      Drama: {
        genre_en: "Drama",
        genre_bg: "Драма",
        genre_count: 3
      }
    },
    "2013": {
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 3
      },
      Comedy: {
        genre_en: "Comedy",
        genre_bg: "Комедия",
        genre_count: 3
      },
      Drama: {
        genre_en: "Drama",
        genre_bg: "Драма",
        genre_count: 14
      },
      Horror: {
        genre_en: "Horror",
        genre_bg: "Ужаси",
        genre_count: 3
      }
    },
    "2014": {
      Action: {
        genre_en: "Action",
        genre_bg: "Екшън",
        genre_count: 42
      },
      Adventure: {
        genre_en: "Adventure",
        genre_bg: "Приключенски",
        genre_count: 24
      },
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 3
      },
      Drama: {
        genre_en: "Drama",
        genre_bg: "Драма",
        genre_count: 2
      }
    },
    "2015": {
      Adventure: {
        genre_en: "Adventure",
        genre_bg: "Приключенски",
        genre_count: 18
      },
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 15
      }
    },
    "2016": {
      Action: {
        genre_en: "Action",
        genre_bg: "Екшън",
        genre_count: 3
      },
      Adventure: {
        genre_en: "Adventure",
        genre_bg: "Приключенски",
        genre_count: 3
      },
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 21
      },
      Comedy: {
        genre_en: "Comedy",
        genre_bg: "Комедия",
        genre_count: 13
      },
      Crime: {
        genre_en: "Crime",
        genre_bg: "Криминален",
        genre_count: 3
      },
      Documentary: {
        genre_en: "Documentary",
        genre_bg: "Документален",
        genre_count: 1
      },
      Drama: {
        genre_en: "Drama",
        genre_bg: "Драма",
        genre_count: 15
      }
    },
    "2017": {
      Action: {
        genre_en: "Action",
        genre_bg: "Екшън",
        genre_count: 27
      },
      Adventure: {
        genre_en: "Adventure",
        genre_bg: "Приключенски",
        genre_count: 9
      },
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 15
      },
      Biography: {
        genre_en: "Biography",
        genre_bg: "Биография",
        genre_count: 6
      },
      Comedy: {
        genre_en: "Comedy",
        genre_bg: "Комедия",
        genre_count: 5
      },
      Documentary: {
        genre_en: "Documentary",
        genre_bg: "Документален",
        genre_count: 2
      },
      Drama: {
        genre_en: "Drama",
        genre_bg: "Драма",
        genre_count: 7
      }
    },
    "2018": {
      Action: {
        genre_en: "Action",
        genre_bg: "Екшън",
        genre_count: 33
      },
      Adventure: {
        genre_en: "Adventure",
        genre_bg: "Приключенски",
        genre_count: 3
      },
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 15
      },
      Comedy: {
        genre_en: "Comedy",
        genre_bg: "Комедия",
        genre_count: 9
      },
      Documentary: {
        genre_en: "Documentary",
        genre_bg: "Документален",
        genre_count: 5
      },
      Drama: {
        genre_en: "Drama",
        genre_bg: "Драма",
        genre_count: 15
      },
      Horror: {
        genre_en: "Horror",
        genre_bg: "Ужаси",
        genre_count: 3
      }
    },
    "2019": {
      Action: {
        genre_en: "Action",
        genre_bg: "Екшън",
        genre_count: 36
      },
      Adventure: {
        genre_en: "Adventure",
        genre_bg: "Приключенски",
        genre_count: 9
      },
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 3
      },
      Biography: {
        genre_en: "Biography",
        genre_bg: "Биография",
        genre_count: 15
      },
      Comedy: {
        genre_en: "Comedy",
        genre_bg: "Комедия",
        genre_count: 6
      },
      Crime: {
        genre_en: "Crime",
        genre_bg: "Криминален",
        genre_count: 2
      },
      Documentary: {
        genre_en: "Documentary",
        genre_bg: "Документален",
        genre_count: 9
      },
      Drama: {
        genre_en: "Drama",
        genre_bg: "Драма",
        genre_count: 5
      }
    },
    "2020": {
      Action: {
        genre_en: "Action",
        genre_bg: "Екшън",
        genre_count: 60
      },
      Adventure: {
        genre_en: "Adventure",
        genre_bg: "Приключенски",
        genre_count: 12
      },
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 21
      },
      Comedy: {
        genre_en: "Comedy",
        genre_bg: "Комедия",
        genre_count: 6
      },
      Documentary: {
        genre_en: "Documentary",
        genre_bg: "Документален",
        genre_count: 77
      },
      Drama: {
        genre_en: "Drama",
        genre_bg: "Драма",
        genre_count: 45
      }
    },
    "2021": {
      Action: {
        genre_en: "Action",
        genre_bg: "Екшън",
        genre_count: 84
      },
      Adventure: {
        genre_en: "Adventure",
        genre_bg: "Приключенски",
        genre_count: 6
      },
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 21
      },
      Biography: {
        genre_en: "Biography",
        genre_bg: "Биография",
        genre_count: 9
      },
      Comedy: {
        genre_en: "Comedy",
        genre_bg: "Комедия",
        genre_count: 3
      },
      Documentary: {
        genre_en: "Documentary",
        genre_bg: "Документален",
        genre_count: 37
      },
      Drama: {
        genre_en: "Drama",
        genre_bg: "Драма",
        genre_count: 5
      }
    },
    "2022": {
      Action: {
        genre_en: "Action",
        genre_bg: "Екшън",
        genre_count: 24
      },
      Animation: {
        genre_en: "Animation",
        genre_bg: "Анимация",
        genre_count: 15
      },
      Documentary: {
        genre_en: "Documentary",
        genre_bg: "Документален",
        genre_count: 10
      },
      Drama: {
        genre_en: "Drama",
        genre_bg: "Драма",
        genre_count: 3
      }
    },
    "2023": {
      Action: {
        genre_en: "Action",
        genre_bg: "Екшън",
        genre_count: 3
      },
      Biography: {
        genre_en: "Biography",
        genre_bg: "Биография",
        genre_count: 3
      }
    }
  },
  topActors: [
    {
      actor_en: "Jessica Chastain",
      actor_bg: "Джесика Частейн",
      actor_count: 14
    },
    {
      actor_en: "David Attenborough",
      actor_bg: "Дейвид Атънбъро",
      actor_count: 11
    },
    {
      actor_en: "Emily Blunt",
      actor_bg: "Емили Блънт",
      actor_count: 11
    },
    {
      actor_en: "Craig Foster",
      actor_bg: "Крейг Фостър",
      actor_count: 10
    },
    {
      actor_en: "Tom Foster",
      actor_bg: "Том Фостър",
      actor_count: 10
    },
    {
      actor_en: "Tristan Harris",
      actor_bg: "Тристан Харис",
      actor_count: 9
    },
    {
      actor_en: "Jeff Seibert",
      actor_bg: "Джеф Сейбърт",
      actor_count: 9
    },
    {
      actor_en: "Anthony Mackie",
      actor_bg: "Антъни Маки",
      actor_count: 9
    },
    {
      actor_en: "Bailey Richardson",
      actor_bg: "Бейли Ричардсън",
      actor_count: 9
    },
    {
      actor_en: "Sebastian Stan",
      actor_bg: "Себастиан Стан",
      actor_count: 9
    }
  ],
  topDirectors: [
    {
      director_en: "Christopher Nolan",
      director_bg: "Кристофър Нолан",
      director_count: 12
    },
    {
      director_en: "Pippa Ehrlich",
      director_bg: "Пипа Ерлих",
      director_count: 10
    },
    {
      director_en: "James Reed",
      director_bg: "Джеймс Рийд",
      director_count: 10
    },
    {
      director_en: "Jeff Orlowski-Yang",
      director_bg: "Джеф Орловски-Янг",
      director_count: 9
    },
    {
      director_en: "Pete Docter",
      director_bg: "Пийт Доктър",
      director_count: 8
    },
    {
      director_en: "Denis Villeneuve",
      director_bg: "Дени Вилньов",
      director_count: 8
    },
    {
      director_en: "Ali Tabrizi",
      director_bg: "Али Тебризи",
      director_count: 8
    },
    {
      director_en: "Ridley Scott",
      director_bg: "Ридли Скот",
      director_count: 7
    },
    {
      director_en: "Don Hall",
      director_bg: "Дон Хол",
      director_count: 7
    },
    {
      director_en: "Alastair Fothergill",
      director_bg: "Алистър Фотъргил",
      director_count: 6
    }
  ],
  topWriters: [
    {
      writer_en: "Christopher Nolan",
      writer_bg: "Кристофър Нолан",
      writer_count: 12
    },
    {
      writer_en: "Eric Heisserer",
      writer_bg: "Ерик Хайсерер",
      writer_count: 11
    },
    {
      writer_en: "Pippa Ehrlich",
      writer_bg: "Пипа Ерлих",
      writer_count: 10
    },
    {
      writer_en: "James Reed",
      writer_bg: "Джеймс Рийд",
      writer_count: 10
    },
    {
      writer_en: "Malcolm Spellman",
      writer_bg: "Малкълм Спелман",
      writer_count: 9
    },
    {
      writer_en: "Vickie Curtis",
      writer_bg: "Вики Къртис",
      writer_count: 9
    },
    {
      writer_en: "Davis Coombe",
      writer_bg: "Дейвис Кумб",
      writer_count: 9
    },
    {
      writer_en: "Jeff Orlowski-Yang",
      writer_bg: "Джеф Орловски-Янг",
      writer_count: 9
    },
    {
      writer_en: "Jonathan Nolan",
      writer_bg: "Джонатан Нолан",
      writer_count: 8
    },
    {
      writer_en: "Shannon Burke",
      writer_bg: "Шанън Бърк",
      writer_count: 8
    }
  ],
  oscarsByMovie: [
    {
      id: 235,
      imdbID: "tt0036775",
      title_en: "Double Indemnity",
      title_bg: "Двойна игра",
      type: "movie",
      awards: "Nominated for 7 Oscars. 2 wins & 9 nominations total",
      oscar_wins: "0",
      oscar_nominations: "7"
    },
    {
      id: 237,
      imdbID: "tt0041959",
      title_en: "The Third Man",
      title_bg: "Третият човек",
      type: "movie",
      awards: "Won 1 Oscar. 5 wins & 4 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 272,
      imdbID: "tt0249462",
      title_en: "Billy Elliot",
      title_bg: "Били Елиът",
      type: "movie",
      awards: "Nominated for 3 Oscars. 55 wins & 71 nominations total",
      oscar_wins: "0",
      oscar_nominations: "3"
    },
    {
      id: 676,
      imdbID: "tt0266543",
      title_en: "Finding Nemo",
      title_bg: "Търсенето на Немо",
      type: "movie",
      awards: "Won 1 Oscar. 49 wins & 63 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 631,
      imdbID: "tt0327597",
      title_en: "Coraline",
      title_bg: "Коралайн и тайната на огледалото",
      type: "movie",
      awards: "Nominated for 1 Oscar. 8 wins & 46 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 673,
      imdbID: "tt0363771",
      title_en:
        "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      title_bg: "Хрониките на Нарния: Лъвът, Вещицата и Гардероба",
      type: "movie",
      awards: "Won 1 Oscar. 18 wins & 46 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 602,
      imdbID: "tt0816692",
      title_en: "Interstellar",
      title_bg: "Интерстелар",
      type: "movie",
      awards: "Won 1 Oscar. 44 wins & 148 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 710,
      imdbID: "tt1023114",
      title_en: "The Way Back",
      title_bg: "Пътят назад",
      type: "movie",
      awards: "Nominated for 1 Oscar. 4 wins & 5 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 498,
      imdbID: "tt10272386",
      title_en: "The Father",
      title_bg: "Бащата",
      type: "movie",
      awards: "Won 2 Oscars. 37 wins & 168 nominations total",
      oscar_wins: "2",
      oscar_nominations: "0"
    },
    {
      id: 502,
      imdbID: "tt10293406",
      title_en: "The Power of the Dog",
      title_bg: "Силата на кучето",
      type: "movie",
      awards: "Won 1 Oscar. 289 wins & 320 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 649,
      imdbID: "tt10366460",
      title_en: "CODA",
      title_bg: "КОДА: Дете на глухи родители",
      type: "movie",
      awards: "Won 3 Oscars. 66 wins & 147 nominations total",
      oscar_wins: "3",
      oscar_nominations: "0"
    },
    {
      id: 675,
      imdbID: "tt1049413",
      title_en: "Up",
      title_bg: "В небето",
      type: "movie",
      awards: "Won 2 Oscars. 81 wins & 88 nominations total",
      oscar_wins: "2",
      oscar_nominations: "0"
    },
    {
      id: 621,
      imdbID: "tt10539608",
      title_en: "The Midnight Sky",
      title_bg: "Полунощно небе",
      type: "movie",
      awards: "Nominated for 1 Oscar. 5 wins & 46 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 500,
      imdbID: "tt10633456",
      title_en: "Minari",
      title_bg: "Минири",
      type: "movie",
      awards: "Won 1 Oscar. 122 wins & 245 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 487,
      imdbID: "tt10706602",
      title_en: "Collective",
      title_bg: "Колектив",
      type: "movie",
      awards: "Nominated for 2 Oscars. 37 wins & 55 nominations total",
      oscar_wins: "0",
      oscar_nominations: "2"
    },
    {
      id: 686,
      imdbID: "tt1070874",
      title_en: "The Trial of the Chicago 7",
      title_bg: "Процесът срещу Чикагската седморка",
      type: "movie",
      awards: "Nominated for 6 Oscars. 58 wins & 192 nominations total",
      oscar_wins: "0",
      oscar_nominations: "6"
    },
    {
      id: 514,
      imdbID: "tt11422728",
      title_en:
        "Summer of Soul (...Or, When the Revolution Could Not Be Televised)",
      title_bg:
        "Лятото на душата (...Или когато революцията не можеше да бъде излъчена)",
      type: "movie",
      awards: "Won 1 Oscar. 73 wins & 43 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 619,
      imdbID: "tt1160419",
      title_en: "Dune: Part One",
      title_bg: "Дюн",
      type: "movie",
      awards: "Won 6 Oscars. 177 wins & 300 nominations total",
      oscar_wins: "6",
      oscar_nominations: "0"
    },
    {
      id: 643,
      imdbID: "tt12801262",
      title_en: "Luca",
      title_bg: "Лука",
      type: "movie",
      awards: "Nominated for 1 Oscar. 6 wins & 83 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 448,
      imdbID: "tt12888462",
      title_en: "My Octopus Teacher",
      title_bg: "Моят учител октопод",
      type: "movie",
      awards: "Won 1 Oscar. 11 wins & 15 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 746,
      imdbID: "tt1375666",
      title_en: "Inception",
      title_bg: "Генезис",
      type: "movie",
      awards: "Won 4 Oscars. 159 wins & 220 nominations total",
      oscar_wins: "4",
      oscar_nominations: "0"
    },
    {
      id: 605,
      imdbID: "tt1454468",
      title_en: "Gravity",
      title_bg: "Гравитация",
      type: "movie",
      awards: "Won 7 Oscars. 240 wins & 187 nominations total",
      oscar_wins: "7",
      oscar_nominations: "0"
    },
    {
      id: 271,
      imdbID: "tt1485796",
      title_en: "The Greatest Showman",
      title_bg: "Най-великият шоумен",
      type: "movie",
      awards: "Nominated for 1 Oscar. 17 wins & 32 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 690,
      imdbID: "tt1517451",
      title_en: "A Star Is Born",
      title_bg: "Роди се звезда",
      type: "movie",
      awards: "Won 1 Oscar. 99 wins & 290 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 508,
      imdbID: "tt16227014",
      title_en: "Fire of Love",
      title_bg: "Огън на любовта",
      type: "movie",
      awards: "Nominated for 1 Oscar. 34 wins & 67 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 510,
      imdbID: "tt16377862",
      title_en: "All That Breathes",
      title_bg: "Всичко, което диша",
      type: "movie",
      awards: "Nominated for 1 Oscar. 24 wins & 43 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 208,
      imdbID: "tt1677720",
      title_en: "Ready Player One",
      title_bg: "Играч първи, приготви се",
      type: "movie",
      awards: "Nominated for 1 Oscar. 11 wins & 57 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 588,
      imdbID: "tt1679335",
      title_en: "Trolls",
      title_bg: "Тролчета",
      type: "movie",
      awards: "Nominated for 1 Oscar. 4 wins & 37 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 511,
      imdbID: "tt17041964",
      title_en: "Navalny",
      title_bg: "Навални",
      type: "movie",
      awards: "Won 1 Oscar. 17 wins & 32 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 699,
      imdbID: "tt1856101",
      title_en: "Blade Runner 2049",
      title_bg: "Блейд Рънър 2049",
      type: "movie",
      awards: "Won 2 Oscars. 100 wins & 163 nominations total",
      oscar_wins: "2",
      oscar_nominations: "0"
    },
    {
      id: 709,
      imdbID: "tt1950186",
      title_en: "Ford v Ferrari",
      title_bg: "Пълно ускорение",
      type: "movie",
      awards: "Won 2 Oscars. 26 wins & 88 nominations total",
      oscar_wins: "2",
      oscar_nominations: "0"
    },
    {
      id: 207,
      imdbID: "tt2015381",
      title_en: "Guardians of the Galaxy",
      title_bg: "Пазителите на галактиката",
      type: "movie",
      awards: "Nominated for 2 Oscars. 52 wins & 103 nominations total",
      oscar_wins: "0",
      oscar_nominations: "2"
    },
    {
      id: 613,
      imdbID: "tt2066051",
      title_en: "Rocketman",
      title_bg: "Рокетмен",
      type: "movie",
      awards: "Won 1 Oscar. 25 wins & 89 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 590,
      imdbID: "tt2096673",
      title_en: "Inside Out",
      title_bg: "Отвътре навън",
      type: "movie",
      awards: "Won 1 Oscar. 99 wins & 118 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 758,
      imdbID: "tt2245084",
      title_en: "Big Hero 6",
      title_bg: "Героичната шесторка",
      type: "movie",
      awards: "Won 1 Oscar. 17 wins & 58 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 587,
      imdbID: "tt2380307",
      title_en: "Coco",
      title_bg: "Тайната на Коко",
      type: "movie",
      awards: "Won 2 Oscars. 112 wins & 42 nominations total",
      oscar_wins: "2",
      oscar_nominations: "0"
    },
    {
      id: 604,
      imdbID: "tt2543164",
      title_en: "Arrival",
      title_bg: "Първи контакт",
      type: "movie",
      awards: "Won 1 Oscar. 71 wins & 268 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 585,
      imdbID: "tt2584384",
      title_en: "Jojo Rabbit",
      title_bg: "Джоджо Заека",
      type: "movie",
      awards: "Won 1 Oscar. 52 wins & 192 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 600,
      imdbID: "tt2948356",
      title_en: "Zootopia",
      title_bg: "Зоотрополис",
      type: "movie",
      awards: "Won 1 Oscar. 49 wins & 75 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 597,
      imdbID: "tt2948372",
      title_en: "Soul",
      title_bg: "За душата",
      type: "movie",
      awards: "Won 2 Oscars. 125 wins & 94 nominations total",
      oscar_wins: "2",
      oscar_nominations: "0"
    },
    {
      id: 584,
      imdbID: "tt3224458",
      title_en: "A Beautiful Day in the Neighborhood",
      title_bg: "Хубав ден в квартала",
      type: "movie",
      awards: "Nominated for 1 Oscar. 10 wins & 64 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 607,
      imdbID: "tt3228774",
      title_en: "Cruella",
      title_bg: "Круела",
      type: "movie",
      awards: "Won 1 Oscar. 29 wins & 44 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 586,
      imdbID: "tt3281548",
      title_en: "Little Women",
      title_bg: "Малки жени",
      type: "movie",
      awards: "Won 1 Oscar. 78 wins & 239 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 624,
      imdbID: "tt3521164",
      title_en: "Moana",
      title_bg: "Моана",
      type: "movie",
      awards: "Nominated for 2 Oscars. 22 wins & 90 nominations total",
      oscar_wins: "0",
      oscar_nominations: "2"
    },
    {
      id: 603,
      imdbID: "tt3659388",
      title_en: "The Martian",
      title_bg: "Марсианецът",
      type: "movie",
      awards: "Nominated for 7 Oscars. 40 wins & 199 nominations total",
      oscar_wins: "0",
      oscar_nominations: "7"
    },
    {
      id: 628,
      imdbID: "tt3783958",
      title_en: "La La Land",
      title_bg: "Ла Ла Ленд",
      type: "movie",
      awards: "Won 6 Oscars. 242 wins & 307 nominations total",
      oscar_wins: "6",
      oscar_nominations: "0"
    },
    {
      id: 200,
      imdbID: "tt3890160",
      title_en: "Baby Driver",
      title_bg: "Бейби Драйвър",
      type: "movie",
      awards: "Nominated for 3 Oscars. 43 wins & 66 nominations total",
      oscar_wins: "0",
      oscar_nominations: "3"
    },
    {
      id: 626,
      imdbID: "tt4520988",
      title_en: "Frozen II",
      title_bg: "Замръзналото кралство II",
      type: "movie",
      awards: "Nominated for 1 Oscar. 19 wins & 95 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 203,
      imdbID: "tt4633694",
      title_en: "Spider-Man: Into the Spider-Verse",
      title_bg: "Спайдър-мен: В Спайди-вселената",
      type: "movie",
      awards: "Won 1 Oscar. 85 wins & 61 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 640,
      imdbID: "tt4925292",
      title_en: "Lady Bird",
      title_bg: "Лейди Бърд",
      type: "movie",
      awards: "Nominated for 5 Oscars. 124 wins & 228 nominations total",
      oscar_wins: "0",
      oscar_nominations: "5"
    },
    {
      id: 693,
      imdbID: "tt5013056",
      title_en: "Dunkirk",
      title_bg: "Дюнкерк",
      type: "movie",
      awards: "Won 3 Oscars. 68 wins & 236 nominations total",
      oscar_wins: "3",
      oscar_nominations: "0"
    },
    {
      id: 598,
      imdbID: "tt5109280",
      title_en: "Raya and the Last Dragon",
      title_bg: "Рая и последният дракон",
      type: "movie",
      awards: "Nominated for 1 Oscar. 13 wins & 62 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 688,
      imdbID: "tt5580390",
      title_en: "The Shape of Water",
      title_bg: "Формата на водата",
      type: "movie",
      awards: "Won 4 Oscars. 138 wins & 350 nominations total",
      oscar_wins: "4",
      oscar_nominations: "0"
    },
    {
      id: 355,
      imdbID: "tt6333060",
      title_en: "Icarus",
      title_bg: "Икар",
      type: "movie",
      awards: "Won 1 Oscar. 9 wins & 14 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 606,
      imdbID: "tt6644200",
      title_en: "A Quiet Place",
      title_bg: "Нито звук",
      type: "movie",
      awards: "Nominated for 1 Oscar. 38 wins & 129 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 617,
      imdbID: "tt6723592",
      title_en: "Tenet",
      title_bg: "Тенет",
      type: "movie",
      awards: "Won 1 Oscar. 49 wins & 136 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 582,
      imdbID: "tt6751668",
      title_en: "Parasite",
      title_bg: "Паразит",
      type: "movie",
      awards: "Won 4 Oscars. 316 wins & 266 nominations total",
      oscar_wins: "4",
      oscar_nominations: "0"
    },
    {
      id: 661,
      imdbID: "tt7146812",
      title_en: "Onward",
      title_bg: "Напред",
      type: "movie",
      awards: "Nominated for 1 Oscar. 4 wins & 66 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 646,
      imdbID: "tt7488208",
      title_en: "Over the Moon",
      title_bg: "Над луната",
      type: "movie",
      awards: "Nominated for 1 Oscar. 3 wins & 61 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 353,
      imdbID: "tt7775622",
      title_en: "Free Solo",
      title_bg: "Свободно соло",
      type: "movie",
      awards: "Won 1 Oscar. 31 wins & 54 nominations total",
      oscar_wins: "1",
      oscar_nominations: "0"
    },
    {
      id: 645,
      imdbID: "tt7979580",
      title_en: "The Mitchells vs. the Machines",
      title_bg: "Семейство Мичъл срещу машините",
      type: "movie",
      awards: "Nominated for 1 Oscar. 46 wins & 66 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 692,
      imdbID: "tt8579674",
      title_en: "1917",
      title_bg: "1917",
      type: "movie",
      awards: "Won 3 Oscars. 135 wins & 207 nominations total",
      oscar_wins: "3",
      oscar_nominations: "0"
    },
    {
      id: 651,
      imdbID: "tt8721424",
      title_en: "tick, tick... BOOM!",
      title_bg: "Тик, Тик... Бум!",
      type: "movie",
      awards: "Nominated for 2 Oscars. 38 wins & 116 nominations total",
      oscar_wins: "0",
      oscar_nominations: "2"
    },
    {
      id: 452,
      imdbID: "tt8923484",
      title_en: "Crip Camp",
      title_bg: "Лагер за инвалиди",
      type: "movie",
      awards: "Nominated for 1 Oscar. 11 wins & 35 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 685,
      imdbID: "tt9214832",
      title_en: "Emma.",
      title_bg: "Ема",
      type: "movie",
      awards: "Nominated for 2 Oscars. 11 wins & 61 nominations total",
      oscar_wins: "0",
      oscar_nominations: "2"
    },
    {
      id: 595,
      imdbID: "tt9288046",
      title_en: "The Sea Beast",
      title_bg: "Морското чудовище",
      type: "movie",
      awards: "Nominated for 1 Oscar. 13 nominations total",
      oscar_wins: "0",
      oscar_nominations: "1"
    },
    {
      id: 499,
      imdbID: "tt9770150",
      title_en: "Nomadland",
      title_bg: "Земя на номади",
      type: "movie",
      awards: "Won 3 Oscars. 254 wins & 155 nominations total",
      oscar_wins: "3",
      oscar_nominations: "0"
    }
  ],
  totalAwardsByMovieOrSeries: [
    {
      id: 235,
      imdbID: "tt0036775",
      title_en: "Double Indemnity",
      title_bg: "Двойна игра",
      type: "movie",
      awards: "Nominated for 7 Oscars. 2 wins & 9 nominations total",
      total_wins: "2",
      total_nominations: "9"
    },
    {
      id: 238,
      imdbID: "tt0039689",
      title_en: "Out of the Past",
      title_bg: "Извън миналото",
      type: "movie",
      awards: "1 win",
      total_wins: "1",
      total_nominations: "0"
    },
    {
      id: 237,
      imdbID: "tt0041959",
      title_en: "The Third Man",
      title_bg: "Третият човек",
      type: "movie",
      awards: "Won 1 Oscar. 5 wins & 4 nominations total",
      total_wins: "5",
      total_nominations: "4"
    },
    {
      id: 239,
      imdbID: "tt0042788",
      title_en: "Night and the City",
      title_bg: "Нощ и градът",
      type: "movie",
      awards: "N/A",
      total_wins: "0",
      total_nominations: "0"
    },
    {
      id: 236,
      imdbID: "tt0048261",
      title_en: "Kiss Me Deadly",
      title_bg: "Целуни ме смъртоносно",
      type: "movie",
      awards: "1 win & 1 nomination",
      total_wins: "1",
      total_nominations: "1"
    },
    {
      id: 610,
      imdbID: "tt0100944",
      title_en: "The Witches",
      title_bg: "Вещиците",
      type: "movie",
      awards: "Nominated for 1 BAFTA Award3 wins & 8 nominations total",
      total_wins: "3",
      total_nominations: "8"
    },
    {
      id: 663,
      imdbID: "tt0102536",
      title_en: "Night on Earth",
      title_bg: "Нощта на Земята",
      type: "movie",
      awards: "1 win & 1 nomination",
      total_wins: "1",
      total_nominations: "1"
    },
    {
      id: 272,
      imdbID: "tt0249462",
      title_en: "Billy Elliot",
      title_bg: "Били Елиът",
      type: "movie",
      awards: "Nominated for 3 Oscars. 55 wins & 71 nominations total",
      total_wins: "55",
      total_nominations: "71"
    },
    {
      id: 436,
      imdbID: "tt0257516",
      title_en: "Cursed",
      title_bg: "Прокълната",
      type: "movie",
      awards: "3 nominations",
      total_wins: "0",
      total_nominations: "3"
    },
    {
      id: 676,
      imdbID: "tt0266543",
      title_en: "Finding Nemo",
      title_bg: "Търсенето на Немо",
      type: "movie",
      awards: "Won 1 Oscar. 49 wins & 63 nominations total",
      total_wins: "49",
      total_nominations: "63"
    },
    {
      id: 631,
      imdbID: "tt0327597",
      title_en: "Coraline",
      title_bg: "Коралайн и тайната на огледалото",
      type: "movie",
      awards: "Nominated for 1 Oscar. 8 wins & 46 nominations total",
      total_wins: "8",
      total_nominations: "46"
    },
    {
      id: 673,
      imdbID: "tt0363771",
      title_en:
        "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      title_bg: "Хрониките на Нарния: Лъвът, Вещицата и Гардероба",
      type: "movie",
      awards: "Won 1 Oscar. 18 wins & 46 nominations total",
      total_wins: "18",
      total_nominations: "46"
    },
    {
      id: 674,
      imdbID: "tt0398808",
      title_en: "Bridge to Terabithia",
      title_bg: "Мост до Терабития",
      type: "movie",
      awards: "6 wins & 5 nominations",
      total_wins: "6",
      total_nominations: "5"
    },
    {
      id: 249,
      imdbID: "tt0417299",
      title_en: "Avatar: The Last Airbender",
      title_bg: "Аватар: Легенда за Анг",
      type: "series",
      awards: "Won 1 Primetime Emmy. 9 wins & 7 nominations total",
      total_wins: "9",
      total_nominations: "7"
    },
    {
      id: 274,
      imdbID: "tt0427327",
      title_en: "Hairspray",
      title_bg: "Лак за коса",
      type: "movie",
      awards: "Nominated for 1 BAFTA Award21 wins & 45 nominations total",
      total_wins: "21",
      total_nominations: "45"
    },
    {
      id: 201,
      imdbID: "tt0446029",
      title_en: "Scott Pilgrim vs. The World",
      title_bg: "Скот Пилгрим срещу света",
      type: "movie",
      awards: "18 wins & 66 nominations",
      total_wins: "18",
      total_nominations: "66"
    },
    {
      id: 444,
      imdbID: "tt0455944",
      title_en: "The Equalizer",
      title_bg: "Закрилникът",
      type: "movie",
      awards: "1 win & 9 nominations",
      total_wins: "1",
      total_nominations: "9"
    },
    {
      id: 213,
      imdbID: "tt0814255",
      title_en: "Percy Jackson & the Olympians: The Lightning Thief",
      title_bg: "Пърси Джаксън и боговете на Олимп: Похитителят на мълнии",
      type: "movie",
      awards: "11 nominations",
      total_wins: "0",
      total_nominations: "11"
    },
    {
      id: 602,
      imdbID: "tt0816692",
      title_en: "Interstellar",
      title_bg: "Интерстелар",
      type: "movie",
      awards: "Won 1 Oscar. 44 wins & 148 nominations total",
      total_wins: "44",
      total_nominations: "148"
    },
    {
      id: 677,
      imdbID: "tt0870154",
      title_en: "Jungle Cruise",
      title_bg: "Круиз в джунглата",
      type: "movie",
      awards: "5 wins & 9 nominations",
      total_wins: "5",
      total_nominations: "9"
    },
    {
      id: 495,
      imdbID: "tt10048342",
      title_en: "The Queen's Gambit",
      title_bg: "Ферцовият гамбит",
      type: "series",
      awards: "Won 11 Primetime Emmys. 58 wins & 53 nominations total",
      total_wins: "58",
      total_nominations: "53"
    },
    {
      id: 394,
      imdbID: "tt10160804",
      title_en: "Hawkeye",
      title_bg: "Хоукай",
      type: "series",
      awards: "Nominated for 2 Primetime Emmys. 2 wins & 16 nominations total",
      total_wins: "2",
      total_nominations: "16"
    },
    {
      id: 710,
      imdbID: "tt1023114",
      title_en: "The Way Back",
      title_bg: "Пътят назад",
      type: "movie",
      awards: "Nominated for 1 Oscar. 4 wins & 5 nominations total",
      total_wins: "4",
      total_nominations: "5"
    },
    {
      id: 498,
      imdbID: "tt10272386",
      title_en: "The Father",
      title_bg: "Бащата",
      type: "movie",
      awards: "Won 2 Oscars. 37 wins & 168 nominations total",
      total_wins: "37",
      total_nominations: "168"
    },
    {
      id: 502,
      imdbID: "tt10293406",
      title_en: "The Power of the Dog",
      title_bg: "Силата на кучето",
      type: "movie",
      awards: "Won 1 Oscar. 289 wins & 320 nominations total",
      total_wins: "289",
      total_nominations: "320"
    },
    {
      id: 409,
      imdbID: "tt10293938",
      title_en: "Outer Banks",
      title_bg: "Външните банки",
      type: "series",
      awards: "4 wins & 13 nominations",
      total_wins: "4",
      total_nominations: "13"
    },
    {
      id: 593,
      imdbID: "tt10298810",
      title_en: "Lightyear",
      title_bg: "Баз Светлинна година",
      type: "movie",
      awards: "2 wins & 23 nominations",
      total_wins: "2",
      total_nominations: "23"
    },
    {
      id: 592,
      imdbID: "tt10298840",
      title_en: "Strange World",
      title_bg: "Странен свят",
      type: "movie",
      awards: "9 nominations",
      total_wins: "0",
      total_nominations: "9"
    },
    {
      id: 649,
      imdbID: "tt10366460",
      title_en: "CODA",
      title_bg: "КОДА: Дете на глухи родители",
      type: "movie",
      awards: "Won 3 Oscars. 66 wins & 147 nominations total",
      total_wins: "66",
      total_nominations: "147"
    },
    {
      id: 246,
      imdbID: "tt10482560",
      title_en: "Kipo and the Age of Wonderbeasts",
      title_bg: "Кипо и епохата на чудесните зверове",
      type: "series",
      awards: "3 nominations",
      total_wins: "0",
      total_nominations: "3"
    },
    {
      id: 675,
      imdbID: "tt1049413",
      title_en: "Up",
      title_bg: "В небето",
      type: "movie",
      awards: "Won 2 Oscars. 81 wins & 88 nominations total",
      total_wins: "81",
      total_nominations: "88"
    },
    {
      id: 618,
      imdbID: "tt1051906",
      title_en: "The Invisible Man",
      title_bg: "Невидимият",
      type: "movie",
      awards: "43 wins & 84 nominations",
      total_wins: "43",
      total_nominations: "84"
    },
    {
      id: 621,
      imdbID: "tt10539608",
      title_en: "The Midnight Sky",
      title_bg: "Полунощно небе",
      type: "movie",
      awards: "Nominated for 1 Oscar. 5 wins & 46 nominations total",
      total_wins: "5",
      total_nominations: "46"
    },
    {
      id: 500,
      imdbID: "tt10633456",
      title_en: "Minari",
      title_bg: "Минири",
      type: "movie",
      awards: "Won 1 Oscar. 122 wins & 245 nominations total",
      total_wins: "122",
      total_nominations: "245"
    },
    {
      id: 487,
      imdbID: "tt10706602",
      title_en: "Collective",
      title_bg: "Колектив",
      type: "movie",
      awards: "Nominated for 2 Oscars. 37 wins & 55 nominations total",
      total_wins: "37",
      total_nominations: "55"
    },
    {
      id: 686,
      imdbID: "tt1070874",
      title_en: "The Trial of the Chicago 7",
      title_bg: "Процесът срещу Чикагската седморка",
      type: "movie",
      awards: "Nominated for 6 Oscars. 58 wins & 192 nominations total",
      total_wins: "58",
      total_nominations: "192"
    },
    {
      id: 517,
      imdbID: "tt10741846",
      title_en: "Rita Moreno: Just a Girl Who Decided to Go for It",
      title_bg: "Рита Морено: Просто момиче, което реши да действа",
      type: "movie",
      awards: "3 wins & 7 nominations",
      total_wins: "3",
      total_nominations: "7"
    },
    {
      id: 666,
      imdbID: "tt10810430",
      title_en: "The Mind, Explained",
      title_bg: "Умът, обяснен",
      type: "series",
      awards: "N/A",
      total_wins: "0",
      total_nominations: "0"
    },
    {
      id: 711,
      imdbID: "tt10851618",
      title_en: "Rising Phoenix",
      title_bg: "Издигането на феникса",
      type: "movie",
      awards: "2 wins & 8 nominations",
      total_wins: "2",
      total_nominations: "8"
    },
    {
      id: 501,
      imdbID: "tt10883506",
      title_en: "A Sun",
      title_bg: "Слънце",
      type: "movie",
      awards: "10 wins & 22 nominations",
      total_wins: "10",
      total_nominations: "22"
    },
    {
      id: 712,
      imdbID: "tt10970552",
      title_en: "The Haunting of Bly Manor",
      title_bg: "Призрачното имение Блай",
      type: "series",
      awards: "Nominated for 1 Primetime Emmy. 3 wins & 23 nominations total",
      total_wins: "3",
      total_nominations: "23"
    },
    {
      id: 525,
      imdbID: "tt11126994",
      title_en: "Arcane",
      title_bg: "Аркейн",
      type: "series",
      awards: "Won 4 Primetime Emmys. 22 wins & 5 nominations total",
      total_wins: "22",
      total_nominations: "5"
    },
    {
      id: 516,
      imdbID: "tt11226258",
      title_en: "Playing with Sharks: The Valerie Taylor Story",
      title_bg: "Игра с акулите",
      type: "movie",
      awards: "8 wins & 9 nominations",
      total_wins: "8",
      total_nominations: "9"
    },
    {
      id: 534,
      imdbID: "tt11311302",
      title_en: "Vikings: Valhalla",
      title_bg: "Викинги: Валхала",
      type: "series",
      awards: "Nominated for 1 Primetime Emmy. 3 wins & 15 nominations total",
      total_wins: "3",
      total_nominations: "15"
    },
    {
      id: 512,
      imdbID: "tt11398388",
      title_en: "Riotsville, U.S.A.",
      title_bg: "Риотсвил, САЩ",
      type: "movie",
      awards: "4 wins & 10 nominations",
      total_wins: "4",
      total_nominations: "10"
    },
    {
      id: 514,
      imdbID: "tt11422728",
      title_en:
        "Summer of Soul (...Or, When the Revolution Could Not Be Televised)",
      title_bg:
        "Лятото на душата (...Или когато революцията не можеше да бъде излъчена)",
      type: "movie",
      awards: "Won 1 Oscar. 73 wins & 43 nominations total",
      total_wins: "73",
      total_nominations: "43"
    },
    {
      id: 449,
      imdbID: "tt11464826",
      title_en: "The Social Dilemma",
      title_bg: "Социалната дилема",
      type: "movie",
      awards: "Won 2 Primetime Emmys. 8 wins & 22 nominations total",
      total_wins: "8",
      total_nominations: "22"
    },
    {
      id: 526,
      imdbID: "tt11570202",
      title_en: "The Silent Sea",
      title_bg: "Тихото море",
      type: "series",
      awards: "N/A",
      total_wins: "0",
      total_nominations: "0"
    },
    {
      id: 619,
      imdbID: "tt1160419",
      title_en: "Dune: Part One",
      title_bg: "Дюн",
      type: "movie",
      awards: "Won 6 Oscars. 177 wins & 300 nominations total",
      total_wins: "177",
      total_nominations: "300"
    },
    {
      id: 715,
      imdbID: "tt11612120",
      title_en: "Sweet Home",
      title_bg: "Дом, сладък дом",
      type: "series",
      awards: "1 win & 3 nominations",
      total_wins: "1",
      total_nominations: "3"
    },
    {
      id: 536,
      imdbID: "tt11743610",
      title_en: "The Terminal List",
      title_bg: "Списъкът на терминала",
      type: "series",
      awards: "2 nominations",
      total_wins: "0",
      total_nominations: "2"
    },
    {
      id: 648,
      imdbID: "tt11790780",
      title_en: "The Alpinist",
      title_bg: "Алпинистът",
      type: "movie",
      awards: "2 wins & 2 nominations",
      total_wins: "2",
      total_nominations: "2"
    },
    {
      id: 456,
      imdbID: "tt11989890",
      title_en: "David Attenborough: A Life on Our Planet",
      title_bg: "Дейвид Атънбъро: Животът на нашата планета",
      type: "movie",
      awards: "Won 3 Primetime Emmys. 8 wins & 10 nominations total",
      total_wins: "8",
      total_nominations: "10"
    },
    {
      id: 451,
      imdbID: "tt12221748",
      title_en: "Becoming",
      title_bg: "Ставайки",
      type: "movie",
      awards: "Nominated for 4 Primetime Emmys. 1 win & 6 nominations total",
      total_wins: "1",
      total_nominations: "6"
    },
    {
      id: 665,
      imdbID: "tt12759334",
      title_en: "Tiny Creatures",
      title_bg: "Малки същества",
      type: "series",
      awards: "2 wins",
      total_wins: "2",
      total_nominations: "0"
    },
    {
      id: 532,
      imdbID: "tt12762512",
      title_en: "Echo 3",
      title_bg: "Ехо 3",
      type: "series",
      awards: "1 nomination",
      total_wins: "0",
      total_nominations: "1"
    },
    {
      id: 401,
      imdbID: "tt12785720",
      title_en: "The Witcher: Blood Origin",
      title_bg: "Вещерът: Произход на кръвта",
      type: "series",
      awards: "2 wins & 1 nomination",
      total_wins: "2",
      total_nominations: "1"
    },
    {
      id: 643,
      imdbID: "tt12801262",
      title_en: "Luca",
      title_bg: "Лука",
      type: "movie",
      awards: "Nominated for 1 Oscar. 6 wins & 83 nominations total",
      total_wins: "6",
      total_nominations: "83"
    },
    {
      id: 262,
      imdbID: "tt12809988",
      title_en: "Sweet Tooth",
      title_bg: "Сладкозъбчо",
      type: "series",
      awards: "Nominated for 1 BAFTA Award14 wins & 25 nominations total",
      total_wins: "14",
      total_nominations: "25"
    },
    {
      id: 448,
      imdbID: "tt12888462",
      title_en: "My Octopus Teacher",
      title_bg: "Моят учител октопод",
      type: "movie",
      awards: "Won 1 Oscar. 11 wins & 15 nominations total",
      total_wins: "11",
      total_nominations: "15"
    },
    {
      id: 457,
      imdbID: "tt12987894",
      title_en: "American Murder: The Family Next Door",
      title_bg: "Американско убийство: Семейството от съседната врата",
      type: "movie",
      awards: "Nominated for 1 BAFTA Award2 wins & 4 nominations total",
      total_wins: "2",
      total_nominations: "4"
    },
    {
      id: 528,
      imdbID: "tt13064902",
      title_en: "FUBAR",
      title_bg: "Фубар",
      type: "series",
      awards: "3 wins & 1 nomination",
      total_wins: "3",
      total_nominations: "1"
    },
    {
      id: 395,
      imdbID: "tt1312171",
      title_en: "The Umbrella Academy",
      title_bg: "Академия 'Чадър'",
      type: "series",
      awards: "Nominated for 7 Primetime Emmys. 13 wins & 61 nominations total",
      total_wins: "13",
      total_nominations: "61"
    },
    {
      id: 616,
      imdbID: "tt1321510",
      title_en: "In the Heights",
      title_bg: "На високо",
      type: "movie",
      awards: "11 wins & 57 nominations",
      total_wins: "11",
      total_nominations: "57"
    },
    {
      id: 759,
      imdbID: "tt1327801",
      title_en: "Glee",
      title_bg: 'Клуб "Веселие"',
      type: "series",
      awards: "Won 6 Primetime Emmys. 92 wins & 223 nominations total",
      total_wins: "92",
      total_nominations: "223"
    },
    {
      id: 668,
      imdbID: "tt13323596",
      title_en: "The Long Shadow",
      title_bg: "Дългата сянка",
      type: "series",
      awards: "Won 1 BAFTA Award1 win & 5 nominations total",
      total_wins: "1",
      total_nominations: "5"
    },
    {
      id: 716,
      imdbID: "tt13444912",
      title_en: "The Midnight Club",
      title_bg: "Среднощен клуб",
      type: "series",
      awards: "2 wins & 6 nominations",
      total_wins: "2",
      total_nominations: "6"
    },
    {
      id: 664,
      imdbID: "tt13623992",
      title_en: "Welcome to Earth",
      title_bg: "Добре дошли на Земята",
      type: "series",
      awards: "3 wins & 1 nomination",
      total_wins: "3",
      total_nominations: "1"
    },
    {
      id: 746,
      imdbID: "tt1375666",
      title_en: "Inception",
      title_bg: "Генезис",
      type: "movie",
      awards: "Won 4 Oscars. 159 wins & 220 nominations total",
      total_wins: "159",
      total_nominations: "220"
    },
    {
      id: 204,
      imdbID: "tt1392170",
      title_en: "The Hunger Games",
      title_bg: "Игрите на глада",
      type: "movie",
      awards: "Won 1 BAFTA Award34 wins & 49 nominations total",
      total_wins: "34",
      total_nominations: "49"
    },
    {
      id: 529,
      imdbID: "tt1399664",
      title_en: "The Night Manager",
      title_bg: "Нощният мениджър",
      type: "series",
      awards: "Won 2 Primetime Emmys. 26 wins & 52 nominations total",
      total_wins: "26",
      total_nominations: "52"
    },
    {
      id: 450,
      imdbID: "tt14152756",
      title_en: "Seaspiracy",
      title_bg: "Морска конспирация",
      type: "movie",
      awards: "1 nomination",
      total_wins: "0",
      total_nominations: "1"
    },
    {
      id: 515,
      imdbID: "tt14372240",
      title_en: "The Year Earth Changed",
      title_bg: "Годината, в която Земята се промени",
      type: "movie",
      awards: "Nominated for 1 Primetime Emmy. 5 nominations total",
      total_wins: "0",
      total_nominations: "5"
    },
    {
      id: 492,
      imdbID: "tt14539726",
      title_en: "Breaking Boundaries: The Science of Our Planet",
      title_bg: "Прекрачване на границите: Науката за нашата планета",
      type: "movie",
      awards: "N/A",
      total_wins: "0",
      total_nominations: "0"
    },
    {
      id: 605,
      imdbID: "tt1454468",
      title_en: "Gravity",
      title_bg: "Гравитация",
      type: "movie",
      awards: "Won 7 Oscars. 240 wins & 187 nominations total",
      total_wins: "240",
      total_nominations: "187"
    },
    {
      id: 629,
      imdbID: "tt1457767",
      title_en: "The Conjuring",
      title_bg: "Заклинанието",
      type: "movie",
      awards: "15 wins & 22 nominations",
      total_wins: "15",
      total_nominations: "22"
    },
    {
      id: 271,
      imdbID: "tt1485796",
      title_en: "The Greatest Showman",
      title_bg: "Най-великият шоумен",
      type: "movie",
      awards: "Nominated for 1 Oscar. 17 wins & 32 nominations total",
      total_wins: "17",
      total_nominations: "32"
    },
    {
      id: 650,
      imdbID: "tt14992922",
      title_en: "The Tinder Swindler",
      title_bg: "Измамникът от Тиндър",
      type: "movie",
      awards: "Nominated for 5 Primetime Emmys. 3 wins & 14 nominations total",
      total_wins: "3",
      total_nominations: "14"
    },
    {
      id: 690,
      imdbID: "tt1517451",
      title_en: "A Star Is Born",
      title_bg: "Роди се звезда",
      type: "movie",
      awards: "Won 1 Oscar. 99 wins & 290 nominations total",
      total_wins: "99",
      total_nominations: "290"
    },
    {
      id: 672,
      imdbID: "tt1568921",
      title_en: "The Secret World of Arrietty",
      title_bg: "Тайнственият свят на Ариети",
      type: "movie",
      awards: "12 wins & 6 nominations",
      total_wins: "12",
      total_nominations: "6"
    },
    {
      id: 226,
      imdbID: "tt1588173",
      title_en: "Warm Bodies",
      title_bg: "Топли Души",
      type: "movie",
      awards: "2 wins & 10 nominations",
      total_wins: "2",
      total_nominations: "10"
    },
    {
      id: 527,
      imdbID: "tt16030542",
      title_en: "The Recruit",
      title_bg: "Новобранецът",
      type: "series",
      awards: "N/A",
      total_wins: "0",
      total_nominations: "0"
    },
    {
      id: 508,
      imdbID: "tt16227014",
      title_en: "Fire of Love",
      title_bg: "Огън на любовта",
      type: "movie",
      awards: "Nominated for 1 Oscar. 34 wins & 67 nominations total",
      total_wins: "34",
      total_nominations: "67"
    },
    {
      id: 202,
      imdbID: "tt1631867",
      title_en: "Edge of Tomorrow",
      title_bg: "На края на утрешния ден",
      type: "movie",
      awards: "11 wins & 38 nominations",
      total_wins: "11",
      total_nominations: "38"
    },
    {
      id: 510,
      imdbID: "tt16377862",
      title_en: "All That Breathes",
      title_bg: "Всичко, което диша",
      type: "movie",
      awards: "Nominated for 1 Oscar. 24 wins & 43 nominations total",
      total_wins: "24",
      total_nominations: "43"
    },
    {
      id: 509,
      imdbID: "tt16378164",
      title_en: "The Territory",
      title_bg: "Територията",
      type: "movie",
      awards: "Won 1 Primetime Emmy. 45 wins & 43 nominations total",
      total_wins: "45",
      total_nominations: "43"
    },
    {
      id: 228,
      imdbID: "tt1659337",
      title_en: "The Perks of Being a Wallflower",
      title_bg: "Предимствата да бъдеш аутсайдер",
      type: "movie",
      awards: "20 wins & 51 nominations",
      total_wins: "20",
      total_nominations: "51"
    },
    {
      id: 208,
      imdbID: "tt1677720",
      title_en: "Ready Player One",
      title_bg: "Играч първи, приготви се",
      type: "movie",
      awards: "Nominated for 1 Oscar. 11 wins & 57 nominations total",
      total_wins: "11",
      total_nominations: "57"
    },
    {
      id: 588,
      imdbID: "tt1679335",
      title_en: "Trolls",
      title_bg: "Тролчета",
      type: "movie",
      awards: "Nominated for 1 Oscar. 4 wins & 37 nominations total",
      total_wins: "4",
      total_nominations: "37"
    },
    {
      id: 511,
      imdbID: "tt17041964",
      title_en: "Navalny",
      title_bg: "Навални",
      type: "movie",
      awards: "Won 1 Oscar. 17 wins & 32 nominations total",
      total_wins: "17",
      total_nominations: "32"
    },
    {
      id: 639,
      imdbID: "tt1714206",
      title_en: "The Spectacular Now",
      title_bg: "Удивителното сега",
      type: "movie",
      awards: "9 wins & 32 nominations",
      total_wins: "9",
      total_nominations: "32"
    },
    {
      id: 248,
      imdbID: "tt1734135",
      title_en: "Trollhunters: Tales of Arcadia",
      title_bg: "Ловци на тролове: Приказки за Аркадия",
      type: "series",
      awards: "18 wins & 26 nominations",
      total_wins: "18",
      total_nominations: "26"
    },
    {
      id: 518,
      imdbID: "tt1742683",
      title_en: "Too Big to Fail",
      title_bg: "Нашата планета: Твърде големи, за да се провалим",
      type: "movie",
      awards: "Nominated for 11 Primetime Emmys. 5 wins & 31 nominations total",
      total_wins: "5",
      total_nominations: "31"
    },
    {
      id: 210,
      imdbID: "tt1790864",
      title_en: "The Maze Runner",
      title_bg: "Лабиринтът: Невъзможно бягство",
      type: "movie",
      awards: "4 wins & 12 nominations",
      total_wins: "4",
      total_nominations: "12"
    },
    {
      id: 209,
      imdbID: "tt1840309",
      title_en: "Divergent",
      title_bg: "Дивергенти",
      type: "movie",
      awards: "7 wins & 11 nominations",
      total_wins: "7",
      total_nominations: "11"
    },
    {
      id: 699,
      imdbID: "tt1856101",
      title_en: "Blade Runner 2049",
      title_bg: "Блейд Рънър 2049",
      type: "movie",
      awards: "Won 2 Oscars. 100 wins & 163 nominations total",
      total_wins: "100",
      total_nominations: "163"
    },
    {
      id: 229,
      imdbID: "tt1878870",
      title_en: "The Edge of Seventeen",
      title_bg: "Краят на Седемнайсет",
      type: "movie",
      awards: "8 wins & 29 nominations",
      total_wins: "8",
      total_nominations: "29"
    },
    {
      id: 709,
      imdbID: "tt1950186",
      title_en: "Ford v Ferrari",
      title_bg: "Пълно ускорение",
      type: "movie",
      awards: "Won 2 Oscars. 26 wins & 88 nominations total",
      total_wins: "26",
      total_nominations: "88"
    },
    {
      id: 207,
      imdbID: "tt2015381",
      title_en: "Guardians of the Galaxy",
      title_bg: "Пазителите на галактиката",
      type: "movie",
      awards: "Nominated for 2 Oscars. 52 wins & 103 nominations total",
      total_wins: "52",
      total_nominations: "103"
    },
    {
      id: 613,
      imdbID: "tt2066051",
      title_en: "Rocketman",
      title_bg: "Рокетмен",
      type: "movie",
      awards: "Won 1 Oscar. 25 wins & 89 nominations total",
      total_wins: "25",
      total_nominations: "89"
    },
    {
      id: 590,
      imdbID: "tt2096673",
      title_en: "Inside Out",
      title_bg: "Отвътре навън",
      type: "movie",
      awards: "Won 1 Oscar. 99 wins & 118 nominations total",
      total_wins: "99",
      total_nominations: "118"
    },
    {
      id: 589,
      imdbID: "tt2119543",
      title_en: "The House with a Clock in Its Walls",
      title_bg: "Къща с часовник във времето",
      type: "movie",
      awards: "1 win & 1 nomination",
      total_wins: "1",
      total_nominations: "1"
    },
    {
      id: 696,
      imdbID: "tt2140507",
      title_en: "The Current War",
      title_bg: "Война на токове",
      type: "movie",
      awards: "N/A",
      total_wins: "0",
      total_nominations: "0"
    },
    {
      id: 758,
      imdbID: "tt2245084",
      title_en: "Big Hero 6",
      title_bg: "Героичната шесторка",
      type: "movie",
      awards: "Won 1 Oscar. 17 wins & 58 nominations total",
      total_wins: "17",
      total_nominations: "58"
    },
    {
      id: 205,
      imdbID: "tt2250912",
      title_en: "Spider-Man: Homecoming",
      title_bg: "Спайдърмен: Завръщане у дома",
      type: "movie",
      awards: "8 wins & 10 nominations",
      total_wins: "8",
      total_nominations: "10"
    },
    {
      id: 214,
      imdbID: "tt2283362",
      title_en: "Jumanji: Welcome to the Jungle",
      title_bg: "Джуманджи: Добре дошли в джунглата",
      type: "movie",
      awards: "5 wins & 15 nominations",
      total_wins: "5",
      total_nominations: "15"
    },
    {
      id: 587,
      imdbID: "tt2380307",
      title_en: "Coco",
      title_bg: "Тайната на Коко",
      type: "movie",
      awards: "Won 2 Oscars. 112 wins & 42 nominations total",
      total_wins: "112",
      total_nominations: "42"
    },
    {
      id: 406,
      imdbID: "tt2403776",
      title_en: "Shadow and Bone",
      title_bg: "Сянка и кост",
      type: "series",
      awards: "Nominated for 1 Primetime Emmy. 2 wins & 6 nominations total",
      total_wins: "2",
      total_nominations: "6"
    },
    {
      id: 604,
      imdbID: "tt2543164",
      title_en: "Arrival",
      title_bg: "Първи контакт",
      type: "movie",
      awards: "Won 1 Oscar. 71 wins & 268 nominations total",
      total_wins: "71",
      total_nominations: "268"
    },
    {
      id: 638,
      imdbID: "tt2582846",
      title_en: "The Fault in Our Stars",
      title_bg: "Вината в нашите звезди",
      type: "movie",
      awards: "23 wins & 18 nominations",
      total_wins: "23",
      total_nominations: "18"
    },
    {
      id: 585,
      imdbID: "tt2584384",
      title_en: "Jojo Rabbit",
      title_bg: "Джоджо Заека",
      type: "movie",
      awards: "Won 1 Oscar. 52 wins & 192 nominations total",
      total_wins: "52",
      total_nominations: "192"
    },
    {
      id: 591,
      imdbID: "tt2709768",
      title_en: "The Secret Life of Pets",
      title_bg: "Тайният живот на домашните любимци",
      type: "movie",
      awards: "4 wins & 15 nominations",
      total_wins: "4",
      total_nominations: "15"
    },
    {
      id: 614,
      imdbID: "tt2737304",
      title_en: "Bird Box",
      title_bg: "Кутия за птици",
      type: "movie",
      awards: "5 wins & 9 nominations",
      total_wins: "5",
      total_nominations: "9"
    },
    {
      id: 671,
      imdbID: "tt2769458",
      title_en: "Sheriff Callie's Wild West",
      title_bg: "Шериф Кали и дивият запад",
      type: "series",
      awards: "4 nominations",
      total_wins: "0",
      total_nominations: "4"
    },
    {
      id: 600,
      imdbID: "tt2948356",
      title_en: "Zootopia",
      title_bg: "Зоотрополис",
      type: "movie",
      awards: "Won 1 Oscar. 49 wins & 75 nominations total",
      total_wins: "49",
      total_nominations: "75"
    },
    {
      id: 597,
      imdbID: "tt2948372",
      title_en: "Soul",
      title_bg: "За душата",
      type: "movie",
      awards: "Won 2 Oscars. 125 wins & 94 nominations total",
      total_wins: "125",
      total_nominations: "94"
    },
    {
      id: 411,
      imdbID: "tt3007572",
      title_en: "Locke & Key",
      title_bg: "Локи и ключът",
      type: "series",
      awards: "4 wins & 13 nominations",
      total_wins: "4",
      total_nominations: "13"
    },
    {
      id: 691,
      imdbID: "tt3104988",
      title_en: "Crazy Rich Asians",
      title_bg: "Луди богаташи",
      type: "movie",
      awards: "15 wins & 70 nominations",
      total_wins: "15",
      total_nominations: "70"
    },
    {
      id: 584,
      imdbID: "tt3224458",
      title_en: "A Beautiful Day in the Neighborhood",
      title_bg: "Хубав ден в квартала",
      type: "movie",
      awards: "Nominated for 1 Oscar. 10 wins & 64 nominations total",
      total_wins: "10",
      total_nominations: "64"
    },
    {
      id: 607,
      imdbID: "tt3228774",
      title_en: "Cruella",
      title_bg: "Круела",
      type: "movie",
      awards: "Won 1 Oscar. 29 wins & 44 nominations total",
      total_wins: "29",
      total_nominations: "44"
    },
    {
      id: 586,
      imdbID: "tt3281548",
      title_en: "Little Women",
      title_bg: "Малки жени",
      type: "movie",
      awards: "Won 1 Oscar. 78 wins & 239 nominations total",
      total_wins: "78",
      total_nominations: "239"
    },
    {
      id: 273,
      imdbID: "tt3416532",
      title_en: "A Monster Calls",
      title_bg: "Чудовището на грозния",
      type: "movie",
      awards: "39 wins & 57 nominations",
      total_wins: "39",
      total_nominations: "57"
    },
    {
      id: 624,
      imdbID: "tt3521164",
      title_en: "Moana",
      title_bg: "Моана",
      type: "movie",
      awards: "Nominated for 2 Oscars. 22 wins & 90 nominations total",
      total_wins: "22",
      total_nominations: "90"
    },
    {
      id: 227,
      imdbID: "tt3531824",
      title_en: "Nerve",
      title_bg: "Играй или Умри",
      type: "movie",
      awards: "5 nominations",
      total_wins: "0",
      total_nominations: "5"
    },
    {
      id: 630,
      imdbID: "tt3544112",
      title_en: "Sing Street",
      title_bg: "Синг Стрийт",
      type: "movie",
      awards: "16 wins & 45 nominations",
      total_wins: "16",
      total_nominations: "45"
    },
    {
      id: 603,
      imdbID: "tt3659388",
      title_en: "The Martian",
      title_bg: "Марсианецът",
      type: "movie",
      awards: "Nominated for 7 Oscars. 40 wins & 199 nominations total",
      total_wins: "40",
      total_nominations: "199"
    },
    {
      id: 683,
      imdbID: "tt3661210",
      title_en: "The Dig",
      title_bg: "Изкопаното",
      type: "movie",
      awards: "Nominated for 5 BAFTA 3 wins & 11 nominations total",
      total_wins: "3",
      total_nominations: "11"
    },
    {
      id: 628,
      imdbID: "tt3783958",
      title_en: "La La Land",
      title_bg: "Ла Ла Ленд",
      type: "movie",
      awards: "Won 6 Oscars. 242 wins & 307 nominations total",
      total_wins: "242",
      total_nominations: "307"
    },
    {
      id: 634,
      imdbID: "tt3794354",
      title_en: "Sonic the Hedgehog",
      title_bg: "Соник: Филмът",
      type: "movie",
      awards: "3 wins & 12 nominations",
      total_wins: "3",
      total_nominations: "12"
    },
    {
      id: 669,
      imdbID: "tt3807034",
      title_en: "The Adventures of Puss in Boots",
      title_bg: "Приключенията на котарака в чизми",
      type: "series",
      awards: "1 win & 12 nominations",
      total_wins: "1",
      total_nominations: "12"
    },
    {
      id: 689,
      imdbID: "tt3846674",
      title_en: "To All the Boys I've Loved Before",
      title_bg: "До всички момчета, които съм обичала",
      type: "movie",
      awards: "5 wins & 11 nominations",
      total_wins: "5",
      total_nominations: "11"
    },
    {
      id: 200,
      imdbID: "tt3890160",
      title_en: "Baby Driver",
      title_bg: "Бейби Драйвър",
      type: "movie",
      awards: "Nominated for 3 Oscars. 43 wins & 66 nominations total",
      total_wins: "43",
      total_nominations: "66"
    },
    {
      id: 682,
      imdbID: "tt4244994",
      title_en: "The Last Duel",
      title_bg: "Последният дуел",
      type: "movie",
      awards: "4 wins & 45 nominations",
      total_wins: "4",
      total_nominations: "45"
    },
    {
      id: 206,
      imdbID: "tt4500922",
      title_en: "Maze Runner: The Death Cure",
      title_bg: "Лабиринтът: Последния кандидат",
      type: "movie",
      awards: "7 nominations",
      total_wins: "0",
      total_nominations: "7"
    },
    {
      id: 626,
      imdbID: "tt4520988",
      title_en: "Frozen II",
      title_bg: "Замръзналото кралство II",
      type: "movie",
      awards: "Nominated for 1 Oscar. 19 wins & 95 nominations total",
      total_wins: "19",
      total_nominations: "95"
    },
    {
      id: 264,
      imdbID: "tt4574334",
      title_en: "Stranger Things",
      title_bg: "Странни неща",
      type: "series",
      awards: "Won 12 Primetime Emmys. 113 wins & 323 nominations total",
      total_wins: "113",
      total_nominations: "323"
    },
    {
      id: 203,
      imdbID: "tt4633694",
      title_en: "Spider-Man: Into the Spider-Verse",
      title_bg: "Спайдър-мен: В Спайди-вселената",
      type: "movie",
      awards: "Won 1 Oscar. 85 wins & 61 nominations total",
      total_wins: "85",
      total_nominations: "61"
    },
    {
      id: 354,
      imdbID: "tt4736550",
      title_en: "The Great Hack",
      title_bg: "Голямото хакване",
      type: "movie",
      awards: "Nominated for 1 Primetime Emmy. 1 win & 4 nominations total",
      total_wins: "1",
      total_nominations: "4"
    },
    {
      id: 256,
      imdbID: "tt4834206",
      title_en: "A Series of Unfortunate Events",
      title_bg: "Лемъни Сникет: Поредица от злополучия",
      type: "series",
      awards: "Nominated for 6 Primetime Emmys. 19 wins & 46 nominations total",
      total_wins: "19",
      total_nominations: "46"
    },
    {
      id: 640,
      imdbID: "tt4925292",
      title_en: "Lady Bird",
      title_bg: "Лейди Бърд",
      type: "movie",
      awards: "Nominated for 5 Oscars. 124 wins & 228 nominations total",
      total_wins: "124",
      total_nominations: "228"
    },
    {
      id: 693,
      imdbID: "tt5013056",
      title_en: "Dunkirk",
      title_bg: "Дюнкерк",
      type: "movie",
      awards: "Won 3 Oscars. 68 wins & 236 nominations total",
      total_wins: "68",
      total_nominations: "236"
    },
    {
      id: 598,
      imdbID: "tt5109280",
      title_en: "Raya and the Last Dragon",
      title_bg: "Рая и последният дракон",
      type: "movie",
      awards: "Nominated for 1 Oscar. 13 wins & 62 nominations total",
      total_wins: "13",
      total_nominations: "62"
    },
    {
      id: 431,
      imdbID: "tt5180504",
      title_en: "The Witcher",
      title_bg: "Вещерът",
      type: "series",
      awards: "Nominated for 4 Primetime Emmys. 8 wins & 36 nominations total",
      total_wins: "8",
      total_nominations: "36"
    },
    {
      id: 225,
      imdbID: "tt5308322",
      title_en: "Happy Death Day",
      title_bg: "Честит Ден на Смъртта",
      type: "movie",
      awards: "3 nominations",
      total_wins: "0",
      total_nominations: "3"
    },
    {
      id: 257,
      imdbID: "tt5421602",
      title_en: "Anne with an E",
      title_bg: "Ан с Е",
      type: "series",
      awards: "24 wins & 55 nominations",
      total_wins: "24",
      total_nominations: "55"
    },
    {
      id: 688,
      imdbID: "tt5580390",
      title_en: "The Shape of Water",
      title_bg: "Формата на водата",
      type: "movie",
      awards: "Won 4 Oscars. 138 wins & 350 nominations total",
      total_wins: "138",
      total_nominations: "350"
    },
    {
      id: 255,
      imdbID: "tt5607976",
      title_en: "His Dark Materials",
      title_bg: "Тъмните му материи",
      type: "series",
      awards: "Nominated for 1 BAFTA Award15 wins & 51 nominations total",
      total_wins: "15",
      total_nominations: "51"
    },
    {
      id: 611,
      imdbID: "tt5664636",
      title_en: "Goosebumps 2: Haunted Halloween",
      title_bg: "Goosebumps 2: Призрачен Хелоуин",
      type: "movie",
      awards: "N/A",
      total_wins: "0",
      total_nominations: "0"
    },
    {
      id: 609,
      imdbID: "tt5884052",
      title_en: "Pokémon: Detective Pikachu",
      title_bg: "Детектив Пикачу",
      type: "movie",
      awards: "10 nominations",
      total_wins: "0",
      total_nominations: "10"
    },
    {
      id: 357,
      imdbID: "tt5952266",
      title_en: "The Ivory Game",
      title_bg: "Играта на слоновата кост",
      type: "movie",
      awards: "7 wins & 7 nominations",
      total_wins: "7",
      total_nominations: "7"
    },
    {
      id: 670,
      imdbID: "tt6148744",
      title_en: "Pete the Cat",
      title_bg: "Пийт Котаракът",
      type: "series",
      awards: "3 nominations",
      total_wins: "0",
      total_nominations: "3"
    },
    {
      id: 355,
      imdbID: "tt6333060",
      title_en: "Icarus",
      title_bg: "Икар",
      type: "movie",
      awards: "Won 1 Oscar. 9 wins & 14 nominations total",
      total_wins: "9",
      total_nominations: "14"
    },
    {
      id: 707,
      imdbID: "tt6343314",
      title_en: "Creed II",
      title_bg: "Крийд II",
      type: "movie",
      awards: "1 win & 12 nominations",
      total_wins: "1",
      total_nominations: "12"
    },
    {
      id: 247,
      imdbID: "tt6385540",
      title_en: "Hilda",
      title_bg: "Хилда",
      type: "series",
      awards: "Won 1 BAFTA Award12 wins & 9 nominations total",
      total_wins: "12",
      total_nominations: "9"
    },
    {
      id: 708,
      imdbID: "tt6513120",
      title_en: "Fighting with My Family",
      title_bg: "Борба със семейството ми",
      type: "movie",
      awards: "10 wins & 5 nominations",
      total_wins: "10",
      total_nominations: "5"
    },
    {
      id: 606,
      imdbID: "tt6644200",
      title_en: "A Quiet Place",
      title_bg: "Нито звук",
      type: "movie",
      awards: "Nominated for 1 Oscar. 38 wins & 129 nominations total",
      total_wins: "38",
      total_nominations: "129"
    },
    {
      id: 679,
      imdbID: "tt6673612",
      title_en: "Dolittle",
      title_bg: "Доктор Дулитъл",
      type: "movie",
      awards: "4 wins & 9 nominations",
      total_wins: "4",
      total_nominations: "9"
    },
    {
      id: 667,
      imdbID: "tt6710836",
      title_en: "Spirit Riding Free",
      title_bg: "Свободният дух",
      type: "series",
      awards: "1 win & 1 nomination",
      total_wins: "1",
      total_nominations: "1"
    },
    {
      id: 482,
      imdbID: "tt6722976",
      title_en: "The Elephant Queen",
      title_bg: "Кралицата на слоновете",
      type: "movie",
      awards: "Nominated for 1 Primetime Emmy. 2 wins & 5 nominations total",
      total_wins: "2",
      total_nominations: "5"
    },
    {
      id: 617,
      imdbID: "tt6723592",
      title_en: "Tenet",
      title_bg: "Тенет",
      type: "movie",
      awards: "Won 1 Oscar. 49 wins & 136 nominations total",
      total_wins: "49",
      total_nominations: "136"
    },
    {
      id: 582,
      imdbID: "tt6751668",
      title_en: "Parasite",
      title_bg: "Паразит",
      type: "movie",
      awards: "Won 4 Oscars. 316 wins & 266 nominations total",
      total_wins: "316",
      total_nominations: "266"
    },
    {
      id: 653,
      imdbID: "tt6763664",
      title_en: "The Haunting of Hill House",
      title_bg: "Ужасът в Хил Хаус",
      type: "series",
      awards: "9 wins & 36 nominations",
      total_wins: "9",
      total_nominations: "36"
    },
    {
      id: 412,
      imdbID: "tt6964748",
      title_en: "Alex Rider",
      title_bg: "Алекс Райдър",
      type: "series",
      awards: "N/A",
      total_wins: "0",
      total_nominations: "0"
    },
    {
      id: 661,
      imdbID: "tt7146812",
      title_en: "Onward",
      title_bg: "Напред",
      type: "movie",
      awards: "Nominated for 1 Oscar. 4 wins & 66 nominations total",
      total_wins: "4",
      total_nominations: "66"
    },
    {
      id: 594,
      imdbID: "tt7214954",
      title_en: "Luck",
      title_bg: "Късмет",
      type: "movie",
      awards: "5 nominations",
      total_wins: "0",
      total_nominations: "5"
    },
    {
      id: 397,
      imdbID: "tt7221388",
      title_en: "Cobra Kai",
      title_bg: "Кобра Кай",
      type: "series",
      awards: "Nominated for 9 Primetime Emmys. 4 wins & 68 nominations total",
      total_wins: "4",
      total_nominations: "68"
    },
    {
      id: 646,
      imdbID: "tt7488208",
      title_en: "Over the Moon",
      title_bg: "Над луната",
      type: "movie",
      awards: "Nominated for 1 Oscar. 3 wins & 61 nominations total",
      total_wins: "3",
      total_nominations: "61"
    },
    {
      id: 633,
      imdbID: "tt7504726",
      title_en: "The Call of the Wild",
      title_bg: "Дивото зове",
      type: "movie",
      awards: "1 win & 8 nominations",
      total_wins: "1",
      total_nominations: "8"
    },
    {
      id: 714,
      imdbID: "tt7569592",
      title_en: "Chilling Adventures of Sabrina",
      title_bg: "Зловещите приключения на Сабрина",
      type: "series",
      awards: "8 wins & 25 nominations",
      total_wins: "8",
      total_nominations: "25"
    },
    {
      id: 353,
      imdbID: "tt7775622",
      title_en: "Free Solo",
      title_bg: "Свободно соло",
      type: "movie",
      awards: "Won 1 Oscar. 31 wins & 54 nominations total",
      total_wins: "31",
      total_nominations: "54"
    },
    {
      id: 636,
      imdbID: "tt7846844",
      title_en: "Enola Holmes",
      title_bg: "Енола Холмс",
      type: "movie",
      awards: "4 wins & 12 nominations",
      total_wins: "4",
      total_nominations: "12"
    },
    {
      id: 645,
      imdbID: "tt7979580",
      title_en: "The Mitchells vs. the Machines",
      title_bg: "Семейство Мичъл срещу машините",
      type: "movie",
      awards: "Nominated for 1 Oscar. 46 wins & 66 nominations total",
      total_wins: "46",
      total_nominations: "66"
    },
    {
      id: 684,
      imdbID: "tt7984766",
      title_en: "The King",
      title_bg: "Кралят",
      type: "movie",
      awards: "13 wins & 28 nominations",
      total_wins: "13",
      total_nominations: "28"
    },
    {
      id: 615,
      imdbID: "tt8079248",
      title_en: "Yesterday",
      title_bg: "Вчера си беше вчера",
      type: "movie",
      awards: "2 wins & 19 nominations",
      total_wins: "2",
      total_nominations: "19"
    },
    {
      id: 405,
      imdbID: "tt8111088",
      title_en: "The Mandalorian",
      title_bg: "Мандалорианецът",
      type: "series",
      awards: "Won 15 Primetime Emmys. 62 wins & 162 nominations total",
      total_wins: "62",
      total_nominations: "162"
    },
    {
      id: 596,
      imdbID: "tt8115900",
      title_en: "The Bad Guys",
      title_bg: "Лошите момчета",
      type: "movie",
      awards: "2 wins & 30 nominations",
      total_wins: "2",
      total_nominations: "30"
    },
    {
      id: 608,
      imdbID: "tt8332922",
      title_en: "A Quiet Place Part II",
      title_bg: "Нито звук 2",
      type: "movie",
      awards: "Nominated for 1 BAFTA Award14 wins & 44 nominations total",
      total_wins: "14",
      total_nominations: "44"
    },
    {
      id: 692,
      imdbID: "tt8579674",
      title_en: "1917",
      title_bg: "1917",
      type: "movie",
      awards: "Won 3 Oscars. 135 wins & 207 nominations total",
      total_wins: "135",
      total_nominations: "207"
    },
    {
      id: 245,
      imdbID: "tt8688814",
      title_en: "The Dragon Prince",
      title_bg: "Принцът на драконите",
      type: "series",
      awards: "5 wins & 14 nominations",
      total_wins: "5",
      total_nominations: "14"
    },
    {
      id: 651,
      imdbID: "tt8721424",
      title_en: "tick, tick... BOOM!",
      title_bg: "Тик, Тик... Бум!",
      type: "movie",
      awards: "Nominated for 2 Oscars. 38 wins & 116 nominations total",
      total_wins: "38",
      total_nominations: "116"
    },
    {
      id: 356,
      imdbID: "tt8760684",
      title_en: "Apollo 11",
      title_bg: "Аполон 11",
      type: "movie",
      awards: "Won 3 Primetime Emmys. 59 wins & 45 nominations total",
      total_wins: "59",
      total_nominations: "45"
    },
    {
      id: 493,
      imdbID: "tt8772296",
      title_en: "Euphoria",
      title_bg: "Еуфория",
      type: "series",
      awards: "Won 9 Primetime Emmys. 43 wins & 117 nominations total",
      total_wins: "43",
      total_nominations: "117"
    },
    {
      id: 452,
      imdbID: "tt8923484",
      title_en: "Crip Camp",
      title_bg: "Лагер за инвалиди",
      type: "movie",
      awards: "Nominated for 1 Oscar. 11 wins & 35 nominations total",
      total_wins: "11",
      total_nominations: "35"
    },
    {
      id: 408,
      imdbID: "tt9059350",
      title_en: "Warrior Nun",
      title_bg: "Монахинята-войска",
      type: "series",
      awards: "6 wins & 9 nominations",
      total_wins: "6",
      total_nominations: "9"
    },
    {
      id: 494,
      imdbID: "tt9059760",
      title_en: "Normal People",
      title_bg: "Нормални хора",
      type: "series",
      awards: "Nominated for 4 Primetime Emmys. 19 wins & 56 nominations total",
      total_wins: "19",
      total_nominations: "56"
    },
    {
      id: 513,
      imdbID: "tt9098872",
      title_en: "The Rescue",
      title_bg: "Спасението",
      type: "movie",
      awards: "Nominated for 1 BAFTA Award16 wins & 39 nominations total",
      total_wins: "16",
      total_nominations: "39"
    },
    {
      id: 471,
      imdbID: "tt9098928",
      title_en: "The Reason I Jump",
      title_bg: "Причината да скачам",
      type: "movie",
      awards: "9 wins & 17 nominations",
      total_wins: "9",
      total_nominations: "17"
    },
    {
      id: 396,
      imdbID: "tt9140554",
      title_en: "Loki",
      title_bg: "Локи",
      type: "series",
      awards: "Nominated for 9 Primetime Emmys. 12 wins & 86 nominations total",
      total_wins: "12",
      total_nominations: "86"
    },
    {
      id: 393,
      imdbID: "tt9208876",
      title_en: "The Falcon and the Winter Soldier",
      title_bg: "Ястребът и Зимният войник",
      type: "series",
      awards: "Nominated for 5 Primetime Emmys. 2 wins & 41 nominations total",
      total_wins: "2",
      total_nominations: "41"
    },
    {
      id: 685,
      imdbID: "tt9214832",
      title_en: "Emma.",
      title_bg: "Ема",
      type: "movie",
      awards: "Nominated for 2 Oscars. 11 wins & 61 nominations total",
      total_wins: "11",
      total_nominations: "61"
    },
    {
      id: 662,
      imdbID: "tt9253866",
      title_en: "Our Planet",
      title_bg: "Нашата планета",
      type: "series",
      awards: "Won 2 Primetime Emmys. 7 wins & 25 nominations total",
      total_wins: "7",
      total_nominations: "25"
    },
    {
      id: 523,
      imdbID: "tt9288030",
      title_en: "Reacher",
      title_bg: "Рийчър",
      type: "series",
      awards: "1 win & 8 nominations",
      total_wins: "1",
      total_nominations: "8"
    },
    {
      id: 595,
      imdbID: "tt9288046",
      title_en: "The Sea Beast",
      title_bg: "Морското чудовище",
      type: "movie",
      awards: "Nominated for 1 Oscar. 13 nominations total",
      total_wins: "0",
      total_nominations: "13"
    },
    {
      id: 496,
      imdbID: "tt9446688",
      title_en: "I Am Not Okay with This",
      title_bg: "Не ми харесва",
      type: "series",
      awards: "1 win & 1 nomination",
      total_wins: "1",
      total_nominations: "1"
    },
    {
      id: 499,
      imdbID: "tt9770150",
      title_en: "Nomadland",
      title_bg: "Земя на номади",
      type: "movie",
      awards: "Won 3 Oscars. 254 wins & 155 nominations total",
      total_wins: "254",
      total_nominations: "155"
    }
  ],
  totalAwards: [
    {
      total_oscar_wins: "77",
      total_oscar_nominations: "59",
      total_awards_wins: "5589",
      total_awards_nominations: "10926"
    }
  ],
  sortedDirectorsByProsperity: [
    {
      director_bg: "Пийт Доктър",
      director: "Pete Docter",
      avg_imdb_rating: 8.13,
      avg_metascore: 88.33333333333333,
      total_box_office: "$1,951,236,087",
      avg_rotten_tomatoes: "97%",
      movie_count: 3,
      total_recommendations: 4,
      avg_runtime: null,
      total_wins: "915",
      total_nominations: "900",
      prosperityScore: 509.39
    },
    {
      director_bg: "Дени Вилньов",
      director: "Denis Villeneuve",
      avg_imdb_rating: 7.97,
      avg_metascore: 78.66666666666667,
      total_box_office: "$301,515,644",
      avg_rotten_tomatoes: "88%",
      movie_count: 3,
      total_recommendations: 8,
      avg_runtime: null,
      total_wins: "348",
      total_nominations: "731",
      prosperityScore: 295.92
    },
    {
      director_bg: "Кристофър Нолан",
      director: "Christopher Nolan",
      avg_imdb_rating: 8.15,
      avg_metascore: 77.75,
      total_box_office: "$728,852,117",
      avg_rotten_tomatoes: "81%",
      movie_count: 4,
      total_recommendations: 12,
      avg_runtime: null,
      total_wins: "320",
      total_nominations: "740",
      prosperityScore: 289.73
    },
    {
      director_bg: "Грета Гервиг",
      director: "Greta Gerwig",
      avg_imdb_rating: 7.6,
      avg_metascore: 92,
      total_box_office: "$157,059,487",
      avg_rotten_tomatoes: "97%",
      movie_count: 2,
      total_recommendations: 2,
      avg_runtime: null,
      total_wins: "202",
      total_nominations: "467",
      prosperityScore: 187.42
    },
    {
      director_bg: "Бонг Джун Хо",
      director: "Bong Joon Ho",
      avg_imdb_rating: 8.5,
      avg_metascore: 96,
      total_box_office: "$53,369,749",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "316",
      total_nominations: "266",
      prosperityScore: 171.85
    },
    {
      director_bg: "Деймиън Шазел",
      director: "Damien Chazelle",
      avg_imdb_rating: 8,
      avg_metascore: 94,
      total_box_office: "$151,101,803",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 2,
      avg_runtime: null,
      total_wins: "242",
      total_nominations: "307",
      prosperityScore: 159.65
    },
    {
      director_bg: "Гийермо дел Торо",
      director: "Guillermo del Toro",
      avg_imdb_rating: 7.3,
      avg_metascore: 87,
      total_box_office: "$63,859,435",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "138",
      total_nominations: "350",
      prosperityScore: 138.43
    },
    {
      director_bg: "Дон Хол",
      director: "Don Hall",
      avg_imdb_rating: 6.93,
      avg_metascore: 71,
      total_box_office: "$945,659,469",
      avg_rotten_tomatoes: "85%",
      movie_count: 3,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "90",
      total_nominations: "387",
      prosperityScore: 131.7
    },
    {
      director_bg: "Алфонсо Куарон",
      director: "Alfonso Cuarón",
      avg_imdb_rating: 7.7,
      avg_metascore: 96,
      total_box_office: "$274,092,705",
      avg_rotten_tomatoes: "96%",
      movie_count: 1,
      total_recommendations: 4,
      avg_runtime: null,
      total_wins: "240",
      total_nominations: "187",
      prosperityScore: 129.24
    },
    {
      director_bg: "Клои Джао",
      director: "Chloé Zhao",
      avg_imdb_rating: 7.3,
      avg_metascore: 91,
      total_box_office: "$3,700,000",
      avg_rotten_tomatoes: "93%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "254",
      total_nominations: "155",
      prosperityScore: 124.87
    },
    {
      director_bg: "Брадли Купър",
      director: "Bradley Cooper",
      avg_imdb_rating: 7.6,
      avg_metascore: 88,
      total_box_office: "$215,333,122",
      avg_rotten_tomatoes: "90%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "99",
      total_nominations: "290",
      prosperityScore: 111.87
    },
    {
      director_bg: "Лий Айзък Чунг",
      director: "Lee Isaac Chung",
      avg_imdb_rating: 7.4,
      avg_metascore: 89,
      total_box_office: "$3,110,580",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "122",
      total_nominations: "245",
      prosperityScore: 107.59
    },
    {
      director_bg: "Сам Мендес",
      director: "Sam Mendes",
      avg_imdb_rating: 8.2,
      avg_metascore: 78,
      total_box_office: "$159,227,644",
      avg_rotten_tomatoes: "88%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "135",
      total_nominations: "207",
      prosperityScore: 100.97
    },
    {
      director_bg: "Джеймс Гън",
      director: "James Gunn",
      avg_imdb_rating: 8,
      avg_metascore: 76,
      total_box_office: "$667,437,200",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 2,
      avg_runtime: 121,
      total_wins: "104",
      total_nominations: "206",
      prosperityScore: 91.24
    },
    {
      director_bg: "Боб Персикети",
      director: "Bob Persichetti",
      avg_imdb_rating: 8.4,
      avg_metascore: 87,
      total_box_office: "$380,482,620",
      avg_rotten_tomatoes: "97%",
      movie_count: 1,
      total_recommendations: 2,
      avg_runtime: 117,
      total_wins: "170",
      total_nominations: "122",
      prosperityScore: 91.17
    },
    {
      director_bg: "Ридли Скот",
      director: "Ridley Scott",
      avg_imdb_rating: 7.65,
      avg_metascore: 73.5,
      total_box_office: "$239,287,608",
      avg_rotten_tomatoes: "88%",
      movie_count: 2,
      total_recommendations: 7,
      avg_runtime: null,
      total_wins: "44",
      total_nominations: "244",
      prosperityScore: 82.42
    },
    {
      director_bg: "Тайка Уайтити",
      director: "Taika Waititi",
      avg_imdb_rating: 7.9,
      avg_metascore: 58,
      total_box_office: "$33,370,906",
      avg_rotten_tomatoes: "80%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "52",
      total_nominations: "192",
      prosperityScore: 70.27
    },
    {
      director_bg: "Джон Красински",
      director: "John Krasinski",
      avg_imdb_rating: 7.35,
      avg_metascore: 76.5,
      total_box_office: "$348,096,622",
      avg_rotten_tomatoes: "94%",
      movie_count: 2,
      total_recommendations: 5,
      avg_runtime: null,
      total_wins: "52",
      total_nominations: "173",
      prosperityScore: 67.36
    },
    {
      director_bg: "Флориан Зелер",
      director: "Florian Zeller",
      avg_imdb_rating: 8.2,
      avg_metascore: 88,
      total_box_office: "$2,122,771",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 2,
      avg_runtime: null,
      total_wins: "37",
      total_nominations: "168",
      prosperityScore: 62.82
    },
    {
      director_bg: "Едгар Райт",
      director: "Edgar Wright",
      avg_imdb_rating: 7.55,
      avg_metascore: 77.5,
      total_box_office: "$141,217,762",
      avg_rotten_tomatoes: "87%",
      movie_count: 2,
      total_recommendations: 4,
      avg_runtime: 112.5,
      total_wins: "61",
      total_nominations: "132",
      prosperityScore: 59.9
    },
    {
      director_bg: "Лий Ънкрич",
      director: "Lee Unkrich",
      avg_imdb_rating: 8.4,
      avg_metascore: 81,
      total_box_office: "$210,460,015",
      avg_rotten_tomatoes: "97%",
      movie_count: 1,
      total_recommendations: 3,
      avg_runtime: null,
      total_wins: "112",
      total_nominations: "42",
      prosperityScore: 53.15
    },
    {
      director_bg: "Джон М. Чу",
      director: "Jon M. Chu",
      avg_imdb_rating: 7.1,
      avg_metascore: 79,
      total_box_office: "$204,812,619",
      avg_rotten_tomatoes: "88%",
      movie_count: 2,
      total_recommendations: 2,
      avg_runtime: null,
      total_wins: "26",
      total_nominations: "127",
      prosperityScore: 48.26
    },
    {
      director_bg: "Джими Чин",
      director: "Jimmy Chin",
      avg_imdb_rating: 8.2,
      avg_metascore: 83.5,
      total_box_office: "$18,601,646",
      avg_rotten_tomatoes: "97%",
      movie_count: 2,
      total_recommendations: 3,
      avg_runtime: null,
      total_wins: "47",
      total_nominations: "93",
      prosperityScore: 46.62
    },
    {
      director_bg: "Стивън Чбоски",
      director: "Stephen Chbosky",
      avg_imdb_rating: 7.9,
      avg_metascore: 67,
      total_box_office: "$35,485,896",
      avg_rotten_tomatoes: "85%",
      movie_count: 1,
      total_recommendations: 3,
      avg_runtime: 103,
      total_wins: "40",
      total_nominations: "102",
      prosperityScore: 45.08
    },
    {
      director_bg: "Questlove",
      director: "Questlove",
      avg_imdb_rating: 8,
      avg_metascore: 96,
      total_box_office: "$2,320,649",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "73",
      total_nominations: "43",
      prosperityScore: 43.15
    },
    {
      director_bg: "Стивън Долдри",
      director: "Stephen Daldry",
      avg_imdb_rating: 7.7,
      avg_metascore: 74,
      total_box_office: "$21,995,263",
      avg_rotten_tomatoes: "85%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: 110,
      total_wins: "55",
      total_nominations: "71",
      prosperityScore: 42.51
    },
    {
      director_bg: "Стивън Спилбърг",
      director: "Steven Spielberg",
      avg_imdb_rating: 7.4,
      avg_metascore: 64,
      total_box_office: "$275,430,700",
      avg_rotten_tomatoes: "72%",
      movie_count: 1,
      total_recommendations: 4,
      avg_runtime: 140,
      total_wins: "22",
      total_nominations: "114",
      prosperityScore: 42.33
    },
    {
      director_bg: "Байрън Хауърд",
      director: "Byron Howard",
      avg_imdb_rating: 8,
      avg_metascore: 78,
      total_box_office: "$341,268,248",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 3,
      avg_runtime: null,
      total_wins: "49",
      total_nominations: "75",
      prosperityScore: 42.17
    },
    {
      director_bg: "Лий Уонъл",
      director: "Leigh Whannell",
      avg_imdb_rating: 7.1,
      avg_metascore: 72,
      total_box_office: "$70,410,000",
      avg_rotten_tomatoes: "72%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "43",
      total_nominations: "84",
      prosperityScore: 41.89
    },
    {
      director_bg: "Андрю Стантън",
      director: "Andrew Stanton",
      avg_imdb_rating: 8.2,
      avg_metascore: 90,
      total_box_office: "$380,843,261",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "49",
      total_nominations: "63",
      prosperityScore: 40.4
    },
    {
      director_bg: "Джеймс Манголд",
      director: "James Mangold",
      avg_imdb_rating: 8.1,
      avg_metascore: 81,
      total_box_office: "$117,624,357",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "26",
      total_nominations: "88",
      prosperityScore: 38.81
    },
    {
      director_bg: "Тод Дъглас Милър",
      director: "Todd Douglas Miller",
      avg_imdb_rating: 8.1,
      avg_metascore: 88,
      total_box_office: "$9,039,891",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "59",
      total_nominations: "45",
      prosperityScore: 38.66
    },
    {
      director_bg: "Рон Клементс",
      director: "Ron Clements",
      avg_imdb_rating: 7.6,
      avg_metascore: 81,
      total_box_office: "$248,757,044",
      avg_rotten_tomatoes: "95%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "22",
      total_nominations: "90",
      prosperityScore: 38.07
    },
    {
      director_bg: "Декстър Флетчър",
      director: "Dexter Fletcher",
      avg_imdb_rating: 7.3,
      avg_metascore: 69,
      total_box_office: "$96,368,160",
      avg_rotten_tomatoes: "69%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "25",
      total_nominations: "89",
      prosperityScore: 37.46
    },
    {
      director_bg: "Крис Бък",
      director: "Chris Buck",
      avg_imdb_rating: 6.8,
      avg_metascore: 64,
      total_box_office: "$477,373,578",
      avg_rotten_tomatoes: "77%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "19",
      total_nominations: "95",
      prosperityScore: 36.64
    },
    {
      director_bg: "Сара Доса",
      director: "Sara Dosa",
      avg_imdb_rating: 7.6,
      avg_metascore: 83,
      total_box_office: "$1,120,412",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "34",
      total_nominations: "67",
      prosperityScore: 36.11
    },
    {
      director_bg: "J.A. Байона",
      director: "J.A. Bayona",
      avg_imdb_rating: 7.4,
      avg_metascore: 76,
      total_box_office: "$3,740,823",
      avg_rotten_tomatoes: "87%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: 108,
      total_wins: "39",
      total_nominations: "57",
      prosperityScore: 34.38
    },
    {
      director_bg: "Дъг Лиман",
      director: "Doug Liman",
      avg_imdb_rating: 7.9,
      avg_metascore: 71,
      total_box_office: "$200,412,512",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 5,
      avg_runtime: 113,
      total_wins: "22",
      total_nominations: "76",
      prosperityScore: 33.6
    },
    {
      director_bg: "Алекс Приц",
      director: "Alex Pritz",
      avg_imdb_rating: 7.5,
      avg_metascore: 83,
      total_box_office: "$69,316",
      avg_rotten_tomatoes: "97%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "45",
      total_nominations: "43",
      prosperityScore: 33.4
    },
    {
      director_bg: "Енрико Казароса",
      director: "Enrico Casarosa",
      avg_imdb_rating: 7.4,
      avg_metascore: 71,
      total_box_office: "$1,324,302",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "6",
      total_nominations: "83",
      prosperityScore: 30.48
    },
    {
      director_bg: "Гари Рос",
      director: "Gary Ross",
      avg_imdb_rating: 7.2,
      avg_metascore: 68,
      total_box_office: "$408,010,692",
      avg_rotten_tomatoes: "84%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: 142,
      total_wins: "34",
      total_nominations: "49",
      prosperityScore: 30.09
    },
    {
      director_bg: "Кели Фремон Крейг",
      director: "Kelly Fremon Craig",
      avg_imdb_rating: 7.3,
      avg_metascore: 77,
      total_box_office: "$28,863,266",
      avg_rotten_tomatoes: "94%",
      movie_count: 1,
      total_recommendations: 2,
      avg_runtime: 104,
      total_wins: "16",
      total_nominations: "58",
      prosperityScore: 27.83
    },
    {
      director_bg: "Мариел Хелър",
      director: "Marielle Heller",
      avg_imdb_rating: 7.2,
      avg_metascore: 80,
      total_box_office: "$61,704,055",
      avg_rotten_tomatoes: "80%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "10",
      total_nominations: "64",
      prosperityScore: 27.8
    },
    {
      director_bg: "Шаунак Сен",
      director: "Shaunak Sen",
      avg_imdb_rating: 7,
      avg_metascore: 87,
      total_box_office: "$101,283",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "24",
      total_nominations: "43",
      prosperityScore: 27.45
    },
    {
      director_bg: "Адам Шанкман",
      director: "Adam Shankman",
      avg_imdb_rating: 6.7,
      avg_metascore: 81,
      total_box_office: "$118,946,291",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: 117,
      total_wins: "21",
      total_nominations: "45",
      prosperityScore: 26.42
    },
    {
      director_bg: "Крейг Гилеспи",
      director: "Craig Gillespie",
      avg_imdb_rating: 7.3,
      avg_metascore: 59,
      total_box_office: "$86,103,234",
      avg_rotten_tomatoes: "75%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "29",
      total_nominations: "44",
      prosperityScore: 26.41
    },
    {
      director_bg: "Есента на Уайлд",
      director: "Autumn de Wilde",
      avg_imdb_rating: 6.7,
      avg_metascore: 71,
      total_box_office: "$10,055,355",
      avg_rotten_tomatoes: "86%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "11",
      total_nominations: "61",
      prosperityScore: 26.41
    },
    {
      director_bg: "Андрю Адамсън",
      director: "Andrew Adamson",
      avg_imdb_rating: 6.9,
      avg_metascore: 75,
      total_box_office: "$291,710,957",
      avg_rotten_tomatoes: "75%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "18",
      total_nominations: "46",
      prosperityScore: 25.19
    },
    {
      director_bg: "Джон Карни",
      director: "John Carney",
      avg_imdb_rating: 7.9,
      avg_metascore: 79,
      total_box_office: "$3,237,118",
      avg_rotten_tomatoes: "95%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "16",
      total_nominations: "45",
      prosperityScore: 24.84
    },
    {
      director_bg: "Дан Сканлън",
      director: "Dan Scanlon",
      avg_imdb_rating: 7.4,
      avg_metascore: 61,
      total_box_office: "$61,555,145",
      avg_rotten_tomatoes: "88%",
      movie_count: 1,
      total_recommendations: 2,
      avg_runtime: null,
      total_wins: "4",
      total_nominations: "66",
      prosperityScore: 24.63
    },
    {
      director_bg: "Хенри Селик",
      director: "Henry Selick",
      avg_imdb_rating: 7.8,
      avg_metascore: 80,
      total_box_office: "$116,896,576",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "8",
      total_nominations: "46",
      prosperityScore: 22.78
    },
    {
      director_bg: "Джеймс Понсолд",
      director: "James Ponsoldt",
      avg_imdb_rating: 7,
      avg_metascore: 82,
      total_box_office: "$6,854,611",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "9",
      total_nominations: "32",
      prosperityScore: 19.69
    },
    {
      director_bg: "Джош Буун",
      director: "Josh Boone",
      avg_imdb_rating: 7.7,
      avg_metascore: 69,
      total_box_office: "$124,872,350",
      avg_rotten_tomatoes: "81%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "23",
      total_nominations: "18",
      prosperityScore: 19.16
    },
    {
      director_bg: "Майкъл Грейси",
      director: "Michael Gracey",
      avg_imdb_rating: 7.5,
      avg_metascore: 48,
      total_box_office: "$174,340,174",
      avg_rotten_tomatoes: "57%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: 105,
      total_wins: "17",
      total_nominations: "32",
      prosperityScore: 18.72
    },
    {
      director_bg: "Джеймс Уан",
      director: "James Wan",
      avg_imdb_rating: 7.5,
      avg_metascore: 68,
      total_box_office: "$137,446,368",
      avg_rotten_tomatoes: "86%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "15",
      total_nominations: "22",
      prosperityScore: 17.65
    },
    {
      director_bg: "Майк Мичъл",
      director: "Mike Mitchell",
      avg_imdb_rating: 6.4,
      avg_metascore: 55,
      total_box_office: "$154,174,089",
      avg_rotten_tomatoes: "76%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "4",
      total_nominations: "37",
      prosperityScore: 16.68
    },
    {
      director_bg: "Пиер Перифел",
      director: "Pierre Perifel",
      avg_imdb_rating: 6.8,
      avg_metascore: 64,
      total_box_office: "$97,459,240",
      avg_rotten_tomatoes: "88%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "2",
      total_nominations: "30",
      prosperityScore: 15.28
    },
    {
      director_bg: "Хиромаса Йонебаяши",
      director: "Hiromasa Yonebayashi",
      avg_imdb_rating: 7.6,
      avg_metascore: 80,
      total_box_office: "$19,587,032",
      avg_rotten_tomatoes: "94%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "12",
      total_nominations: "6",
      prosperityScore: 13.96
    },
    {
      director_bg: "Карол Рийд",
      director: "Carol Reed",
      avg_imdb_rating: 8.1,
      avg_metascore: 97,
      total_box_office: "$1,067,364",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: 93,
      total_wins: "5",
      total_nominations: "4",
      prosperityScore: 13.11
    },
    {
      director_bg: "Джон Уотс",
      director: "Jon Watts",
      avg_imdb_rating: 7.4,
      avg_metascore: 73,
      total_box_office: "$334,952,829",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 2,
      avg_runtime: 133,
      total_wins: "8",
      total_nominations: "10",
      prosperityScore: 13.06
    },
    {
      director_bg: "Ангъс Маклейн",
      director: "Angus MacLane",
      avg_imdb_rating: 6.1,
      avg_metascore: 60,
      total_box_office: "$118,307,188",
      avg_rotten_tomatoes: "74%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "2",
      total_nominations: "23",
      prosperityScore: 13.04
    },
    {
      director_bg: "Сиера Петенгил",
      director: "Sierra Pettengill",
      avg_imdb_rating: 6.7,
      avg_metascore: 82,
      total_box_office: "$40,960",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "4",
      total_nominations: "10",
      prosperityScore: 12.66
    },
    {
      director_bg: "Уес Бол",
      director: "Wes Ball",
      avg_imdb_rating: 6.55,
      avg_metascore: 53.5,
      total_box_office: "$160,460,305",
      avg_rotten_tomatoes: "54%",
      movie_count: 2,
      total_recommendations: 4,
      avg_runtime: 128,
      total_wins: "4",
      total_nominations: "19",
      prosperityScore: 12.02
    },
    {
      director_bg: "Джейк Касдан",
      director: "Jake Kasdan",
      avg_imdb_rating: 7,
      avg_metascore: 58,
      total_box_office: "$404,540,171",
      avg_rotten_tomatoes: "76%",
      movie_count: 1,
      total_recommendations: 2,
      avg_runtime: 119,
      total_wins: "5",
      total_nominations: "15",
      prosperityScore: 11.86
    },
    {
      director_bg: "Стивън Мърчант",
      director: "Stephen Merchant",
      avg_imdb_rating: 7,
      avg_metascore: 68,
      total_box_office: "$22,958,886",
      avg_rotten_tomatoes: "93%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "10",
      total_nominations: "5",
      prosperityScore: 11.84
    },
    {
      director_bg: "Крис Рено",
      director: "Chris Renaud",
      avg_imdb_rating: 6.5,
      avg_metascore: 61,
      total_box_office: "$368,623,860",
      avg_rotten_tomatoes: "71%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "4",
      total_nominations: "15",
      prosperityScore: 11.8
    },
    {
      director_bg: "Дани Бойл",
      director: "Danny Boyle",
      avg_imdb_rating: 6.8,
      avg_metascore: 55,
      total_box_office: "$73,286,650",
      avg_rotten_tomatoes: "63%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "2",
      total_nominations: "19",
      prosperityScore: 11.6
    },
    {
      director_bg: "Николас Роуг",
      director: "Nicolas Roeg",
      avg_imdb_rating: 6.8,
      avg_metascore: 78,
      total_box_office: "$10,360,553",
      avg_rotten_tomatoes: "94%",
      movie_count: 1,
      total_recommendations: 2,
      avg_runtime: null,
      total_wins: "3",
      total_nominations: "8",
      prosperityScore: 11.47
    },
    {
      director_bg: "Габор Чупо",
      director: "Gabor Csupo",
      avg_imdb_rating: 7.2,
      avg_metascore: 74,
      total_box_office: "$82,272,442",
      avg_rotten_tomatoes: "85%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "6",
      total_nominations: "5",
      prosperityScore: 11.26
    },
    {
      director_bg: "Марием Перес Риера",
      director: "Mariem Pérez Riera",
      avg_imdb_rating: 7.7,
      avg_metascore: 77,
      total_box_office: "$264,626",
      avg_rotten_tomatoes: "96%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "3",
      total_nominations: "7",
      prosperityScore: 11.22
    },
    {
      director_bg: "Стивън Кейпъл младши",
      director: "Steven Caple Jr.",
      avg_imdb_rating: 7.1,
      avg_metascore: 66,
      total_box_office: "$115,715,889",
      avg_rotten_tomatoes: "83%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "1",
      total_nominations: "12",
      prosperityScore: 10.7
    },
    {
      director_bg: "Нийл Бъргър",
      director: "Neil Burger",
      avg_imdb_rating: 6.6,
      avg_metascore: 48,
      total_box_office: "$150,947,895",
      avg_rotten_tomatoes: "41%",
      movie_count: 1,
      total_recommendations: 3,
      avg_runtime: 139,
      total_wins: "7",
      total_nominations: "11",
      prosperityScore: 10.36
    },
    {
      director_bg: "Джонатан Левин",
      director: "Jonathan Levine",
      avg_imdb_rating: 6.8,
      avg_metascore: 60,
      total_box_office: "$66,380,662",
      avg_rotten_tomatoes: "81%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: 98,
      total_wins: "2",
      total_nominations: "10",
      prosperityScore: 9.87
    },
    {
      director_bg: "Питър Уиър",
      director: "Peter Weir",
      avg_imdb_rating: 7.3,
      avg_metascore: 66,
      total_box_office: "$2,701,859",
      avg_rotten_tomatoes: "73%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "4",
      total_nominations: "5",
      prosperityScore: 9.85
    },
    {
      director_bg: "Хауме Коле-Сера",
      director: "Jaume Collet-Serra",
      avg_imdb_rating: 6.6,
      avg_metascore: 50,
      total_box_office: "$116,987,516",
      avg_rotten_tomatoes: "62%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "5",
      total_nominations: "9",
      prosperityScore: 9.48
    },
    {
      director_bg: "Джеф Фаулър",
      director: "Jeff Fowler",
      avg_imdb_rating: 6.5,
      avg_metascore: 47,
      total_box_office: "$148,974,665",
      avg_rotten_tomatoes: "64%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "3",
      total_nominations: "12",
      prosperityScore: 9.33
    },
    {
      director_bg: "Антоан Фукуа",
      director: "Antoine Fuqua",
      avg_imdb_rating: 7.2,
      avg_metascore: 57,
      total_box_office: "$101,530,738",
      avg_rotten_tomatoes: "61%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "1",
      total_nominations: "9",
      prosperityScore: 9.04
    },
    {
      director_bg: "Питър Мортимър",
      director: "Peter Mortimer",
      avg_imdb_rating: 7.9,
      avg_metascore: 67,
      total_box_office: "$844,743",
      avg_rotten_tomatoes: "93%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "2",
      total_nominations: "2",
      prosperityScore: 8.68
    },
    {
      director_bg: "Роб Летърман",
      director: "Rob Letterman",
      avg_imdb_rating: 6.5,
      avg_metascore: 53,
      total_box_office: "$144,174,568",
      avg_rotten_tomatoes: "68%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "0",
      total_nominations: "10",
      prosperityScore: 8.53
    },
    {
      director_bg: "Крис Кълъмбъс",
      director: "Chris Columbus",
      avg_imdb_rating: 5.9,
      avg_metascore: 47,
      total_box_office: "$88,768,303",
      avg_rotten_tomatoes: "49%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: 118,
      total_wins: "0",
      total_nominations: "11",
      prosperityScore: 8.1
    },
    {
      director_bg: "Джим Джармуш",
      director: "Jim Jarmusch",
      avg_imdb_rating: 7.7,
      avg_metascore: 68,
      total_box_office: "$2,015,810",
      avg_rotten_tomatoes: "77%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "1",
      total_nominations: "0",
      prosperityScore: 7.95
    },
    {
      director_bg: "Крис Сандърс",
      director: "Chris Sanders",
      avg_imdb_rating: 6.7,
      avg_metascore: 48,
      total_box_office: "$62,342,368",
      avg_rotten_tomatoes: "63%",
      movie_count: 1,
      total_recommendations: 2,
      avg_runtime: null,
      total_wins: "1",
      total_nominations: "8",
      prosperityScore: 7.84
    },
    {
      director_bg: "Хенри Йост",
      director: "Henry Joost",
      avg_imdb_rating: 6.5,
      avg_metascore: 58,
      total_box_office: "$38,583,626",
      avg_rotten_tomatoes: "67%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: 96,
      total_wins: "0",
      total_nominations: "5",
      prosperityScore: 7.77
    },
    {
      director_bg: "Кристофър Ландън",
      director: "Christopher Landon",
      avg_imdb_rating: 6.6,
      avg_metascore: 58,
      total_box_office: "$55,683,845",
      avg_rotten_tomatoes: "70%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: 96,
      total_wins: "0",
      total_nominations: "3",
      prosperityScore: 7.28
    },
    {
      director_bg: "Ели Рот",
      director: "Eli Roth",
      avg_imdb_rating: 6.1,
      avg_metascore: 57,
      total_box_office: "$68,549,695",
      avg_rotten_tomatoes: "65%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "1",
      total_nominations: "0",
      prosperityScore: 6.68
    },
    {
      director_bg: "Стивън Гаган",
      director: "Stephen Gaghan",
      avg_imdb_rating: 5.6,
      avg_metascore: 26,
      total_box_office: "$77,047,065",
      avg_rotten_tomatoes: "15%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "4",
      total_nominations: "9",
      prosperityScore: 6.63
    },
    {
      director_bg: "Алфонсо Гомес-Рехон",
      director: "Alfonso Gomez-Rejon",
      avg_imdb_rating: 6.5,
      avg_metascore: 55,
      total_box_office: "$5,979,540",
      avg_rotten_tomatoes: "33%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "0",
      total_nominations: "0",
      prosperityScore: 6.18
    },
    {
      director_bg: "Ари Сандел",
      director: "Ari Sandel",
      avg_imdb_rating: 5.6,
      avg_metascore: 53,
      total_box_office: "$46,700,633",
      avg_rotten_tomatoes: "48%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "0",
      total_nominations: "0",
      prosperityScore: 5.91
    },
    {
      director_bg: "Уес Крейвън",
      director: "Wes Craven",
      avg_imdb_rating: 5.1,
      avg_metascore: 31,
      total_box_office: "$19,297,522",
      avg_rotten_tomatoes: "31%",
      movie_count: 1,
      total_recommendations: 1,
      avg_runtime: null,
      total_wins: "0",
      total_nominations: "3",
      prosperityScore: 4.39
    }
  ],
  sortedActorsByProsperity: [
    {
      actor_bg: "Сирша Ронан",
      actor: "Saoirse Ronan",
      avg_imdb_rating: 7.6,
      avg_metascore: 92,
      total_box_office: "$157,059,487",
      avg_rotten_tomatoes: "97%",
      movie_count: 2,
      total_recommendations: 2,
      total_wins: "202",
      total_nominations: "467",
      prosperityScore: 187.45
    },
    {
      actor_bg: "Песен Канг-хо",
      actor: "Song Kang-ho",
      avg_imdb_rating: 8.5,
      avg_metascore: 96,
      total_box_office: "$53,369,749",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "316",
      total_nominations: "266",
      prosperityScore: 171.86
    },
    {
      actor_bg: "Райън Гослинг",
      actor: "Ryan Gosling",
      avg_imdb_rating: 8,
      avg_metascore: 94,
      total_box_office: "$151,101,803",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "242",
      total_nominations: "307",
      prosperityScore: 159.68
    },
    {
      actor_bg: "Сали Хокинс",
      actor: "Sally Hawkins",
      avg_imdb_rating: 7.3,
      avg_metascore: 87,
      total_box_office: "$63,859,435",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "138",
      total_nominations: "350",
      prosperityScore: 138.44
    },
    {
      actor_bg: "Тимъти Шаламе",
      actor: "Timothée Chalamet",
      avg_imdb_rating: 8,
      avg_metascore: 74,
      total_box_office: "$108,897,830",
      avg_rotten_tomatoes: "83%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "177",
      total_nominations: "300",
      prosperityScore: 136.41
    },
    {
      actor_bg: "Сандра Бълок",
      actor: "Sandra Bullock",
      avg_imdb_rating: 7.7,
      avg_metascore: 96,
      total_box_office: "$274,092,705",
      avg_rotten_tomatoes: "96%",
      movie_count: 1,
      total_recommendations: 5,
      total_wins: "240",
      total_nominations: "187",
      prosperityScore: 129.29
    },
    {
      actor_bg: "Франсис Макдорманд",
      actor: "Frances McDormand",
      avg_imdb_rating: 7.3,
      avg_metascore: 91,
      total_box_office: "$3,700,000",
      avg_rotten_tomatoes: "93%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "254",
      total_nominations: "155",
      prosperityScore: 124.87
    },
    {
      actor_bg: "Мат Деймън",
      actor: "Matt Damon",
      avg_imdb_rating: 7.8,
      avg_metascore: 76,
      total_box_office: "$356,911,965",
      avg_rotten_tomatoes: "89%",
      movie_count: 3,
      total_recommendations: 8,
      total_wins: "70",
      total_nominations: "332",
      prosperityScore: 112.57
    },
    {
      actor_bg: "Лейди Гага",
      actor: "Lady Gaga",
      avg_imdb_rating: 7.6,
      avg_metascore: 88,
      total_box_office: "$215,333,122",
      avg_rotten_tomatoes: "90%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "99",
      total_nominations: "290",
      prosperityScore: 111.91
    },
    {
      actor_bg: "Леонардо ди Каприо",
      actor: "Leonardo DiCaprio",
      avg_imdb_rating: 8.8,
      avg_metascore: 74,
      total_box_office: "$292,587,330",
      avg_rotten_tomatoes: "87%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "159",
      total_nominations: "220",
      prosperityScore: 111.15
    },
    {
      actor_bg: "Стивън Юн",
      actor: "Steven Yeun",
      avg_imdb_rating: 7.4,
      avg_metascore: 89,
      total_box_office: "$3,110,580",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "122",
      total_nominations: "245",
      prosperityScore: 107.59
    },
    {
      actor_bg: "Дийн-Чарлз Чапман",
      actor: "Dean-Charles Chapman",
      avg_imdb_rating: 8.2,
      avg_metascore: 78,
      total_box_office: "$159,227,644",
      avg_rotten_tomatoes: "88%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "135",
      total_nominations: "207",
      prosperityScore: 101
    },
    {
      actor_bg: "Ейми Адамс",
      actor: "Amy Adams",
      avg_imdb_rating: 7.9,
      avg_metascore: 81,
      total_box_office: "$100,546,139",
      avg_rotten_tomatoes: "94%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "71",
      total_nominations: "268",
      prosperityScore: 97.31
    },
    {
      actor_bg: "Фион Уайтхед",
      actor: "Fionn Whitehead",
      avg_imdb_rating: 7.8,
      avg_metascore: 94,
      total_box_office: "$189,740,665",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "68",
      total_nominations: "236",
      prosperityScore: 89.72
    },
    {
      actor_bg: "Харисън Форд",
      actor: "Harrison Ford",
      avg_imdb_rating: 7.35,
      avg_metascore: 64.5,
      total_box_office: "$154,414,043",
      avg_rotten_tomatoes: "76%",
      movie_count: 2,
      total_recommendations: 4,
      total_wins: "101",
      total_nominations: "171",
      prosperityScore: 80.35
    },
    {
      actor_bg: "Роман Грифин Дейвис",
      actor: "Roman Griffin Davis",
      avg_imdb_rating: 7.9,
      avg_metascore: 58,
      total_box_office: "$33,370,906",
      avg_rotten_tomatoes: "80%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "52",
      total_nominations: "192",
      prosperityScore: 70.28
    },
    {
      actor_bg: "Джейми Фокс",
      actor: "Jamie Foxx",
      avg_imdb_rating: 8,
      avg_metascore: 83,
      total_box_office: "$946,154",
      avg_rotten_tomatoes: "95%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "125",
      total_nominations: "94",
      prosperityScore: 70.2
    },
    {
      actor_bg: "Ейми Полер",
      actor: "Amy Poehler",
      avg_imdb_rating: 8.1,
      avg_metascore: 94,
      total_box_office: "$356,461,711",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 4,
      total_wins: "99",
      total_nominations: "118",
      prosperityScore: 69.61
    },
    {
      actor_bg: "Емили Блънт",
      actor: "Emily Blunt",
      avg_imdb_rating: 7.35,
      avg_metascore: 76.5,
      total_box_office: "$348,096,622",
      avg_rotten_tomatoes: "94%",
      movie_count: 2,
      total_recommendations: 5,
      total_wins: "52",
      total_nominations: "173",
      prosperityScore: 67.42
    },
    {
      actor_bg: "Антъни Хопкинс",
      actor: "Anthony Hopkins",
      avg_imdb_rating: 8.2,
      avg_metascore: 88,
      total_box_office: "$2,122,771",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "37",
      total_nominations: "168",
      prosperityScore: 62.82
    },
    {
      actor_bg: "Матю Макконъхи",
      actor: "Matthew McConaughey",
      avg_imdb_rating: 8.7,
      avg_metascore: 74,
      total_box_office: "$188,020,017",
      avg_rotten_tomatoes: "73%",
      movie_count: 1,
      total_recommendations: 8,
      total_wins: "44",
      total_nominations: "148",
      prosperityScore: 58.59
    },
    {
      actor_bg: "Джон Дейвид Вашингтон",
      actor: "John David Washington",
      avg_imdb_rating: 7.3,
      avg_metascore: 69,
      total_box_office: "$58,504,105",
      avg_rotten_tomatoes: "70%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "49",
      total_nominations: "136",
      prosperityScore: 56.42
    },
    {
      actor_bg: "Едуард Аснер",
      actor: "Edward Asner",
      avg_imdb_rating: 8.3,
      avg_metascore: 88,
      total_box_office: "$293,004,164",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "81",
      total_nominations: "88",
      prosperityScore: 56.11
    },
    {
      actor_bg: "Антъни Гонзалес",
      actor: "Anthony Gonzalez",
      avg_imdb_rating: 8.4,
      avg_metascore: 81,
      total_box_office: "$210,460,015",
      avg_rotten_tomatoes: "97%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "112",
      total_nominations: "42",
      prosperityScore: 53.19
    },
    {
      actor_bg: "Шамейк Мур",
      actor: "Shameik Moore",
      avg_imdb_rating: 8.4,
      avg_metascore: 87,
      total_box_office: "$190,241,310",
      avg_rotten_tomatoes: "97%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "85",
      total_nominations: "61",
      prosperityScore: 50.44
    },
    {
      actor_bg: "Крис Прат",
      actor: "Chris Pratt",
      avg_imdb_rating: 8,
      avg_metascore: 76,
      total_box_office: "$333,718,600",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "52",
      total_nominations: "103",
      prosperityScore: 49.93
    },
    {
      actor_bg: "Доринда Дрейк",
      actor: "Dorinda Drake",
      avg_imdb_rating: 8,
      avg_metascore: 96,
      total_box_office: "$2,320,649",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "73",
      total_nominations: "43",
      prosperityScore: 43.15
    },
    {
      actor_bg: "Джейми Бел",
      actor: "Jamie Bell",
      avg_imdb_rating: 7.7,
      avg_metascore: 74,
      total_box_office: "$21,995,263",
      avg_rotten_tomatoes: "85%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "55",
      total_nominations: "71",
      prosperityScore: 42.51
    },
    {
      actor_bg: "Джинифър Гудуин",
      actor: "Ginnifer Goodwin",
      avg_imdb_rating: 8,
      avg_metascore: 78,
      total_box_office: "$341,268,248",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "49",
      total_nominations: "75",
      prosperityScore: 42.24
    },
    {
      actor_bg: "Елизабет Мос",
      actor: "Elisabeth Moss",
      avg_imdb_rating: 7.1,
      avg_metascore: 72,
      total_box_office: "$70,410,000",
      avg_rotten_tomatoes: "72%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "43",
      total_nominations: "84",
      prosperityScore: 41.9
    },
    {
      actor_bg: "Албърт Брукс",
      actor: "Albert Brooks",
      avg_imdb_rating: 8.2,
      avg_metascore: 90,
      total_box_office: "$380,843,261",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "49",
      total_nominations: "63",
      prosperityScore: 40.47
    },
    {
      actor_bg: "Ансел Елгорт",
      actor: "Ansel Elgort",
      avg_imdb_rating: 7.5,
      avg_metascore: 86,
      total_box_office: "$107,825,862",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "43",
      total_nominations: "66",
      prosperityScore: 38.87
    },
    {
      actor_bg: "Нийл Армстронг",
      actor: "Neil Armstrong",
      avg_imdb_rating: 8.1,
      avg_metascore: 88,
      total_box_office: "$9,039,891",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "59",
      total_nominations: "45",
      prosperityScore: 38.66
    },
    {
      actor_bg: "Аулии Кравальо",
      actor: "Auli'i Cravalho",
      avg_imdb_rating: 7.6,
      avg_metascore: 81,
      total_box_office: "$248,757,044",
      avg_rotten_tomatoes: "95%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "22",
      total_nominations: "90",
      prosperityScore: 38.12
    },
    {
      actor_bg: "Тарон Егертън",
      actor: "Taron Egerton",
      avg_imdb_rating: 7.3,
      avg_metascore: 69,
      total_box_office: "$96,368,160",
      avg_rotten_tomatoes: "69%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "25",
      total_nominations: "89",
      prosperityScore: 37.48
    },
    {
      actor_bg: "Кристен Бел",
      actor: "Kristen Bell",
      avg_imdb_rating: 6.8,
      avg_metascore: 64,
      total_box_office: "$477,373,578",
      avg_rotten_tomatoes: "77%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "19",
      total_nominations: "95",
      prosperityScore: 36.74
    },
    {
      actor_bg: "Миранда Джули",
      actor: "Miranda July",
      avg_imdb_rating: 7.6,
      avg_metascore: 83,
      total_box_office: "$1,120,412",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "34",
      total_nominations: "67",
      prosperityScore: 36.11
    },
    {
      actor_bg: "Луис Макдугъл",
      actor: "Lewis MacDougall",
      avg_imdb_rating: 7.4,
      avg_metascore: 76,
      total_box_office: "$3,740,823",
      avg_rotten_tomatoes: "87%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "39",
      total_nominations: "57",
      prosperityScore: 34.38
    },
    {
      actor_bg: "Нейдиня Бандейра",
      actor: "Neidinha Bandeira",
      avg_imdb_rating: 7.5,
      avg_metascore: 83,
      total_box_office: "$69,316",
      avg_rotten_tomatoes: "97%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "45",
      total_nominations: "43",
      prosperityScore: 33.4
    },
    {
      actor_bg: "Алекс Хонълд",
      actor: "Alex Honnold",
      avg_imdb_rating: 8.1,
      avg_metascore: 83,
      total_box_office: "$17,541,090",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "31",
      total_nominations: "54",
      prosperityScore: 32.01
    },
    {
      actor_bg: "Джейкъб Трембле",
      actor: "Jacob Tremblay",
      avg_imdb_rating: 7.4,
      avg_metascore: 71,
      total_box_office: "$1,324,302",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "6",
      total_nominations: "83",
      prosperityScore: 30.48
    },
    {
      actor_bg: "Том Холанд",
      actor: "Tom Holland",
      avg_imdb_rating: 7.4,
      avg_metascore: 67,
      total_box_office: "$396,507,974",
      avg_rotten_tomatoes: "90%",
      movie_count: 2,
      total_recommendations: 4,
      total_wins: "12",
      total_nominations: "76",
      prosperityScore: 30.24
    },
    {
      actor_bg: "Констанс Ву",
      actor: "Constance Wu",
      avg_imdb_rating: 6.9,
      avg_metascore: 74,
      total_box_office: "$174,837,452",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "15",
      total_nominations: "70",
      prosperityScore: 30.23
    },
    {
      actor_bg: "Дженифър Лорънс",
      actor: "Jennifer Lawrence",
      avg_imdb_rating: 7.2,
      avg_metascore: 68,
      total_box_office: "$408,010,692",
      avg_rotten_tomatoes: "84%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "34",
      total_nominations: "49",
      prosperityScore: 30.17
    },
    {
      actor_bg: "Майкъл Сера",
      actor: "Michael Cera",
      avg_imdb_rating: 7.6,
      avg_metascore: 69,
      total_box_office: "$33,391,900",
      avg_rotten_tomatoes: "82%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "18",
      total_nominations: "66",
      prosperityScore: 29.65
    },
    {
      actor_bg: "Логан Лерман",
      actor: "Logan Lerman",
      avg_imdb_rating: 6.9,
      avg_metascore: 57,
      total_box_office: "$106,511,251",
      avg_rotten_tomatoes: "67%",
      movie_count: 2,
      total_recommendations: 4,
      total_wins: "20",
      total_nominations: "62",
      prosperityScore: 27.99
    },
    {
      actor_bg: "Райън Потър",
      actor: "Ryan Potter",
      avg_imdb_rating: 7.8,
      avg_metascore: 74,
      total_box_office: "$222,527,828",
      avg_rotten_tomatoes: "90%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "17",
      total_nominations: "58",
      prosperityScore: 27.93
    },
    {
      actor_bg: "Матю Рис",
      actor: "Matthew Rhys",
      avg_imdb_rating: 7.2,
      avg_metascore: 80,
      total_box_office: "$61,704,055",
      avg_rotten_tomatoes: "80%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "10",
      total_nominations: "64",
      prosperityScore: 27.82
    },
    {
      actor_bg: "Кели Мари Тран",
      actor: "Kelly Marie Tran",
      avg_imdb_rating: 7.3,
      avg_metascore: 74,
      total_box_office: "$54,723,032",
      avg_rotten_tomatoes: "93%",
      movie_count: 1,
      total_recommendations: 4,
      total_wins: "13",
      total_nominations: "62",
      prosperityScore: 27.64
    },
    {
      actor_bg: "Салик Рехман",
      actor: "Salik Rehman",
      avg_imdb_rating: 7,
      avg_metascore: 87,
      total_box_office: "$101,283",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "24",
      total_nominations: "43",
      prosperityScore: 27.45
    },
    {
      actor_bg: "Антъни Рамос",
      actor: "Anthony Ramos",
      avg_imdb_rating: 7.3,
      avg_metascore: 84,
      total_box_office: "$29,975,167",
      avg_rotten_tomatoes: "84%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "11",
      total_nominations: "57",
      prosperityScore: 26.77
    },
    {
      actor_bg: "Джон Траволта",
      actor: "John Travolta",
      avg_imdb_rating: 6.7,
      avg_metascore: 81,
      total_box_office: "$118,946,291",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "21",
      total_nominations: "45",
      prosperityScore: 26.44
    },
    {
      actor_bg: "Ема Стоун",
      actor: "Emma Stone",
      avg_imdb_rating: 7.3,
      avg_metascore: 59,
      total_box_office: "$86,103,234",
      avg_rotten_tomatoes: "75%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "29",
      total_nominations: "44",
      prosperityScore: 26.43
    },
    {
      actor_bg: "Аня Тейлър-Джой",
      actor: "Anya Taylor-Joy",
      avg_imdb_rating: 6.7,
      avg_metascore: 71,
      total_box_office: "$10,055,355",
      avg_rotten_tomatoes: "86%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "11",
      total_nominations: "61",
      prosperityScore: 26.41
    },
    {
      actor_bg: "Тилда Суинтън",
      actor: "Tilda Swinton",
      avg_imdb_rating: 6.9,
      avg_metascore: 75,
      total_box_office: "$291,710,957",
      avg_rotten_tomatoes: "75%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "18",
      total_nominations: "46",
      prosperityScore: 25.25
    },
    {
      actor_bg: "Фердия Уолш-Пийло",
      actor: "Ferdia Walsh-Peelo",
      avg_imdb_rating: 7.9,
      avg_metascore: 79,
      total_box_office: "$3,237,118",
      avg_rotten_tomatoes: "95%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "16",
      total_nominations: "45",
      prosperityScore: 24.84
    },
    {
      actor_bg: "Тай Шеридан",
      actor: "Tye Sheridan",
      avg_imdb_rating: 7.4,
      avg_metascore: 64,
      total_box_office: "$137,715,350",
      avg_rotten_tomatoes: "72%",
      movie_count: 1,
      total_recommendations: 4,
      total_wins: "11",
      total_nominations: "57",
      prosperityScore: 24.8
    },
    {
      actor_bg: "Банча Дурияпунт",
      actor: "Bancha Duriyapunt",
      avg_imdb_rating: 8.3,
      avg_metascore: 84,
      total_box_office: "$1,060,556",
      avg_rotten_tomatoes: "96%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "16",
      total_nominations: "39",
      prosperityScore: 23.88
    },
    {
      actor_bg: "Шейлийн Удли",
      actor: "Shailene Woodley",
      avg_imdb_rating: 7.15,
      avg_metascore: 58.5,
      total_box_office: "$275,820,245",
      avg_rotten_tomatoes: "61%",
      movie_count: 2,
      total_recommendations: 4,
      total_wins: "30",
      total_nominations: "29",
      prosperityScore: 22.95
    },
    {
      actor_bg: "Дакота Фанинг",
      actor: "Dakota Fanning",
      avg_imdb_rating: 7.8,
      avg_metascore: 80,
      total_box_office: "$116,896,576",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "8",
      total_nominations: "46",
      prosperityScore: 22.8
    },
    {
      actor_bg: "Том Круз",
      actor: "Tom Cruise",
      avg_imdb_rating: 7.9,
      avg_metascore: 71,
      total_box_office: "$100,206,256",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 5,
      total_wins: "11",
      total_nominations: "38",
      prosperityScore: 20.81
    },
    {
      actor_bg: "Дуейн Джонсън",
      actor: "Dwayne Johnson",
      avg_imdb_rating: 6.87,
      avg_metascore: 58.66666666666666,
      total_box_office: "$544,486,573",
      avg_rotten_tomatoes: "77%",
      movie_count: 3,
      total_recommendations: 4,
      total_wins: "20",
      total_nominations: "29",
      prosperityScore: 20.03
    },
    {
      actor_bg: "Майлс Телър",
      actor: "Miles Teller",
      avg_imdb_rating: 7,
      avg_metascore: 82,
      total_box_office: "$6,854,611",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "9",
      total_nominations: "32",
      prosperityScore: 19.69
    },
    {
      actor_bg: "Хю Джакман",
      actor: "Hugh Jackman",
      avg_imdb_rating: 7.5,
      avg_metascore: 48,
      total_box_office: "$174,340,174",
      avg_rotten_tomatoes: "57%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "17",
      total_nominations: "32",
      prosperityScore: 18.76
    },
    {
      actor_bg: "Хейли Стайнфелд",
      actor: "Hailee Steinfeld",
      avg_imdb_rating: 7.3,
      avg_metascore: 77,
      total_box_office: "$14,431,633",
      avg_rotten_tomatoes: "94%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "8",
      total_nominations: "29",
      prosperityScore: 18.18
    },
    {
      actor_bg: "Патрик Уилсън",
      actor: "Patrick Wilson",
      avg_imdb_rating: 7.5,
      avg_metascore: 68,
      total_box_office: "$137,446,368",
      avg_rotten_tomatoes: "86%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "15",
      total_nominations: "22",
      prosperityScore: 17.67
    },
    {
      actor_bg: "Анна Кендрик",
      actor: "Anna Kendrick",
      avg_imdb_rating: 6.4,
      avg_metascore: 55,
      total_box_office: "$154,174,089",
      avg_rotten_tomatoes: "76%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "37",
      prosperityScore: 16.71
    },
    {
      actor_bg: "Сам Рокуел",
      actor: "Sam Rockwell",
      avg_imdb_rating: 6.8,
      avg_metascore: 64,
      total_box_office: "$97,459,240",
      avg_rotten_tomatoes: "88%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "30",
      prosperityScore: 15.29
    },
    {
      actor_bg: "Бриджит Мендлър",
      actor: "Bridgit Mendler",
      avg_imdb_rating: 7.6,
      avg_metascore: 80,
      total_box_office: "$19,587,032",
      avg_rotten_tomatoes: "94%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "12",
      total_nominations: "6",
      prosperityScore: 13.96
    },
    {
      actor_bg: "Орсън Уелс",
      actor: "Orson Welles",
      avg_imdb_rating: 8.1,
      avg_metascore: 97,
      total_box_office: "$1,067,364",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "5",
      total_nominations: "4",
      prosperityScore: 13.11
    },
    {
      actor_bg: "Крис Еванс",
      actor: "Chris Evans",
      avg_imdb_rating: 6.1,
      avg_metascore: 60,
      total_box_office: "$118,307,188",
      avg_rotten_tomatoes: "74%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "23",
      prosperityScore: 13.07
    },
    {
      actor_bg: "Шарлийн Модест",
      actor: "Charlene Modeste",
      avg_imdb_rating: 6.7,
      avg_metascore: 82,
      total_box_office: "$40,960",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "10",
      prosperityScore: 12.66
    },
    {
      actor_bg: "Дилън О'Брайън",
      actor: "Dylan O'Brien",
      avg_imdb_rating: 6.55,
      avg_metascore: 53.5,
      total_box_office: "$160,460,305",
      avg_rotten_tomatoes: "54%",
      movie_count: 2,
      total_recommendations: 4,
      total_wins: "4",
      total_nominations: "19",
      prosperityScore: 12.05
    },
    {
      actor_bg: "Луис К.К.",
      actor: "Louis C.K.",
      avg_imdb_rating: 6.5,
      avg_metascore: 61,
      total_box_office: "$368,623,860",
      avg_rotten_tomatoes: "71%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "15",
      prosperityScore: 11.87
    },
    {
      actor_bg: "Химеш Пател",
      actor: "Himesh Patel",
      avg_imdb_rating: 6.8,
      avg_metascore: 55,
      total_box_office: "$73,286,650",
      avg_rotten_tomatoes: "63%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "19",
      prosperityScore: 11.61
    },
    {
      actor_bg: "Анджелика Хюстън",
      actor: "Anjelica Huston",
      avg_imdb_rating: 6.8,
      avg_metascore: 78,
      total_box_office: "$10,360,553",
      avg_rotten_tomatoes: "94%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "3",
      total_nominations: "8",
      prosperityScore: 11.48
    },
    {
      actor_bg: "Джош Хътчерсън",
      actor: "Josh Hutcherson",
      avg_imdb_rating: 7.2,
      avg_metascore: 74,
      total_box_office: "$82,272,442",
      avg_rotten_tomatoes: "85%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "6",
      total_nominations: "5",
      prosperityScore: 11.28
    },
    {
      actor_bg: "Рита Морено",
      actor: "Rita Moreno",
      avg_imdb_rating: 7.7,
      avg_metascore: 77,
      total_box_office: "$264,626",
      avg_rotten_tomatoes: "96%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "3",
      total_nominations: "7",
      prosperityScore: 11.22
    },
    {
      actor_bg: "Майкъл Б. Джордан",
      actor: "Michael B. Jordan",
      avg_imdb_rating: 7.1,
      avg_metascore: 66,
      total_box_office: "$115,715,889",
      avg_rotten_tomatoes: "83%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "1",
      total_nominations: "12",
      prosperityScore: 10.72
    },
    {
      actor_bg: "Никълъс Холт",
      actor: "Nicholas Hoult",
      avg_imdb_rating: 6.8,
      avg_metascore: 60,
      total_box_office: "$66,380,662",
      avg_rotten_tomatoes: "81%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "10",
      prosperityScore: 9.88
    },
    {
      actor_bg: "Джим Стърджис",
      actor: "Jim Sturgess",
      avg_imdb_rating: 7.3,
      avg_metascore: 66,
      total_box_office: "$2,701,859",
      avg_rotten_tomatoes: "73%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "5",
      prosperityScore: 9.85
    },
    {
      actor_bg: "Джейк Гиленхал",
      actor: "Jake Gyllenhaal",
      avg_imdb_rating: 5.7,
      avg_metascore: 65,
      total_box_office: "$37,968,963",
      avg_rotten_tomatoes: "72%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "9",
      prosperityScore: 9.4
    },
    {
      actor_bg: "Бен Шварц",
      actor: "Ben Schwartz",
      avg_imdb_rating: 6.5,
      avg_metascore: 47,
      total_box_office: "$148,974,665",
      avg_rotten_tomatoes: "64%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "3",
      total_nominations: "12",
      prosperityScore: 9.36
    },
    {
      actor_bg: "Дензъл Уошингтън",
      actor: "Denzel Washington",
      avg_imdb_rating: 7.2,
      avg_metascore: 57,
      total_box_office: "$101,530,738",
      avg_rotten_tomatoes: "61%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "1",
      total_nominations: "9",
      prosperityScore: 9.06
    },
    {
      actor_bg: "Марк-Андре Льоклер",
      actor: "Marc-André Leclerc",
      avg_imdb_rating: 7.9,
      avg_metascore: 67,
      total_box_office: "$844,743",
      avg_rotten_tomatoes: "93%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "2",
      prosperityScore: 8.68
    },
    {
      actor_bg: "Райън Рейнолдс",
      actor: "Ryan Reynolds",
      avg_imdb_rating: 6.5,
      avg_metascore: 53,
      total_box_office: "$144,174,568",
      avg_rotten_tomatoes: "68%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "10",
      prosperityScore: 8.56
    },
    {
      actor_bg: "Уинона Райдър",
      actor: "Winona Ryder",
      avg_imdb_rating: 7.7,
      avg_metascore: 68,
      total_box_office: "$2,015,810",
      avg_rotten_tomatoes: "77%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "1",
      total_nominations: "0",
      prosperityScore: 7.95
    },
    {
      actor_bg: "Ема Робъртс",
      actor: "Emma Roberts",
      avg_imdb_rating: 6.5,
      avg_metascore: 58,
      total_box_office: "$38,583,626",
      avg_rotten_tomatoes: "67%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "5",
      prosperityScore: 7.78
    },
    {
      actor_bg: "Джесика Рот",
      actor: "Jessica Rothe",
      avg_imdb_rating: 6.6,
      avg_metascore: 58,
      total_box_office: "$55,683,845",
      avg_rotten_tomatoes: "70%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "3",
      prosperityScore: 7.3
    },
    {
      actor_bg: "Джак Блек",
      actor: "Jack Black",
      avg_imdb_rating: 6.1,
      avg_metascore: 57,
      total_box_office: "$68,549,695",
      avg_rotten_tomatoes: "65%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "1",
      total_nominations: "0",
      prosperityScore: 6.69
    },
    {
      actor_bg: "Робърт Дауни Джуниър",
      actor: "Robert Downey Jr.",
      avg_imdb_rating: 5.6,
      avg_metascore: 26,
      total_box_office: "$77,047,065",
      avg_rotten_tomatoes: "15%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "9",
      prosperityScore: 6.65
    },
    {
      actor_bg: "Бенедикт Къмбърбач",
      actor: "Benedict Cumberbatch",
      avg_imdb_rating: 6.5,
      avg_metascore: 55,
      total_box_office: "$5,979,540",
      avg_rotten_tomatoes: "33%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "0",
      total_nominations: "0",
      prosperityScore: 6.18
    },
    {
      actor_bg: "Уенди Маклендън-Кови",
      actor: "Wendi McLendon-Covey",
      avg_imdb_rating: 5.6,
      avg_metascore: 53,
      total_box_office: "$46,700,633",
      avg_rotten_tomatoes: "48%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "0",
      prosperityScore: 5.92
    },
    {
      actor_bg: "Кристина Ричи",
      actor: "Christina Ricci",
      avg_imdb_rating: 5.1,
      avg_metascore: 31,
      total_box_office: "$19,297,522",
      avg_rotten_tomatoes: "31%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "3",
      prosperityScore: 4.4
    }
  ],
  sortedWritersByProsperity: [
    {
      writer_bg: "Пийт Доктър",
      writer: "Pete Docter",
      avg_imdb_rating: 8.13,
      avg_metascore: 88.33333333333333,
      total_box_office: "$1,951,236,087",
      avg_rotten_tomatoes: "97%",
      movie_count: 3,
      total_recommendations: 4,
      total_wins: "915",
      total_nominations: "900",
      prosperityScore: 509.39
    },
    {
      writer_bg: "Грета Гервиг",
      writer: "Greta Gerwig",
      avg_imdb_rating: 7.6,
      avg_metascore: 92,
      total_box_office: "$314,118,974",
      avg_rotten_tomatoes: "97%",
      movie_count: 2,
      total_recommendations: 1,
      total_wins: "404",
      total_nominations: "934",
      prosperityScore: 364.78
    },
    {
      writer_bg: "Ерик Хайсерер",
      writer: "Eric Heisserer",
      avg_imdb_rating: 7.9,
      avg_metascore: 81,
      total_box_office: "$301,638,417",
      avg_rotten_tomatoes: "94%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "213",
      total_nominations: "804",
      prosperityScore: 273.91
    },
    {
      writer_bg: "Гийермо дел Торо",
      writer: "Guillermo del Toro",
      avg_imdb_rating: 7.3,
      avg_metascore: 87,
      total_box_office: "$127,718,870",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "276",
      total_nominations: "700",
      prosperityScore: 267.33
    },
    {
      writer_bg: "Кристофър Нолан",
      writer: "Christopher Nolan",
      avg_imdb_rating: 7.97,
      avg_metascore: 79,
      total_box_office: "$540,832,100",
      avg_rotten_tomatoes: "83%",
      movie_count: 3,
      total_recommendations: 4,
      total_wins: "276",
      total_nominations: "592",
      prosperityScore: 239.62
    },
    {
      writer_bg: "Бонг Джун Хо",
      writer: "Bong Joon Ho",
      avg_imdb_rating: 8.5,
      avg_metascore: 96,
      total_box_office: "$53,369,749",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "316",
      total_nominations: "266",
      prosperityScore: 171.85
    },
    {
      writer_bg: "Деймиън Шазел",
      writer: "Damien Chazelle",
      avg_imdb_rating: 8,
      avg_metascore: 94,
      total_box_office: "$151,101,803",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "242",
      total_nominations: "307",
      prosperityScore: 159.65
    },
    {
      writer_bg: "Джон Спайтс",
      writer: "Jon Spaihts",
      avg_imdb_rating: 8,
      avg_metascore: 74,
      total_box_office: "$108,897,830",
      avg_rotten_tomatoes: "83%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "177",
      total_nominations: "300",
      prosperityScore: 136.39
    },
    {
      writer_bg: "Алфонсо Куарон",
      writer: "Alfonso Cuarón",
      avg_imdb_rating: 7.7,
      avg_metascore: 96,
      total_box_office: "$274,092,705",
      avg_rotten_tomatoes: "96%",
      movie_count: 1,
      total_recommendations: 4,
      total_wins: "240",
      total_nominations: "187",
      prosperityScore: 129.24
    },
    {
      writer_bg: "Клои Джао",
      writer: "Chloé Zhao",
      avg_imdb_rating: 7.3,
      avg_metascore: 91,
      total_box_office: "$3,700,000",
      avg_rotten_tomatoes: "93%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "254",
      total_nominations: "155",
      prosperityScore: 124.87
    },
    {
      writer_bg: "Ерик Рот",
      writer: "Eric Roth",
      avg_imdb_rating: 7.6,
      avg_metascore: 88,
      total_box_office: "$215,333,122",
      avg_rotten_tomatoes: "90%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "99",
      total_nominations: "290",
      prosperityScore: 111.87
    },
    {
      writer_bg: "Лий Айзък Чунг",
      writer: "Lee Isaac Chung",
      avg_imdb_rating: 7.4,
      avg_metascore: 89,
      total_box_office: "$3,110,580",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "122",
      total_nominations: "245",
      prosperityScore: 107.59
    },
    {
      writer_bg: "Сам Мендес",
      writer: "Sam Mendes",
      avg_imdb_rating: 8.2,
      avg_metascore: 78,
      total_box_office: "$159,227,644",
      avg_rotten_tomatoes: "88%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "135",
      total_nominations: "207",
      prosperityScore: 100.97
    },
    {
      writer_bg: "Хамптън Фанчър",
      writer: "Hampton Fancher",
      avg_imdb_rating: 8,
      avg_metascore: 81,
      total_box_office: "$92,071,675",
      avg_rotten_tomatoes: "88%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "100",
      total_nominations: "163",
      prosperityScore: 79.75
    },
    {
      writer_bg: "Лий Хол",
      writer: "Lee Hall",
      avg_imdb_rating: 7.5,
      avg_metascore: 71.5,
      total_box_office: "$118,363,423",
      avg_rotten_tomatoes: "77%",
      movie_count: 2,
      total_recommendations: 2,
      total_wins: "80",
      total_nominations: "160",
      prosperityScore: 71.99
    },
    {
      writer_bg: "Дрю Годард",
      writer: "Drew Goddard",
      avg_imdb_rating: 8,
      avg_metascore: 80,
      total_box_office: "$228,433,663",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 6,
      total_wins: "40",
      total_nominations: "199",
      prosperityScore: 70.66
    },
    {
      writer_bg: "Кристин Лейненс",
      writer: "Christine Leunens",
      avg_imdb_rating: 7.9,
      avg_metascore: 58,
      total_box_office: "$33,370,906",
      avg_rotten_tomatoes: "80%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "52",
      total_nominations: "192",
      prosperityScore: 70.27
    },
    {
      writer_bg: "Кристофър Хамптън",
      writer: "Christopher Hampton",
      avg_imdb_rating: 8.2,
      avg_metascore: 88,
      total_box_office: "$2,122,771",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "37",
      total_nominations: "168",
      prosperityScore: 62.82
    },
    {
      writer_bg: "Джонатан Нолан",
      writer: "Jonathan Nolan",
      avg_imdb_rating: 8.7,
      avg_metascore: 74,
      total_box_office: "$188,020,017",
      avg_rotten_tomatoes: "73%",
      movie_count: 1,
      total_recommendations: 8,
      total_wins: "44",
      total_nominations: "148",
      prosperityScore: 58.56
    },
    {
      writer_bg: "Лий Ънкрич",
      writer: "Lee Unkrich",
      avg_imdb_rating: 8.4,
      avg_metascore: 81,
      total_box_office: "$210,460,015",
      avg_rotten_tomatoes: "97%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "112",
      total_nominations: "42",
      prosperityScore: 53.15
    },
    {
      writer_bg: "Браян Уудс",
      writer: "Bryan Woods",
      avg_imdb_rating: 7.5,
      avg_metascore: 82,
      total_box_office: "$188,024,361",
      avg_rotten_tomatoes: "96%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "38",
      total_nominations: "129",
      prosperityScore: 52.71
    },
    {
      writer_bg: "Скот Нойстадтер",
      writer: "Scott Neustadter",
      avg_imdb_rating: 7.35,
      avg_metascore: 75.5,
      total_box_office: "$263,453,922",
      avg_rotten_tomatoes: "87%",
      movie_count: 2,
      total_recommendations: 1,
      total_wins: "64",
      total_nominations: "100",
      prosperityScore: 52.59
    },
    {
      writer_bg: "Куи Нгуен",
      writer: "Qui Nguyen",
      avg_imdb_rating: 6.5,
      avg_metascore: 69.5,
      total_box_office: "$185,383,990",
      avg_rotten_tomatoes: "83%",
      movie_count: 2,
      total_recommendations: 4,
      total_wins: "26",
      total_nominations: "142",
      prosperityScore: 51
    },
    {
      writer_bg: "Фил Лорд",
      writer: "Phil Lord",
      avg_imdb_rating: 8.4,
      avg_metascore: 87,
      total_box_office: "$190,241,310",
      avg_rotten_tomatoes: "97%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "85",
      total_nominations: "61",
      prosperityScore: 50.4
    },
    {
      writer_bg: "Джеймс Гън",
      writer: "James Gunn",
      avg_imdb_rating: 8,
      avg_metascore: 76,
      total_box_office: "$333,718,600",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "52",
      total_nominations: "103",
      prosperityScore: 49.87
    },
    {
      writer_bg: "Байрън Хауърд",
      writer: "Byron Howard",
      avg_imdb_rating: 8,
      avg_metascore: 78,
      total_box_office: "$341,268,248",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "49",
      total_nominations: "75",
      prosperityScore: 42.17
    },
    {
      writer_bg: "Лий Уонъл",
      writer: "Leigh Whannell",
      avg_imdb_rating: 7.1,
      avg_metascore: 72,
      total_box_office: "$70,410,000",
      avg_rotten_tomatoes: "72%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "43",
      total_nominations: "84",
      prosperityScore: 41.89
    },
    {
      writer_bg: "Андрю Стантън",
      writer: "Andrew Stanton",
      avg_imdb_rating: 8.2,
      avg_metascore: 90,
      total_box_office: "$380,843,261",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "49",
      total_nominations: "63",
      prosperityScore: 40.4
    },
    {
      writer_bg: "Едгар Райт",
      writer: "Edgar Wright",
      avg_imdb_rating: 7.5,
      avg_metascore: 86,
      total_box_office: "$107,825,862",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "43",
      total_nominations: "66",
      prosperityScore: 38.85
    },
    {
      writer_bg: "Джез Бътъруърт",
      writer: "Jez Butterworth",
      avg_imdb_rating: 8.1,
      avg_metascore: 81,
      total_box_office: "$117,624,357",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "26",
      total_nominations: "88",
      prosperityScore: 38.81
    },
    {
      writer_bg: "Джаред Буш",
      writer: "Jared Bush",
      avg_imdb_rating: 7.6,
      avg_metascore: 81,
      total_box_office: "$248,757,044",
      avg_rotten_tomatoes: "95%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "22",
      total_nominations: "90",
      prosperityScore: 38.07
    },
    {
      writer_bg: "Дженифър Лий",
      writer: "Jennifer Lee",
      avg_imdb_rating: 6.8,
      avg_metascore: 64,
      total_box_office: "$477,373,578",
      avg_rotten_tomatoes: "77%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "19",
      total_nominations: "95",
      prosperityScore: 36.64
    },
    {
      writer_bg: "Сара Доса",
      writer: "Sara Dosa",
      avg_imdb_rating: 7.6,
      avg_metascore: 83,
      total_box_office: "$1,120,412",
      avg_rotten_tomatoes: "98%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "34",
      total_nominations: "67",
      prosperityScore: 36.11
    },
    {
      writer_bg: "Патрик Нес",
      writer: "Patrick Ness",
      avg_imdb_rating: 7.4,
      avg_metascore: 76,
      total_box_office: "$3,740,823",
      avg_rotten_tomatoes: "87%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "39",
      total_nominations: "57",
      prosperityScore: 34.38
    },
    {
      writer_bg: "Енрико Казароса",
      writer: "Enrico Casarosa",
      avg_imdb_rating: 7.4,
      avg_metascore: 71,
      total_box_office: "$1,324,302",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "6",
      total_nominations: "83",
      prosperityScore: 30.48
    },
    {
      writer_bg: "Питър Киарели",
      writer: "Peter Chiarelli",
      avg_imdb_rating: 6.9,
      avg_metascore: 74,
      total_box_office: "$174,837,452",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "15",
      total_nominations: "70",
      prosperityScore: 30.19
    },
    {
      writer_bg: "Гари Рос",
      writer: "Gary Ross",
      avg_imdb_rating: 7.2,
      avg_metascore: 68,
      total_box_office: "$408,010,692",
      avg_rotten_tomatoes: "84%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "34",
      total_nominations: "49",
      prosperityScore: 30.09
    },
    {
      writer_bg: "Майкъл Бакол",
      writer: "Michael Bacall",
      avg_imdb_rating: 7.6,
      avg_metascore: 69,
      total_box_office: "$33,391,900",
      avg_rotten_tomatoes: "82%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "18",
      total_nominations: "66",
      prosperityScore: 29.64
    },
    {
      writer_bg: "Джордан Робъртс",
      writer: "Jordan Roberts",
      avg_imdb_rating: 7.8,
      avg_metascore: 74,
      total_box_office: "$222,527,828",
      avg_rotten_tomatoes: "90%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "17",
      total_nominations: "58",
      prosperityScore: 27.89
    },
    {
      writer_bg: "Мика Фицерман-Блу",
      writer: "Micah Fitzerman-Blue",
      avg_imdb_rating: 7.2,
      avg_metascore: 80,
      total_box_office: "$61,704,055",
      avg_rotten_tomatoes: "80%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "10",
      total_nominations: "64",
      prosperityScore: 27.8
    },
    {
      writer_bg: "Киара Алегрия Худес",
      writer: "Quiara Alegría Hudes",
      avg_imdb_rating: 7.3,
      avg_metascore: 84,
      total_box_office: "$29,975,167",
      avg_rotten_tomatoes: "84%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "11",
      total_nominations: "57",
      prosperityScore: 26.77
    },
    {
      writer_bg: "Лесли Диксън",
      writer: "Leslie Dixon",
      avg_imdb_rating: 6.7,
      avg_metascore: 81,
      total_box_office: "$118,946,291",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "21",
      total_nominations: "45",
      prosperityScore: 26.42
    },
    {
      writer_bg: "Дейна Фокс",
      writer: "Dana Fox",
      avg_imdb_rating: 7.3,
      avg_metascore: 59,
      total_box_office: "$86,103,234",
      avg_rotten_tomatoes: "75%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "29",
      total_nominations: "44",
      prosperityScore: 26.41
    },
    {
      writer_bg: "Елинор Катън",
      writer: "Eleanor Catton",
      avg_imdb_rating: 6.7,
      avg_metascore: 71,
      total_box_office: "$10,055,355",
      avg_rotten_tomatoes: "86%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "11",
      total_nominations: "61",
      prosperityScore: 26.41
    },
    {
      writer_bg: "Стивън Чбоски",
      writer: "Stephen Chbosky",
      avg_imdb_rating: 7.9,
      avg_metascore: 67,
      total_box_office: "$17,742,948",
      avg_rotten_tomatoes: "85%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "20",
      total_nominations: "51",
      prosperityScore: 26.33
    },
    {
      writer_bg: "Ан Пийкок",
      writer: "Ann Peacock",
      avg_imdb_rating: 6.9,
      avg_metascore: 75,
      total_box_office: "$291,710,957",
      avg_rotten_tomatoes: "75%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "18",
      total_nominations: "46",
      prosperityScore: 25.19
    },
    {
      writer_bg: "Саймън Кармоди",
      writer: "Simon Carmody",
      avg_imdb_rating: 7.9,
      avg_metascore: 79,
      total_box_office: "$3,237,118",
      avg_rotten_tomatoes: "95%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "16",
      total_nominations: "45",
      prosperityScore: 24.84
    },
    {
      writer_bg: "Зак Пен",
      writer: "Zak Penn",
      avg_imdb_rating: 7.4,
      avg_metascore: 64,
      total_box_office: "$137,715,350",
      avg_rotten_tomatoes: "72%",
      movie_count: 1,
      total_recommendations: 4,
      total_wins: "11",
      total_nominations: "57",
      prosperityScore: 24.77
    },
    {
      writer_bg: "Дан Сканлън",
      writer: "Dan Scanlon",
      avg_imdb_rating: 7.4,
      avg_metascore: 61,
      total_box_office: "$61,555,145",
      avg_rotten_tomatoes: "88%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "4",
      total_nominations: "66",
      prosperityScore: 24.63
    },
    {
      writer_bg: "Джон Красински",
      writer: "John Krasinski",
      avg_imdb_rating: 7.2,
      avg_metascore: 71,
      total_box_office: "$160,072,261",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "14",
      total_nominations: "44",
      prosperityScore: 23.12
    },
    {
      writer_bg: "Хенри Селик",
      writer: "Henry Selick",
      avg_imdb_rating: 7.8,
      avg_metascore: 80,
      total_box_office: "$116,896,576",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "8",
      total_nominations: "46",
      prosperityScore: 22.78
    },
    {
      writer_bg: "Кристофър Маккуори",
      writer: "Christopher McQuarrie",
      avg_imdb_rating: 7.9,
      avg_metascore: 71,
      total_box_office: "$100,206,256",
      avg_rotten_tomatoes: "91%",
      movie_count: 1,
      total_recommendations: 5,
      total_wins: "11",
      total_nominations: "38",
      prosperityScore: 20.79
    },
    {
      writer_bg: "Никол Холофсенър",
      writer: "Nicole Holofcener",
      avg_imdb_rating: 7.3,
      avg_metascore: 67,
      total_box_office: "$10,853,945",
      avg_rotten_tomatoes: "85%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "45",
      prosperityScore: 19.97
    },
    {
      writer_bg: "Джени Бикс",
      writer: "Jenny Bicks",
      avg_imdb_rating: 7.5,
      avg_metascore: 48,
      total_box_office: "$174,340,174",
      avg_rotten_tomatoes: "57%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "17",
      total_nominations: "32",
      prosperityScore: 18.72
    },
    {
      writer_bg: "Кели Фремон Крейг",
      writer: "Kelly Fremon Craig",
      avg_imdb_rating: 7.3,
      avg_metascore: 77,
      total_box_office: "$14,431,633",
      avg_rotten_tomatoes: "94%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "8",
      total_nominations: "29",
      prosperityScore: 18.18
    },
    {
      writer_bg: "Майкъл Грийн",
      writer: "Michael Green",
      avg_imdb_rating: 6.65,
      avg_metascore: 49,
      total_box_office: "$358,659,768",
      avg_rotten_tomatoes: "63%",
      movie_count: 2,
      total_recommendations: 2,
      total_wins: "12",
      total_nominations: "34",
      prosperityScore: 17.76
    },
    {
      writer_bg: "Чад Хейс",
      writer: "Chad Hayes",
      avg_imdb_rating: 7.5,
      avg_metascore: 68,
      total_box_office: "$137,446,368",
      avg_rotten_tomatoes: "86%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "15",
      total_nominations: "22",
      prosperityScore: 17.65
    },
    {
      writer_bg: "Джонатан Айбел",
      writer: "Jonathan Aibel",
      avg_imdb_rating: 6.4,
      avg_metascore: 55,
      total_box_office: "$154,174,089",
      avg_rotten_tomatoes: "76%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "37",
      prosperityScore: 16.68
    },
    {
      writer_bg: "Арън Блейби",
      writer: "Aaron Blabey",
      avg_imdb_rating: 6.8,
      avg_metascore: 64,
      total_box_office: "$97,459,240",
      avg_rotten_tomatoes: "88%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "30",
      prosperityScore: 15.28
    },
    {
      writer_bg: "Мери Нортън",
      writer: "Mary Norton",
      avg_imdb_rating: 7.6,
      avg_metascore: 80,
      total_box_office: "$19,587,032",
      avg_rotten_tomatoes: "94%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "12",
      total_nominations: "6",
      prosperityScore: 13.96
    },
    {
      writer_bg: "Греъм Грийн",
      writer: "Graham Greene",
      avg_imdb_rating: 8.1,
      avg_metascore: 97,
      total_box_office: "$1,067,364",
      avg_rotten_tomatoes: "99%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "5",
      total_nominations: "4",
      prosperityScore: 13.11
    },
    {
      writer_bg: "Джонатан Голдщайн",
      writer: "Jonathan Goldstein",
      avg_imdb_rating: 7.4,
      avg_metascore: 73,
      total_box_office: "$334,952,829",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "8",
      total_nominations: "10",
      prosperityScore: 13.06
    },
    {
      writer_bg: "Ангъс Маклейн",
      writer: "Angus MacLane",
      avg_imdb_rating: 6.1,
      avg_metascore: 60,
      total_box_office: "$118,307,188",
      avg_rotten_tomatoes: "74%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "23",
      prosperityScore: 13.04
    },
    {
      writer_bg: "Тоби Хаслет",
      writer: "Tobi Haslett",
      avg_imdb_rating: 6.7,
      avg_metascore: 82,
      total_box_office: "$40,960",
      avg_rotten_tomatoes: "92%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "10",
      prosperityScore: 12.66
    },
    {
      writer_bg: "Крис Маккена",
      writer: "Chris McKenna",
      avg_imdb_rating: 7,
      avg_metascore: 58,
      total_box_office: "$404,540,171",
      avg_rotten_tomatoes: "76%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "5",
      total_nominations: "15",
      prosperityScore: 11.86
    },
    {
      writer_bg: "Стивън Мърчант",
      writer: "Stephen Merchant",
      avg_imdb_rating: 7,
      avg_metascore: 68,
      total_box_office: "$22,958,886",
      avg_rotten_tomatoes: "93%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "10",
      total_nominations: "5",
      prosperityScore: 11.84
    },
    {
      writer_bg: "Синко Пол",
      writer: "Cinco Paul",
      avg_imdb_rating: 6.5,
      avg_metascore: 61,
      total_box_office: "$368,623,860",
      avg_rotten_tomatoes: "71%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "15",
      prosperityScore: 11.8
    },
    {
      writer_bg: "Ричард Къртис",
      writer: "Richard Curtis",
      avg_imdb_rating: 6.8,
      avg_metascore: 55,
      total_box_office: "$73,286,650",
      avg_rotten_tomatoes: "63%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "19",
      prosperityScore: 11.6
    },
    {
      writer_bg: "Роалд Дал",
      writer: "Roald Dahl",
      avg_imdb_rating: 6.8,
      avg_metascore: 78,
      total_box_office: "$10,360,553",
      avg_rotten_tomatoes: "94%",
      movie_count: 1,
      total_recommendations: 2,
      total_wins: "3",
      total_nominations: "8",
      prosperityScore: 11.47
    },
    {
      writer_bg: "Джеф Стокуел",
      writer: "Jeff Stockwell",
      avg_imdb_rating: 7.2,
      avg_metascore: 74,
      total_box_office: "$82,272,442",
      avg_rotten_tomatoes: "85%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "6",
      total_nominations: "5",
      prosperityScore: 11.26
    },
    {
      writer_bg: "Джуел Тейлър",
      writer: "Juel Taylor",
      avg_imdb_rating: 7.1,
      avg_metascore: 66,
      total_box_office: "$115,715,889",
      avg_rotten_tomatoes: "83%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "1",
      total_nominations: "12",
      prosperityScore: 10.7
    },
    {
      writer_bg: "Ноа Опенхайм",
      writer: "Noah Oppenheim",
      avg_imdb_rating: 6.8,
      avg_metascore: 57,
      total_box_office: "$102,427,862",
      avg_rotten_tomatoes: "65%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "4",
      total_nominations: "12",
      prosperityScore: 10.65
    },
    {
      writer_bg: "Евън Догърти",
      writer: "Evan Daugherty",
      avg_imdb_rating: 6.6,
      avg_metascore: 48,
      total_box_office: "$150,947,895",
      avg_rotten_tomatoes: "41%",
      movie_count: 1,
      total_recommendations: 3,
      total_wins: "7",
      total_nominations: "11",
      prosperityScore: 10.36
    },
    {
      writer_bg: "Айзък Марион",
      writer: "Isaac Marion",
      avg_imdb_rating: 6.8,
      avg_metascore: 60,
      total_box_office: "$66,380,662",
      avg_rotten_tomatoes: "81%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "10",
      prosperityScore: 9.87
    },
    {
      writer_bg: "Питър Уиър",
      writer: "Peter Weir",
      avg_imdb_rating: 7.3,
      avg_metascore: 66,
      total_box_office: "$2,701,859",
      avg_rotten_tomatoes: "73%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "5",
      prosperityScore: 9.85
    },
    {
      writer_bg: "Пат Кейси",
      writer: "Pat Casey",
      avg_imdb_rating: 6.5,
      avg_metascore: 47,
      total_box_office: "$148,974,665",
      avg_rotten_tomatoes: "64%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "3",
      total_nominations: "12",
      prosperityScore: 9.33
    },
    {
      writer_bg: "Ричард Венк",
      writer: "Richard Wenk",
      avg_imdb_rating: 7.2,
      avg_metascore: 57,
      total_box_office: "$101,530,738",
      avg_rotten_tomatoes: "61%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "1",
      total_nominations: "9",
      prosperityScore: 9.04
    },
    {
      writer_bg: "Дан Ернандес",
      writer: "Dan Hernandez",
      avg_imdb_rating: 6.5,
      avg_metascore: 53,
      total_box_office: "$144,174,568",
      avg_rotten_tomatoes: "68%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "10",
      prosperityScore: 8.53
    },
    {
      writer_bg: "Крейг Титли",
      writer: "Craig Titley",
      avg_imdb_rating: 5.9,
      avg_metascore: 47,
      total_box_office: "$88,768,303",
      avg_rotten_tomatoes: "49%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "11",
      prosperityScore: 8.1
    },
    {
      writer_bg: "Джим Джармуш",
      writer: "Jim Jarmusch",
      avg_imdb_rating: 7.7,
      avg_metascore: 68,
      total_box_office: "$2,015,810",
      avg_rotten_tomatoes: "77%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "1",
      total_nominations: "0",
      prosperityScore: 7.95
    },
    {
      writer_bg: "Джесика Шарзър",
      writer: "Jessica Sharzer",
      avg_imdb_rating: 6.5,
      avg_metascore: 58,
      total_box_office: "$38,583,626",
      avg_rotten_tomatoes: "67%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "5",
      prosperityScore: 7.77
    },
    {
      writer_bg: "Т.С. Ноулин",
      writer: "T.S. Nowlin",
      avg_imdb_rating: 6.3,
      avg_metascore: 50,
      total_box_office: "$58,032,443",
      avg_rotten_tomatoes: "42%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "7",
      prosperityScore: 7.43
    },
    {
      writer_bg: "Скот Лобдел",
      writer: "Scott Lobdell",
      avg_imdb_rating: 6.6,
      avg_metascore: 58,
      total_box_office: "$55,683,845",
      avg_rotten_tomatoes: "70%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "3",
      prosperityScore: 7.28
    },
    {
      writer_bg: "Джон Белърс",
      writer: "John Bellairs",
      avg_imdb_rating: 6.1,
      avg_metascore: 57,
      total_box_office: "$68,549,695",
      avg_rotten_tomatoes: "65%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "1",
      total_nominations: "0",
      prosperityScore: 6.68
    },
    {
      writer_bg: "Стивън Гаган",
      writer: "Stephen Gaghan",
      avg_imdb_rating: 5.6,
      avg_metascore: 26,
      total_box_office: "$77,047,065",
      avg_rotten_tomatoes: "15%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "9",
      prosperityScore: 6.63
    },
    {
      writer_bg: "Майкъл Митник",
      writer: "Michael Mitnick",
      avg_imdb_rating: 6.5,
      avg_metascore: 55,
      total_box_office: "$5,979,540",
      avg_rotten_tomatoes: "33%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "0",
      prosperityScore: 6.18
    },
    {
      writer_bg: "Роб Либер",
      writer: "Rob Lieber",
      avg_imdb_rating: 5.6,
      avg_metascore: 53,
      total_box_office: "$46,700,633",
      avg_rotten_tomatoes: "48%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "0",
      prosperityScore: 5.91
    },
    {
      writer_bg: "Кевин Уилямсън",
      writer: "Kevin Williamson",
      avg_imdb_rating: 5.1,
      avg_metascore: 31,
      total_box_office: "$19,297,522",
      avg_rotten_tomatoes: "31%",
      movie_count: 1,
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "3",
      prosperityScore: 4.39
    }
  ],
  sortedMoviesByProsperity: [
    {
      imdbID: "tt6751668",
      title_en: "Parasite",
      title_bg: "Паразит",
      type: "movie",
      imdbRating: "8.5",
      metascore: "96",
      total_box_office: "$53,369,749",
      rotten_tomatoes: "99%",
      total_recommendations: 1,
      total_wins: "316",
      total_nominations: "266",
      genre_en: "Drama, Thriller",
      genre_bg: "Драма, Трилър",
      prosperityScore: 171.77
    },
    {
      imdbID: "tt3783958",
      title_en: "La La Land",
      title_bg: "Ла Ла Ленд",
      type: "movie",
      imdbRating: "8.0",
      metascore: "94",
      total_box_office: "$151,101,803",
      rotten_tomatoes: "91%",
      total_recommendations: 2,
      total_wins: "242",
      total_nominations: "307",
      genre_en: "Comedy, Drama, Music",
      genre_bg: "Комедия, Драма, Музика",
      prosperityScore: 159.6
    },
    {
      imdbID: "tt5580390",
      title_en: "The Shape of Water",
      title_bg: "Формата на водата",
      type: "movie",
      imdbRating: "7.3",
      metascore: "87",
      total_box_office: "$63,859,435",
      rotten_tomatoes: "92%",
      total_recommendations: 1,
      total_wins: "138",
      total_nominations: "350",
      genre_en: "Drama, Fantasy, Romance",
      genre_bg: "Драма, Фентъзи, Романтичен",
      prosperityScore: 138.35
    },
    {
      imdbID: "tt1160419",
      title_en: "Dune: Part One",
      title_bg: "Дюн (2021)",
      type: "movie",
      imdbRating: "8.0",
      metascore: "74",
      total_box_office: "$108,897,830",
      rotten_tomatoes: "83%",
      total_recommendations: 3,
      total_wins: "177",
      total_nominations: "300",
      genre_en: "Action, Adventure, Drama",
      genre_bg: "Екшън, Приключенски, Драма",
      prosperityScore: 136.33
    },
    {
      imdbID: "tt1454468",
      title_en: "Gravity",
      title_bg: "Гравитация",
      type: "movie",
      imdbRating: "7.7",
      metascore: "96",
      total_box_office: "$274,092,705",
      rotten_tomatoes: "96%",
      total_recommendations: 4,
      total_wins: "240",
      total_nominations: "187",
      genre_en: "Drama, Sci-Fi, Thriller",
      genre_bg: "Драма, Научна фантастика, Трилър",
      prosperityScore: 129.21
    },
    {
      imdbID: "tt9770150",
      title_en: "Nomadland",
      title_bg: "Земя на номади",
      type: "movie",
      imdbRating: "7.3",
      metascore: "91",
      total_box_office: "$3,700,000",
      rotten_tomatoes: "93%",
      total_recommendations: 1,
      total_wins: "254",
      total_nominations: "155",
      genre_en: "Drama",
      genre_bg: "Драма",
      prosperityScore: 124.78
    },
    {
      imdbID: "tt1517451",
      title_en: "A Star Is Born",
      title_bg: "Роди се звезда",
      type: "movie",
      imdbRating: "7.6",
      metascore: "88",
      total_box_office: "$215,333,122",
      rotten_tomatoes: "90%",
      total_recommendations: 1,
      total_wins: "99",
      total_nominations: "290",
      genre_en: "Drama, Music, Romance",
      genre_bg: "Драма, Музика, Романтичен",
      prosperityScore: 111.83
    },
    {
      imdbID: "tt1375666",
      title_en: "Inception",
      title_bg: "Генезис",
      type: "movie",
      imdbRating: "8.8",
      metascore: "74",
      total_box_office: "$292,587,330",
      rotten_tomatoes: "87%",
      total_recommendations: 2,
      total_wins: "159",
      total_nominations: "220",
      genre_en: "Action, Adventure, Sci-Fi",
      genre_bg: "Екшън, Приключенски, Научна фантастика",
      prosperityScore: 111.07
    },
    {
      imdbID: "tt10633456",
      title_en: "Minari",
      title_bg: "Минири",
      type: "movie",
      imdbRating: "7.4",
      metascore: "89",
      total_box_office: "$3,110,580",
      rotten_tomatoes: "98%",
      total_recommendations: 1,
      total_wins: "122",
      total_nominations: "245",
      genre_en: "Drama",
      genre_bg: "Драма",
      prosperityScore: 107.49
    },
    {
      imdbID: "tt4925292",
      title_en: "Lady Bird",
      title_bg: "Лейди Бърд",
      type: "movie",
      imdbRating: "7.4",
      metascore: "93",
      total_box_office: "$48,958,273",
      rotten_tomatoes: "99%",
      total_recommendations: 1,
      total_wins: "124",
      total_nominations: "228",
      genre_en: "Comedy, Drama",
      genre_bg: "Комедия, Драма",
      prosperityScore: 104.26
    },
    {
      imdbID: "tt8579674",
      title_en: "1917",
      title_bg: "1917",
      type: "movie",
      imdbRating: "8.2",
      metascore: "78",
      total_box_office: "$159,227,644",
      rotten_tomatoes: "88%",
      total_recommendations: 1,
      total_wins: "135",
      total_nominations: "207",
      genre_en: "Action, Drama, History",
      genre_bg: "Екшън, Драма, Исторически",
      prosperityScore: 100.92
    },
    {
      imdbID: "tt2543164",
      title_en: "Arrival",
      title_bg: "Първи контакт",
      type: "movie",
      imdbRating: "7.9",
      metascore: "81",
      total_box_office: "$100,546,139",
      rotten_tomatoes: "94%",
      total_recommendations: 3,
      total_wins: "71",
      total_nominations: "268",
      genre_en: "Drama, Mystery, Sci-Fi",
      genre_bg: "Драма, Мистерия, Научна фантастика",
      prosperityScore: 97.22
    },
    {
      imdbID: "tt3281548",
      title_en: "Little Women",
      title_bg: "Малки жени",
      type: "movie",
      imdbRating: "7.8",
      metascore: "91",
      total_box_office: "$108,101,214",
      rotten_tomatoes: "95%",
      total_recommendations: 1,
      total_wins: "78",
      total_nominations: "239",
      genre_en: "Drama, Romance",
      genre_bg: "Драма, Романтичен",
      prosperityScore: 93.06
    },
    {
      imdbID: "tt5013056",
      title_en: "Dunkirk",
      title_bg: "Дюнкерк",
      type: "movie",
      imdbRating: "7.8",
      metascore: "94",
      total_box_office: "$189,740,665",
      rotten_tomatoes: "92%",
      total_recommendations: 1,
      total_wins: "68",
      total_nominations: "236",
      genre_en: "Action, Drama, History",
      genre_bg: "Екшън, Драма, Исторически",
      prosperityScore: 89.64
    },
    {
      imdbID: "tt1856101",
      title_en: "Blade Runner 2049",
      title_bg: "Блейд Рънър 2049",
      type: "movie",
      imdbRating: "8.0",
      metascore: "81",
      total_box_office: "$92,071,675",
      rotten_tomatoes: "88%",
      total_recommendations: 2,
      total_wins: "100",
      total_nominations: "163",
      genre_en: "Action, Drama, Mystery",
      genre_bg: "Екшън, Драма, Мистерия",
      prosperityScore: 79.68
    },
    {
      imdbID: "tt3659388",
      title_en: "The Martian",
      title_bg: "Марсианецът",
      type: "movie",
      imdbRating: "8.0",
      metascore: "80",
      total_box_office: "$228,433,663",
      rotten_tomatoes: "91%",
      total_recommendations: 6,
      total_wins: "40",
      total_nominations: "199",
      genre_en: "Adventure, Drama, Sci-Fi",
      genre_bg: "Приключенски, Драма, Научна фантастика",
      prosperityScore: 70.62
    },
    {
      imdbID: "tt2584384",
      title_en: "Jojo Rabbit",
      title_bg: "Джоджо Заека",
      type: "movie",
      imdbRating: "7.9",
      metascore: "58",
      total_box_office: "$33,370,906",
      rotten_tomatoes: "80%",
      total_recommendations: 1,
      total_wins: "52",
      total_nominations: "192",
      genre_en: "Comedy, Drama, War",
      genre_bg: "Комедия, Драма, Военен",
      prosperityScore: 70.2
    },
    {
      imdbID: "tt2948372",
      title_en: "Soul",
      title_bg: "За душата",
      type: "movie",
      imdbRating: "8.0",
      metascore: "83",
      total_box_office: "$946,154",
      rotten_tomatoes: "95%",
      total_recommendations: 3,
      total_wins: "125",
      total_nominations: "94",
      genre_en: "Animation, Adventure, Comedy",
      genre_bg: "Анимация, Приключенски, Комедия",
      prosperityScore: 70.1
    },
    {
      imdbID: "tt2096673",
      title_en: "Inside Out",
      title_bg: "Отвътре навън",
      type: "movie",
      imdbRating: "8.1",
      metascore: "94",
      total_box_office: "$356,461,711",
      rotten_tomatoes: "98%",
      total_recommendations: 4,
      total_wins: "99",
      total_nominations: "118",
      genre_en: "Animation, Adventure, Comedy",
      genre_bg: "Анимация, Приключенски, Комедия",
      prosperityScore: 69.52
    },
    {
      imdbID: "tt10272386",
      title_en: "The Father",
      title_bg: "Бащата",
      type: "movie",
      imdbRating: "8.2",
      metascore: "88",
      total_box_office: "$2,122,771",
      rotten_tomatoes: "98%",
      total_recommendations: 2,
      total_wins: "37",
      total_nominations: "168",
      genre_en: "Drama, Mystery",
      genre_bg: "Драма, Мистерия",
      prosperityScore: 62.72
    },
    {
      imdbID: "tt0816692",
      title_en: "Interstellar",
      title_bg: "Интерстелар",
      type: "movie",
      imdbRating: "8.7",
      metascore: "74",
      total_box_office: "$188,020,017",
      rotten_tomatoes: "73%",
      total_recommendations: 8,
      total_wins: "44",
      total_nominations: "148",
      genre_en: "Adventure, Drama, Sci-Fi",
      genre_bg: "Приключенски, Драма, Научна фантастика",
      prosperityScore: 58.53
    },
    {
      imdbID: "tt6723592",
      title_en: "Tenet",
      title_bg: "Тенет",
      type: "movie",
      imdbRating: "7.3",
      metascore: "69",
      total_box_office: "$58,504,105",
      rotten_tomatoes: "70%",
      total_recommendations: 1,
      total_wins: "49",
      total_nominations: "136",
      genre_en: "Action, Sci-Fi, Thriller",
      genre_bg: "Екшън, Научна фантастика, Трилър",
      prosperityScore: 56.35
    },
    {
      imdbID: "tt1049413",
      title_en: "Up",
      title_bg: "В небето",
      type: "movie",
      imdbRating: "8.3",
      metascore: "88",
      total_box_office: "$293,004,164",
      rotten_tomatoes: "98%",
      total_recommendations: 1,
      total_wins: "81",
      total_nominations: "88",
      genre_en: "Animation, Adventure, Comedy",
      genre_bg: "Анимация, Приключенски, Комедия",
      prosperityScore: 56.02
    },
    {
      imdbID: "tt2380307",
      title_en: "Coco",
      title_bg: "Тайната на Коко",
      type: "movie",
      imdbRating: "8.4",
      metascore: "81",
      total_box_office: "$210,460,015",
      rotten_tomatoes: "97%",
      total_recommendations: 3,
      total_wins: "112",
      total_nominations: "42",
      genre_en: "Animation, Adventure, Drama",
      genre_bg: "Анимация, Приключенски, Драма",
      prosperityScore: 53.11
    },
    {
      imdbID: "tt6644200",
      title_en: "A Quiet Place",
      title_bg: "Нито звук",
      type: "movie",
      imdbRating: "7.5",
      metascore: "82",
      total_box_office: "$188,024,361",
      rotten_tomatoes: "96%",
      total_recommendations: 2,
      total_wins: "38",
      total_nominations: "129",
      genre_en: "Drama, Horror, Sci-Fi",
      genre_bg: "Драма, Ужаси, Научна фантастика",
      prosperityScore: 52.66
    },
    {
      imdbID: "tt4633694",
      title_en: "Spider-Man: Into the Spider-Verse",
      title_bg: "Спайдър-мен: В Спайди-вселената",
      type: "movie",
      imdbRating: "8.4",
      metascore: "87",
      total_box_office: "$190,241,310",
      rotten_tomatoes: "97%",
      total_recommendations: 2,
      total_wins: "85",
      total_nominations: "61",
      genre_en: "Animation, Action, Adventure",
      genre_bg: "Анимация, Екшън, Приключенски",
      prosperityScore: 50.35
    },
    {
      imdbID: "tt2015381",
      title_en: "Guardians of the Galaxy",
      title_bg: "Пазителите на галактиката",
      type: "movie",
      imdbRating: "8.0",
      metascore: "76",
      total_box_office: "$333,718,600",
      rotten_tomatoes: "92%",
      total_recommendations: 2,
      total_wins: "52",
      total_nominations: "103",
      genre_en: "Action, Adventure, Comedy",
      genre_bg: "Екшън, Приключенски, Комедия",
      prosperityScore: 49.85
    },
    {
      imdbID: "tt11422728",
      title_en:
        "Summer of Soul (...Or, When the Revolution Could Not Be Televised)",
      title_bg:
        "Лятото на душата (...Или когато революцията не можеше да бъде излъчена)",
      type: "movie",
      imdbRating: "8.0",
      metascore: "96",
      total_box_office: "$2,320,649",
      rotten_tomatoes: "99%",
      total_recommendations: 1,
      total_wins: "73",
      total_nominations: "43",
      genre_en: "Documentary, History, Music",
      genre_bg: "Документален, Исторически, Музика",
      prosperityScore: 43.05
    },
    {
      imdbID: "tt0249462",
      title_en: "Billy Elliot",
      title_bg: "Били Елиът",
      type: "movie",
      imdbRating: "7.7",
      metascore: "74",
      total_box_office: "$21,995,263",
      rotten_tomatoes: "85%",
      total_recommendations: 1,
      total_wins: "55",
      total_nominations: "71",
      genre_en: "Drama, Music",
      genre_bg: "Драма, Музика",
      prosperityScore: 42.43
    },
    {
      imdbID: "tt2948356",
      title_en: "Zootopia",
      title_bg: "Зоотрополис",
      type: "movie",
      imdbRating: "8.0",
      metascore: "78",
      total_box_office: "$341,268,248",
      rotten_tomatoes: "98%",
      total_recommendations: 3,
      total_wins: "49",
      total_nominations: "75",
      genre_en: "Animation, Action, Adventure",
      genre_bg: "Анимация, Екшън, Приключенски",
      prosperityScore: 42.16
    },
    {
      imdbID: "tt1051906",
      title_en: "The Invisible Man",
      title_bg: "Невидимият",
      type: "movie",
      imdbRating: "7.1",
      metascore: "72",
      total_box_office: "$70,410,000",
      rotten_tomatoes: "72/100",
      total_recommendations: 1,
      total_wins: "43",
      total_nominations: "84",
      genre_en: "Drama, Horror, Mystery",
      genre_bg: "Драма, Ужаси, Мистерия",
      prosperityScore: 41.83
    },
    {
      imdbID: "tt0266543",
      title_en: "Finding Nemo",
      title_bg: "Търсенето на Немо",
      type: "movie",
      imdbRating: "8.2",
      metascore: "90",
      total_box_office: "$380,843,261",
      rotten_tomatoes: "99%",
      total_recommendations: 1,
      total_wins: "49",
      total_nominations: "63",
      genre_en: "Animation, Adventure, Comedy",
      genre_bg: "Анимация, Приключенски, Комедия",
      prosperityScore: 40.39
    },
    {
      imdbID: "tt3890160",
      title_en: "Baby Driver",
      title_bg: "Зад волана",
      type: "movie",
      imdbRating: "7.5",
      metascore: "86",
      total_box_office: "$107,825,862",
      rotten_tomatoes: "92%",
      total_recommendations: 2,
      total_wins: "43",
      total_nominations: "66",
      genre_en: "Action, Crime, Drama",
      genre_bg: "Екшън, Криминален, Драма",
      prosperityScore: 38.78
    },
    {
      imdbID: "tt1950186",
      title_en: "Ford v Ferrari",
      title_bg: "Пълно ускорение",
      type: "movie",
      imdbRating: "8.1",
      metascore: "81",
      total_box_office: "$117,624,357",
      rotten_tomatoes: "92%",
      total_recommendations: 1,
      total_wins: "26",
      total_nominations: "88",
      genre_en: "Action, Biography, Drama",
      genre_bg: "Екшън, Биография, Драма",
      prosperityScore: 38.75
    },
    {
      imdbID: "tt8760684",
      title_en: "Apollo 11",
      title_bg: "Аполон 11",
      type: "movie",
      imdbRating: "8.1",
      metascore: "88",
      total_box_office: "$9,039,891",
      rotten_tomatoes: "99%",
      total_recommendations: 1,
      total_wins: "59",
      total_nominations: "45",
      genre_en: "Documentary, History",
      genre_bg: "Документален, Исторически",
      prosperityScore: 38.56
    },
    {
      imdbID: "tt3521164",
      title_en: "Moana",
      title_bg: "Моана",
      type: "movie",
      imdbRating: "7.6",
      metascore: "81",
      total_box_office: "$248,757,044",
      rotten_tomatoes: "95%",
      total_recommendations: 1,
      total_wins: "22",
      total_nominations: "90",
      genre_en: "Animation, Adventure, Comedy",
      genre_bg: "Анимация, Приключенски, Комедия",
      prosperityScore: 38.04
    },
    {
      imdbID: "tt2066051",
      title_en: "Rocketman",
      title_bg: "Рокетмен",
      type: "movie",
      imdbRating: "7.3",
      metascore: "69",
      total_box_office: "$96,368,160",
      rotten_tomatoes: "69/100",
      total_recommendations: 1,
      total_wins: "25",
      total_nominations: "89",
      genre_en: "Biography, Drama, Music",
      genre_bg: "Биография, Драма, Музика",
      prosperityScore: 37.41
    },
    {
      imdbID: "tt4520988",
      title_en: "Frozen II",
      title_bg: "Замръзналото кралство II",
      type: "movie",
      imdbRating: "6.8",
      metascore: "64",
      total_box_office: "$477,373,578",
      rotten_tomatoes: "77%",
      total_recommendations: 1,
      total_wins: "19",
      total_nominations: "95",
      genre_en: "Animation, Adventure, Comedy",
      genre_bg: "Анимация, Приключенски, Комедия",
      prosperityScore: 36.68
    },
    {
      imdbID: "tt16227014",
      title_en: "Fire of Love",
      title_bg: "Огън на любовта",
      type: "movie",
      imdbRating: "7.6",
      metascore: "83",
      total_box_office: "$1,120,412",
      rotten_tomatoes: "98%",
      total_recommendations: 1,
      total_wins: "34",
      total_nominations: "67",
      genre_en: "Documentary, Biography",
      genre_bg: "Документален, Биография",
      prosperityScore: 36.01
    },
    {
      imdbID: "tt3416532",
      title_en: "A Monster Calls",
      title_bg: "Чудовището на грозния",
      type: "movie",
      imdbRating: "7.4",
      metascore: "76",
      total_box_office: "$3,740,823",
      rotten_tomatoes: "87%",
      total_recommendations: 1,
      total_wins: "39",
      total_nominations: "57",
      genre_en: "Adventure, Drama, Family",
      genre_bg: "Приключенски, Драма, Семейни",
      prosperityScore: 34.29
    },
    {
      imdbID: "tt16378164",
      title_en: "The Territory",
      title_bg: "Територията",
      type: "movie",
      imdbRating: "7.5",
      metascore: "83",
      total_box_office: "$69,316",
      rotten_tomatoes: "97%",
      total_recommendations: 1,
      total_wins: "45",
      total_nominations: "43",
      genre_en: "Documentary",
      genre_bg: "Документален",
      prosperityScore: 33.3
    },
    {
      imdbID: "tt7775622",
      title_en: "Free Solo",
      title_bg: "Свободно соло",
      type: "movie",
      imdbRating: "8.1",
      metascore: "83",
      total_box_office: "$17,541,090",
      rotten_tomatoes: "98%",
      total_recommendations: 1,
      total_wins: "31",
      total_nominations: "54",
      genre_en: "Documentary, Adventure, Sport",
      genre_bg: "Документален, Приключенски, Спортен",
      prosperityScore: 31.92
    },
    {
      imdbID: "tt12801262",
      title_en: "Luca",
      title_bg: "Лука",
      type: "movie",
      imdbRating: "7.4",
      metascore: "71",
      total_box_office: "$1,324,302",
      rotten_tomatoes: "91%",
      total_recommendations: 1,
      total_wins: "6",
      total_nominations: "83",
      genre_en: "Animation, Adventure, Comedy",
      genre_bg: "Анимация, Приключенски, Комедия",
      prosperityScore: 30.39
    },
    {
      imdbID: "tt3104988",
      title_en: "Crazy Rich Asians",
      title_bg: "Луди богаташи",
      type: "movie",
      imdbRating: "6.9",
      metascore: "74",
      total_box_office: "$174,837,452",
      rotten_tomatoes: "91%",
      total_recommendations: 1,
      total_wins: "15",
      total_nominations: "70",
      genre_en: "Comedy, Drama, Romance",
      genre_bg: "Комедия, Драма, Романтичен",
      prosperityScore: 30.14
    },
    {
      imdbID: "tt1392170",
      title_en: "The Hunger Games",
      title_bg: "Игрите на глада",
      type: "movie",
      imdbRating: "7.2",
      metascore: "68",
      total_box_office: "$408,010,692",
      rotten_tomatoes: "84%",
      total_recommendations: 1,
      total_wins: "34",
      total_nominations: "49",
      genre_en: "Action, Adventure, Sci-Fi",
      genre_bg: "Екшън, Приключенски, Научна фантастика",
      prosperityScore: 30.1
    },
    {
      imdbID: "tt0446029",
      title_en: "Scott Pilgrim vs. The World",
      title_bg: "Скот Пилгрим срещу света",
      type: "movie",
      imdbRating: "7.6",
      metascore: "69",
      total_box_office: "$33,391,900",
      rotten_tomatoes: "82%",
      total_recommendations: 2,
      total_wins: "18",
      total_nominations: "66",
      genre_en: "Action, Comedy, Fantasy",
      genre_bg: "Екшън, Комедия, Фентъзи",
      prosperityScore: 29.57
    },
    {
      imdbID: "tt2245084",
      title_en: "Big Hero 6",
      title_bg: "Героичната шесторка",
      type: "movie",
      imdbRating: "7.8",
      metascore: "74",
      total_box_office: "$222,527,828",
      rotten_tomatoes: "90%",
      total_recommendations: 1,
      total_wins: "17",
      total_nominations: "58",
      genre_en: "Animation, Action, Adventure",
      genre_bg: "Анимация, Екшън, Приключенски",
      prosperityScore: 27.85
    },
    {
      imdbID: "tt3224458",
      title_en: "A Beautiful Day in the Neighborhood",
      title_bg: "Хубав ден в квартала",
      type: "movie",
      imdbRating: "7.2",
      metascore: "80",
      total_box_office: "$61,704,055",
      rotten_tomatoes: "80/100",
      total_recommendations: 1,
      total_wins: "10",
      total_nominations: "64",
      genre_en: "Biography, Drama, Family",
      genre_bg: "Биография, Драма, Семейни",
      prosperityScore: 27.74
    },
    {
      imdbID: "tt5109280",
      title_en: "Raya and the Last Dragon",
      title_bg: "Рая и последният дракон",
      type: "movie",
      imdbRating: "7.3",
      metascore: "74",
      total_box_office: "$54,723,032",
      rotten_tomatoes: "93%",
      total_recommendations: 4,
      total_wins: "13",
      total_nominations: "62",
      genre_en: "Animation, Action, Adventure",
      genre_bg: "Анимация, Екшън, Приключенски",
      prosperityScore: 27.55
    },
    {
      imdbID: "tt16377862",
      title_en: "All That Breathes",
      title_bg: "Всичко, което диша",
      type: "movie",
      imdbRating: "7.0",
      metascore: "87",
      total_box_office: "$101,283",
      rotten_tomatoes: "99%",
      total_recommendations: 1,
      total_wins: "24",
      total_nominations: "43",
      genre_en: "Documentary",
      genre_bg: "Документален",
      prosperityScore: 27.35
    },
    {
      imdbID: "tt1321510",
      title_en: "In the Heights",
      title_bg: "На високо",
      type: "movie",
      imdbRating: "7.3",
      metascore: "84",
      total_box_office: "$29,975,167",
      rotten_tomatoes: "84/100",
      total_recommendations: 1,
      total_wins: "11",
      total_nominations: "57",
      genre_en: "Drama, Musical, Romance",
      genre_bg: "Драма, Мюзикъл, Романтичен",
      prosperityScore: 26.69
    },
    {
      imdbID: "tt3228774",
      title_en: "Cruella",
      title_bg: "Круела",
      type: "movie",
      imdbRating: "7.3",
      metascore: "59",
      total_box_office: "$86,103,234",
      rotten_tomatoes: "75%",
      total_recommendations: 1,
      total_wins: "29",
      total_nominations: "44",
      genre_en: "Adventure, Comedy, Crime",
      genre_bg: "Приключенски, Комедия, Криминален",
      prosperityScore: 26.36
    },
    {
      imdbID: "tt0427327",
      title_en: "Hairspray",
      title_bg: "Лак за коса",
      type: "movie",
      imdbRating: "6.7",
      metascore: "81",
      total_box_office: "$118,946,291",
      rotten_tomatoes: "92%",
      total_recommendations: 1,
      total_wins: "21",
      total_nominations: "45",
      genre_en: "Comedy, Drama, Musical",
      genre_bg: "Комедия, Драма, Мюзикъл",
      prosperityScore: 26.36
    },
    {
      imdbID: "tt9214832",
      title_en: "Emma.",
      title_bg: "Ема",
      type: "movie",
      imdbRating: "6.7",
      metascore: "71",
      total_box_office: "$10,055,355",
      rotten_tomatoes: "86%",
      total_recommendations: 1,
      total_wins: "11",
      total_nominations: "61",
      genre_en: "Comedy, Drama, Romance",
      genre_bg: "Комедия, Драма, Романтичен",
      prosperityScore: 26.32
    },
    {
      imdbID: "tt1659337",
      title_en: "The Perks of Being a Wallflower",
      title_bg: "Предимствата да бъдеш аутсайдер",
      type: "movie",
      imdbRating: "7.9",
      metascore: "67",
      total_box_office: "$17,742,948",
      rotten_tomatoes: "85%",
      total_recommendations: 3,
      total_wins: "20",
      total_nominations: "51",
      genre_en: "Drama",
      genre_bg: "Драма",
      prosperityScore: 26.25
    },
    {
      imdbID: "tt0363771",
      title_en:
        "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      title_bg: "Хрониките на Нарния: Лъвът, Вещицата и Гардероба",
      type: "movie",
      imdbRating: "6.9",
      metascore: "75",
      total_box_office: "$291,710,957",
      rotten_tomatoes: "75%",
      total_recommendations: 1,
      total_wins: "18",
      total_nominations: "46",
      genre_en: "Adventure, Family, Fantasy",
      genre_bg: "Приключенски, Семейни, Фентъзи",
      prosperityScore: 25.18
    },
    {
      imdbID: "tt3544112",
      title_en: "Sing Street",
      title_bg: "Синг Стрийт",
      type: "movie",
      imdbRating: "7.9",
      metascore: "79",
      total_box_office: "$3,237,118",
      rotten_tomatoes: "95%",
      total_recommendations: 1,
      total_wins: "16",
      total_nominations: "45",
      genre_en: "Comedy, Drama, Music",
      genre_bg: "Комедия, Драма, Музика",
      prosperityScore: 24.74
    },
    {
      imdbID: "tt1677720",
      title_en: "Ready Player One",
      title_bg: "Играч първи, приготви се",
      type: "movie",
      imdbRating: "7.4",
      metascore: "64",
      total_box_office: "$137,715,350",
      rotten_tomatoes: "72%",
      total_recommendations: 4,
      total_wins: "11",
      total_nominations: "57",
      genre_en: "Action, Adventure, Sci-Fi",
      genre_bg: "Екшън, Приключенски, Научна фантастика",
      prosperityScore: 24.73
    },
    {
      imdbID: "tt7146812",
      title_en: "Onward",
      title_bg: "Напред",
      type: "movie",
      imdbRating: "7.4",
      metascore: "61",
      total_box_office: "$61,555,145",
      rotten_tomatoes: "88%",
      total_recommendations: 2,
      total_wins: "4",
      total_nominations: "66",
      genre_en: "Animation, Adventure, Comedy",
      genre_bg: "Анимация, Приключенски, Комедия",
      prosperityScore: 24.56
    },
    {
      imdbID: "tt9098872",
      title_en: "The Rescue",
      title_bg: "Спасението",
      type: "movie",
      imdbRating: "8.3",
      metascore: "84",
      total_box_office: "$1,060,556",
      rotten_tomatoes: "96%",
      total_recommendations: 2,
      total_wins: "16",
      total_nominations: "39",
      genre_en: "Documentary, Action, Mystery",
      genre_bg: "Документален, Екшън, Мистерия",
      prosperityScore: 23.78
    },
    {
      imdbID: "tt8332922",
      title_en: "A Quiet Place Part II",
      title_bg: "Нито звук: Честит Ден",
      type: "movie",
      imdbRating: "7.2",
      metascore: "71",
      total_box_office: "$160,072,261",
      rotten_tomatoes: "91%",
      total_recommendations: 3,
      total_wins: "14",
      total_nominations: "44",
      genre_en: "Drama, Horror, Sci-Fi",
      genre_bg: "Драма, Ужаси, Научна фантастика",
      prosperityScore: 23.07
    },
    {
      imdbID: "tt0327597",
      title_en: "Coraline",
      title_bg: "Коралайн и тайната на огледалото",
      type: "movie",
      imdbRating: "7.8",
      metascore: "80",
      total_box_office: "$116,896,576",
      rotten_tomatoes: "91%",
      total_recommendations: 1,
      total_wins: "8",
      total_nominations: "46",
      genre_en: "Animation, Drama, Family",
      genre_bg: "Анимация, Драма, Семейни",
      prosperityScore: 22.72
    },
    {
      imdbID: "tt1631867",
      title_en: "Edge of Tomorrow",
      title_bg: "На ръба на утрешния ден",
      type: "movie",
      imdbRating: "7.9",
      metascore: "71",
      total_box_office: "$100,206,256",
      rotten_tomatoes: "91%",
      total_recommendations: 5,
      total_wins: "11",
      total_nominations: "38",
      genre_en: "Action, Adventure, Sci-Fi",
      genre_bg: "Екшън, Приключенски, Научна фантастика",
      prosperityScore: 20.72
    },
    {
      imdbID: "tt4244994",
      title_en: "The Last Duel",
      title_bg: "Последният дуел",
      type: "movie",
      imdbRating: "7.3",
      metascore: "67",
      total_box_office: "$10,853,945",
      rotten_tomatoes: "85%",
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "45",
      genre_en: "Action, Drama, History",
      genre_bg: "Екшън, Драма, Исторически",
      prosperityScore: 19.88
    },
    {
      imdbID: "tt1714206",
      title_en: "The Spectacular Now",
      title_bg: "Удивителното сега",
      type: "movie",
      imdbRating: "7.0",
      metascore: "82",
      total_box_office: "$6,854,611",
      rotten_tomatoes: "92%",
      total_recommendations: 1,
      total_wins: "9",
      total_nominations: "32",
      genre_en: "Drama, Romance",
      genre_bg: "Драма, Романтичен",
      prosperityScore: 19.6
    },
    {
      imdbID: "tt2582846",
      title_en: "The Fault in Our Stars",
      title_bg: "Вината в нашите звезди",
      type: "movie",
      imdbRating: "7.7",
      metascore: "69",
      total_box_office: "$124,872,350",
      rotten_tomatoes: "81%",
      total_recommendations: 1,
      total_wins: "23",
      total_nominations: "18",
      genre_en: "Drama, Romance",
      genre_bg: "Драма, Романтичен",
      prosperityScore: 19.11
    },
    {
      imdbID: "tt1485796",
      title_en: "The Greatest Showman",
      title_bg: "Най-великият шоумен",
      type: "movie",
      imdbRating: "7.5",
      metascore: "48",
      total_box_office: "$174,340,174",
      rotten_tomatoes: "57%",
      total_recommendations: 1,
      total_wins: "17",
      total_nominations: "32",
      genre_en: "Biography, Drama, Musical",
      genre_bg: "Биография, Драма, Мюзикъл",
      prosperityScore: 18.7
    },
    {
      imdbID: "tt1878870",
      title_en: "The Edge of Seventeen",
      title_bg: "На ръба на седемнадесет",
      type: "movie",
      imdbRating: "7.3",
      metascore: "77",
      total_box_office: "$14,431,633",
      rotten_tomatoes: "94%",
      total_recommendations: 2,
      total_wins: "8",
      total_nominations: "29",
      genre_en: "Comedy, Drama",
      genre_bg: "Комедия, Драма",
      prosperityScore: 18.08
    },
    {
      imdbID: "tt1457767",
      title_en: "The Conjuring",
      title_bg: "Заклинанието",
      type: "movie",
      imdbRating: "7.5",
      metascore: "68",
      total_box_office: "$137,446,368",
      rotten_tomatoes: "86%",
      total_recommendations: 1,
      total_wins: "15",
      total_nominations: "22",
      genre_en: "Horror, Mystery, Thriller",
      genre_bg: "Ужаси, Мистерия, Трилър",
      prosperityScore: 17.59
    },
    {
      imdbID: "tt1679335",
      title_en: "Trolls",
      title_bg: "Тролчета",
      type: "movie",
      imdbRating: "6.4",
      metascore: "55",
      total_box_office: "$154,174,089",
      rotten_tomatoes: "76%",
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "37",
      genre_en: "Animation, Adventure, Comedy",
      genre_bg: "Анимация, Приключенски, Комедия",
      prosperityScore: 16.64
    },
    {
      imdbID: "tt8115900",
      title_en: "The Bad Guys",
      title_bg: "Лошите момчета",
      type: "movie",
      imdbRating: "6.8",
      metascore: "64",
      total_box_office: "$97,459,240",
      rotten_tomatoes: "88%",
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "30",
      genre_en: "Animation, Adventure, Comedy",
      genre_bg: "Анимация, Приключенски, Комедия",
      prosperityScore: 15.21
    },
    {
      imdbID: "tt1568921",
      title_en: "The Secret World of Arrietty",
      title_bg: "Тайнственият свят на Ариети",
      type: "movie",
      imdbRating: "7.6",
      metascore: "80",
      total_box_office: "$19,587,032",
      rotten_tomatoes: "94%",
      total_recommendations: 1,
      total_wins: "12",
      total_nominations: "6",
      genre_en: "Animation, Adventure, Drama",
      genre_bg: "Анимация, Приключенски, Драма",
      prosperityScore: 13.87
    },
    {
      imdbID: "tt2250912",
      title_en: "Spider-Man: Homecoming",
      title_bg: "Спайдърмен: Завръщане у дома",
      type: "movie",
      imdbRating: "7.4",
      metascore: "73",
      total_box_office: "$334,952,829",
      rotten_tomatoes: "92%",
      total_recommendations: 2,
      total_wins: "8",
      total_nominations: "10",
      genre_en: "Action, Adventure, Sci-Fi",
      genre_bg: "Екшън, Приключенски, Научна фантастика",
      prosperityScore: 13.05
    },
    {
      imdbID: "tt0041959",
      title_en: "The Third Man",
      title_bg: "Третият човек",
      type: "movie",
      imdbRating: "8.1",
      metascore: "97",
      total_box_office: "$1,067,364",
      rotten_tomatoes: "99%",
      total_recommendations: 1,
      total_wins: "5",
      total_nominations: "4",
      genre_en: "Film-Noir, Mystery, Thriller",
      genre_bg: "Филм-ноар, Мистерия, Трилър",
      prosperityScore: 13.01
    },
    {
      imdbID: "tt10298810",
      title_en: "Lightyear",
      title_bg: "Баз Светлинна година",
      type: "movie",
      imdbRating: "6.1",
      metascore: "60",
      total_box_office: "$118,307,188",
      rotten_tomatoes: "74%",
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "23",
      genre_en: "Animation, Action, Adventure",
      genre_bg: "Анимация, Екшън, Приключенски",
      prosperityScore: 13
    },
    {
      imdbID: "tt11398388",
      title_en: "Riotsville, U.S.A.",
      title_bg: "Риотсвил, САЩ",
      type: "movie",
      imdbRating: "6.7",
      metascore: "82",
      total_box_office: "$40,960",
      rotten_tomatoes: "92%",
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "10",
      genre_en: "Documentary, History",
      genre_bg: "Документален, Исторически",
      prosperityScore: 12.57
    },
    {
      imdbID: "tt2283362",
      title_en: "Jumanji: Welcome to the Jungle",
      title_bg: "Джуманджи: Добре дошли в джунглата",
      type: "movie",
      imdbRating: "7.0",
      metascore: "58",
      total_box_office: "$404,540,171",
      rotten_tomatoes: "76%",
      total_recommendations: 2,
      total_wins: "5",
      total_nominations: "15",
      genre_en: "Action, Adventure, Comedy",
      genre_bg: "Екшън, Приключенски, Комедия",
      prosperityScore: 11.88
    },
    {
      imdbID: "tt2709768",
      title_en: "The Secret Life of Pets",
      title_bg: "Тайният живот на домашните любимци",
      type: "movie",
      imdbRating: "6.5",
      metascore: "61",
      total_box_office: "$368,623,860",
      rotten_tomatoes: "71%",
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "15",
      genre_en: "Animation, Adventure, Comedy",
      genre_bg: "Анимация, Приключенски, Комедия",
      prosperityScore: 11.82
    },
    {
      imdbID: "tt6513120",
      title_en: "Fighting with My Family",
      title_bg: "Борба със семейството ми",
      type: "movie",
      imdbRating: "7.0",
      metascore: "68",
      total_box_office: "$22,958,886",
      rotten_tomatoes: "93%",
      total_recommendations: 1,
      total_wins: "10",
      total_nominations: "5",
      genre_en: "Biography, Comedy, Drama",
      genre_bg: "Биография, Комедия, Драма",
      prosperityScore: 11.76
    },
    {
      imdbID: "tt8079248",
      title_en: "Yesterday",
      title_bg: "Вчера си беше вчера",
      type: "movie",
      imdbRating: "6.8",
      metascore: "55",
      total_box_office: "$73,286,650",
      rotten_tomatoes: "63%",
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "19",
      genre_en: "Comedy, Fantasy, Music",
      genre_bg: "Комедия, Фентъзи, Музика",
      prosperityScore: 11.55
    },
    {
      imdbID: "tt0100944",
      title_en: "The Witches",
      title_bg: "Вещиците",
      type: "movie",
      imdbRating: "6.8",
      metascore: "78",
      total_box_office: "$10,360,553",
      rotten_tomatoes: "94%",
      total_recommendations: 2,
      total_wins: "3",
      total_nominations: "8",
      genre_en: "Adventure, Comedy, Family",
      genre_bg: "Приключенски, Комедия, Семейни",
      prosperityScore: 11.38
    },
    {
      imdbID: "tt0398808",
      title_en: "Bridge to Terabithia",
      title_bg: "Мост до Терабития",
      type: "movie",
      imdbRating: "7.2",
      metascore: "74",
      total_box_office: "$82,272,442",
      rotten_tomatoes: "85%",
      total_recommendations: 1,
      total_wins: "6",
      total_nominations: "5",
      genre_en: "Drama, Family, Fantasy",
      genre_bg: "Драма, Семейни, Фентъзи",
      prosperityScore: 11.2
    },
    {
      imdbID: "tt10741846",
      title_en: "Rita Moreno: Just a Girl Who Decided to Go for It",
      title_bg: "Рита Морено: Просто момиче, което реши да действа",
      type: "movie",
      imdbRating: "7.7",
      metascore: "77",
      total_box_office: "$264,626",
      rotten_tomatoes: "96%",
      total_recommendations: 1,
      total_wins: "3",
      total_nominations: "7",
      genre_en: "Documentary, Biography",
      genre_bg: "Документален, Биография",
      prosperityScore: 11.12
    },
    {
      imdbID: "tt6343314",
      title_en: "Creed II",
      title_bg: "Крийд II",
      type: "movie",
      imdbRating: "7.1",
      metascore: "66",
      total_box_office: "$115,715,889",
      rotten_tomatoes: "83%",
      total_recommendations: 1,
      total_wins: "1",
      total_nominations: "12",
      genre_en: "Action, Drama, Sport",
      genre_bg: "Екшън, Драма, Спортен",
      prosperityScore: 10.65
    },
    {
      imdbID: "tt1790864",
      title_en: "The Maze Runner",
      title_bg: "Лабиринтът: Невъзможно бягство",
      type: "movie",
      imdbRating: "6.8",
      metascore: "57",
      total_box_office: "$102,427,862",
      rotten_tomatoes: "65%",
      total_recommendations: 3,
      total_wins: "4",
      total_nominations: "12",
      genre_en: "Action, Mystery, Sci-Fi",
      genre_bg: "Екшън, Мистерия, Научна фантастика",
      prosperityScore: 10.61
    },
    {
      imdbID: "tt1840309",
      title_en: "Divergent",
      title_bg: "Реликти",
      type: "movie",
      imdbRating: "6.6",
      metascore: "48",
      total_box_office: "$150,947,895",
      rotten_tomatoes: "41%",
      total_recommendations: 3,
      total_wins: "7",
      total_nominations: "11",
      genre_en: "Action, Adventure, Mystery",
      genre_bg: "Екшън, Приключенски, Мистерия",
      prosperityScore: 10.36
    },
    {
      imdbID: "tt1588173",
      title_en: "Warm Bodies",
      title_bg: "Топли Души",
      type: "movie",
      imdbRating: "6.8",
      metascore: "60",
      total_box_office: "$66,380,662",
      rotten_tomatoes: "81%",
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "10",
      genre_en: "Comedy, Horror, Romance",
      genre_bg: "Комедия, Ужаси, Романтичен",
      prosperityScore: 9.8
    },
    {
      imdbID: "tt1023114",
      title_en: "The Way Back",
      title_bg: "Пътят назад",
      type: "movie",
      imdbRating: "7.3",
      metascore: "66",
      total_box_office: "$2,701,859",
      rotten_tomatoes: "73%",
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "5",
      genre_en: "Adventure, Drama, History",
      genre_bg: "Приключенски, Драма, Исторически",
      prosperityScore: 9.78
    },
    {
      imdbID: "tt0870154",
      title_en: "Jungle Cruise",
      title_bg: "Круиз в джунглата",
      type: "movie",
      imdbRating: "6.6",
      metascore: "50",
      total_box_office: "$116,987,516",
      rotten_tomatoes: "62%",
      total_recommendations: 1,
      total_wins: "5",
      total_nominations: "9",
      genre_en: "Action, Adventure, Comedy",
      genre_bg: "Екшън, Приключенски, Комедия",
      prosperityScore: 9.45
    },
    {
      imdbID: "tt10298840",
      title_en: "Strange World",
      title_bg: "Странен свят",
      type: "movie",
      imdbRating: "5.7",
      metascore: "65",
      total_box_office: "$37,968,963",
      rotten_tomatoes: "72%",
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "9",
      genre_en: "Animation, Action, Adventure",
      genre_bg: "Анимация, Екшън, Приключенски",
      prosperityScore: 9.33
    },
    {
      imdbID: "tt3794354",
      title_en: "Sonic the Hedgehog",
      title_bg: "Соник: Филмът",
      type: "movie",
      imdbRating: "6.5",
      metascore: "47",
      total_box_office: "$148,974,665",
      rotten_tomatoes: "64%",
      total_recommendations: 1,
      total_wins: "3",
      total_nominations: "12",
      genre_en: "Action, Adventure, Comedy",
      genre_bg: "Екшън, Приключенски, Комедия",
      prosperityScore: 9.3
    },
    {
      imdbID: "tt0455944",
      title_en: "The Equalizer",
      title_bg: "Закрилникът",
      type: "movie",
      imdbRating: "7.2",
      metascore: "57",
      total_box_office: "$101,530,738",
      rotten_tomatoes: "61%",
      total_recommendations: 1,
      total_wins: "1",
      total_nominations: "9",
      genre_en: "Action, Crime, Thriller",
      genre_bg: "Екшън, Криминален, Трилър",
      prosperityScore: 9
    },
    {
      imdbID: "tt11790780",
      title_en: "The Alpinist",
      title_bg: "Алпинистът",
      type: "movie",
      imdbRating: "7.9",
      metascore: "67",
      total_box_office: "$844,743",
      rotten_tomatoes: "93%",
      total_recommendations: 1,
      total_wins: "2",
      total_nominations: "2",
      genre_en: "Documentary, Biography",
      genre_bg: "Документален, Биография",
      prosperityScore: 8.59
    },
    {
      imdbID: "tt5884052",
      title_en: "Pokémon: Detective Pikachu",
      title_bg: "Детектив Пикачу",
      type: "movie",
      imdbRating: "6.5",
      metascore: "53",
      total_box_office: "$144,174,568",
      rotten_tomatoes: "68%",
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "10",
      genre_en: "Action, Adventure, Comedy",
      genre_bg: "Екшън, Приключенски, Комедия",
      prosperityScore: 8.5
    },
    {
      imdbID: "tt0814255",
      title_en: "Percy Jackson & the Olympians: The Lightning Thief",
      title_bg: "Пърси Джаксън и боговете на Олимп: Похитителят на мълнии",
      type: "movie",
      imdbRating: "5.9",
      metascore: "47",
      total_box_office: "$88,768,303",
      rotten_tomatoes: "49%",
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "11",
      genre_en: "Adventure, Family, Fantasy",
      genre_bg: "Приключенски, Семейни, Фентъзи",
      prosperityScore: 8.07
    },
    {
      imdbID: "tt0102536",
      title_en: "Night on Earth",
      title_bg: "Нощта на Земята",
      type: "movie",
      imdbRating: "7.7",
      metascore: "68",
      total_box_office: "$2,015,810",
      rotten_tomatoes: "77%",
      total_recommendations: 1,
      total_wins: "1",
      total_nominations: "0",
      genre_en: "Comedy, Drama",
      genre_bg: "Комедия, Драма",
      prosperityScore: 7.87
    },
    {
      imdbID: "tt7504726",
      title_en: "The Call of the Wild",
      title_bg: "Зов за завръщане",
      type: "movie",
      imdbRating: "6.7",
      metascore: "48",
      total_box_office: "$62,342,368",
      rotten_tomatoes: "63%",
      total_recommendations: 2,
      total_wins: "1",
      total_nominations: "8",
      genre_en: "Adventure, Drama, Family",
      genre_bg: "Приключенски, Драма, Семейни",
      prosperityScore: 7.79
    },
    {
      imdbID: "tt3531824",
      title_en: "Nerve",
      title_bg: "Играй или Умри",
      type: "movie",
      imdbRating: "6.5",
      metascore: "58",
      total_box_office: "$38,583,626",
      rotten_tomatoes: "67%",
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "5",
      genre_en: "Action, Adventure, Crime",
      genre_bg: "Екшън, Приключенски, Криминален",
      prosperityScore: 7.71
    },
    {
      imdbID: "tt4500922",
      title_en: "Maze Runner: The Death Cure",
      title_bg: "Лабиринтът: Последния кандидат",
      type: "movie",
      imdbRating: "6.3",
      metascore: "50",
      total_box_office: "$58,032,443",
      rotten_tomatoes: "42%",
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "7",
      genre_en: "Action, Adventure, Sci-Fi",
      genre_bg: "Екшън, Приключенски, Научна фантастика",
      prosperityScore: 7.4
    },
    {
      imdbID: "tt5308322",
      title_en: "Happy Death Day",
      title_bg: "Честит Ден на Смъртта",
      type: "movie",
      imdbRating: "6.6",
      metascore: "58",
      total_box_office: "$55,683,845",
      rotten_tomatoes: "70%",
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "3",
      genre_en: "Comedy, Horror, Mystery",
      genre_bg: "Комедия, Ужаси, Мистерия",
      prosperityScore: 7.23
    },
    {
      imdbID: "tt2119543",
      title_en: "The House with a Clock in Its Walls",
      title_bg: "Къща с часовник във времето",
      type: "movie",
      imdbRating: "6.1",
      metascore: "57",
      total_box_office: "$68,549,695",
      rotten_tomatoes: "65%",
      total_recommendations: 1,
      total_wins: "1",
      total_nominations: "0",
      genre_en: "Comedy, Family, Fantasy",
      genre_bg: "Комедия, Семейни, Фентъзи",
      prosperityScore: 6.63
    },
    {
      imdbID: "tt6673612",
      title_en: "Dolittle",
      title_bg: "Доктор Дулитъл",
      type: "movie",
      imdbRating: "5.6",
      metascore: "26",
      total_box_office: "$77,047,065",
      rotten_tomatoes: "15%",
      total_recommendations: 1,
      total_wins: "4",
      total_nominations: "9",
      genre_en: "Adventure, Comedy, Family",
      genre_bg: "Приключенски, Комедия, Семейни",
      prosperityScore: 6.63
    },
    {
      imdbID: "tt2140507",
      title_en: "The Current War",
      title_bg: "Война на токове",
      type: "movie",
      imdbRating: "6.5",
      metascore: "55",
      total_box_office: "$5,979,540",
      rotten_tomatoes: "33%",
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "0",
      genre_en: "Biography, Drama, History",
      genre_bg: "Биография, Драма, Исторически",
      prosperityScore: 6.15
    },
    {
      imdbID: "tt5664636",
      title_en: "Goosebumps 2: Haunted Halloween",
      title_bg: "Goosebumps 2: Призрачен Хелоуин",
      type: "movie",
      imdbRating: "5.6",
      metascore: "53",
      total_box_office: "$46,700,633",
      rotten_tomatoes: "48%",
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "0",
      genre_en: "Adventure, Comedy, Fantasy",
      genre_bg: "Приключенски, Комедия, Фентъзи",
      prosperityScore: 5.87
    },
    {
      imdbID: "tt0257516",
      title_en: "Cursed",
      title_bg: "Прокълната",
      type: "movie",
      imdbRating: "5.1",
      metascore: "31",
      total_box_office: "$19,297,522",
      rotten_tomatoes: "31/100",
      total_recommendations: 1,
      total_wins: "0",
      total_nominations: "3",
      genre_en: "Comedy, Horror",
      genre_bg: "Комедия, Ужаси",
      prosperityScore: 4.37
    }
  ],
  sortedMoviesAndSeriesByMetascore: [
    {
      imdbID: "tt0041959",
      title_en: "The Third Man",
      title_bg: "Третият човек",
      type: "movie",
      imdbRating: "8.1",
      metascore: "97",
      boxOffice: "$1,067,364",
      awards: "Won 1 Oscar. 5 wins & 4 nominations total"
    },
    {
      imdbID: "tt1454468",
      title_en: "Gravity",
      title_bg: "Гравитация",
      type: "movie",
      imdbRating: "7.7",
      metascore: "96",
      boxOffice: "$274,092,705",
      awards: "Won 7 Oscars. 240 wins & 187 nominations total"
    },
    {
      imdbID: "tt6751668",
      title_en: "Parasite",
      title_bg: "Паразит",
      type: "movie",
      imdbRating: "8.5",
      metascore: "96",
      boxOffice: "$53,369,749",
      awards: "Won 4 Oscars. 316 wins & 266 nominations total"
    },
    {
      imdbID: "tt11422728",
      title_en:
        "Summer of Soul (...Or, When the Revolution Could Not Be Televised)",
      title_bg:
        "Лятото на душата (...Или когато революцията не можеше да бъде излъчена)",
      type: "movie",
      imdbRating: "8.0",
      metascore: "96",
      boxOffice: "$2,320,649",
      awards: "Won 1 Oscar. 73 wins & 43 nominations total"
    },
    {
      imdbID: "tt0036775",
      title_en: "Double Indemnity",
      title_bg: "Двойна игра",
      type: "movie",
      imdbRating: "8.3",
      metascore: "95",
      boxOffice: "N/A",
      awards: "Nominated for 7 Oscars. 2 wins & 9 nominations total"
    },
    {
      imdbID: "tt10706602",
      title_en: "Collective",
      title_bg: "Колектив",
      type: "movie",
      imdbRating: "8.1",
      metascore: "95",
      boxOffice: "N/A",
      awards: "Nominated for 2 Oscars. 37 wins & 55 nominations total"
    },
    {
      imdbID: "tt2096673",
      title_en: "Inside Out",
      title_bg: "Отвътре навън",
      type: "movie",
      imdbRating: "8.1",
      metascore: "94",
      boxOffice: "$356,461,711",
      awards: "Won 1 Oscar. 99 wins & 118 nominations total"
    },
    {
      imdbID: "tt3783958",
      title_en: "La La Land",
      title_bg: "Ла Ла Ленд",
      type: "movie",
      imdbRating: "8.0",
      metascore: "94",
      boxOffice: "$151,101,803",
      awards: "Won 6 Oscars. 242 wins & 307 nominations total"
    },
    {
      imdbID: "tt5013056",
      title_en: "Dunkirk",
      title_bg: "Дюнкерк",
      type: "movie",
      imdbRating: "7.8",
      metascore: "94",
      boxOffice: "$189,740,665",
      awards: "Won 3 Oscars. 68 wins & 236 nominations total"
    },
    {
      imdbID: "tt4925292",
      title_en: "Lady Bird",
      title_bg: "Лейди Бърд",
      type: "movie",
      imdbRating: "7.4",
      metascore: "93",
      boxOffice: "$48,958,273",
      awards: "Nominated for 5 Oscars. 124 wins & 228 nominations total"
    }
  ],
  sortedMoviesAndSeriesByIMDbRating: [
    {
      imdbID: "tt0417299",
      title_en: "Avatar: The Last Airbender",
      title_bg: "Аватар: Легенда за Анг",
      type: "series",
      imdbRating: "9.3",
      metascore: "N/A",
      boxOffice: null,
      awards: "Won 1 Primetime Emmy. 9 wins & 7 nominations total"
    },
    {
      imdbID: "tt9253866",
      title_en: "Our Planet",
      title_bg: "Нашата планета",
      type: "series",
      imdbRating: "9.2",
      metascore: "N/A",
      boxOffice: null,
      awards: "Won 2 Primetime Emmys. 7 wins & 25 nominations total"
    },
    {
      imdbID: "tt11126994",
      title_en: "Arcane",
      title_bg: "Аркейн",
      type: "series",
      imdbRating: "9.0",
      metascore: "N/A",
      boxOffice: null,
      awards: "Won 4 Primetime Emmys. 22 wins & 5 nominations total"
    },
    {
      imdbID: "tt11989890",
      title_en: "David Attenborough: A Life on Our Planet",
      title_bg: "Дейвид Атънбъро: Един живот на нашата планета",
      type: "movie",
      imdbRating: "8.9",
      metascore: "72",
      boxOffice: "N/A",
      awards: "Won 3 Primetime Emmys. 8 wins & 10 nominations total"
    },
    {
      imdbID: "tt1375666",
      title_en: "Inception",
      title_bg: "Генезис",
      type: "movie",
      imdbRating: "8.8",
      metascore: "74",
      boxOffice: "$292,587,330",
      awards: "Won 4 Oscars. 159 wins & 220 nominations total"
    },
    {
      imdbID: "tt0816692",
      title_en: "Interstellar",
      title_bg: "Интерстелар",
      type: "movie",
      imdbRating: "8.7",
      metascore: "74",
      boxOffice: "$188,020,017",
      awards: "Won 1 Oscar. 44 wins & 148 nominations total"
    },
    {
      imdbID: "tt4574334",
      title_en: "Stranger Things",
      title_bg: "Странни неща",
      type: "series",
      imdbRating: "8.7",
      metascore: "N/A",
      boxOffice: null,
      awards: "Won 12 Primetime Emmys. 113 wins & 323 nominations total"
    },
    {
      imdbID: "tt5421602",
      title_en: "Anne with an E",
      title_bg: "Ан с Е",
      type: "series",
      imdbRating: "8.6",
      metascore: "N/A",
      boxOffice: null,
      awards: "24 wins & 55 nominations"
    },
    {
      imdbID: "tt8111088",
      title_en: "The Mandalorian",
      title_bg: "Мандалорианецът",
      type: "series",
      imdbRating: "8.6",
      metascore: "N/A",
      boxOffice: null,
      awards: "Won 15 Primetime Emmys. 62 wins & 162 nominations total"
    },
    {
      imdbID: "tt6385540",
      title_en: "Hilda",
      title_bg: "Хилда",
      type: "series",
      imdbRating: "8.6",
      metascore: "N/A",
      boxOffice: null,
      awards: "Won 1 BAFTA Award12 wins & 9 nominations total"
    }
  ],
  sortedMoviesAndSeriesByRottenTomatoesRating: [
    {
      imdbID: "tt14372240",
      title_en: "The Year Earth Changed",
      title_bg: "Годината, в която Земята се промени",
      type: "movie",
      imdbRating: "8.2",
      metascore: "N/A",
      boxOffice: "N/A",
      awards: "Nominated for 1 Primetime Emmy. 5 nominations total",
      ratings:
        '[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"100%"}]',
      rottenTomatoes: "100.00"
    },
    {
      imdbID: "tt8923484",
      title_en: "Crip Camp",
      title_bg: "Лагер за инвалиди",
      type: "movie",
      imdbRating: "7.7",
      metascore: "86",
      boxOffice: "N/A",
      awards: "Nominated for 1 Oscar. 11 wins & 35 nominations total",
      ratings:
        '[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"100%"},{"Source":"Metacritic","Value":"86/100"}]',
      rottenTomatoes: "100.00"
    },
    {
      imdbID: "tt0041959",
      title_en: "The Third Man",
      title_bg: "Третият човек",
      type: "movie",
      imdbRating: "8.1",
      metascore: "97",
      boxOffice: "$1,067,364",
      awards: "Won 1 Oscar. 5 wins & 4 nominations total",
      ratings:
        '[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"97/100"}]',
      rottenTomatoes: "99.00"
    },
    {
      imdbID: "tt0266543",
      title_en: "Finding Nemo",
      title_bg: "Търсенето на Немо",
      type: "movie",
      imdbRating: "8.2",
      metascore: "90",
      boxOffice: "$380,843,261",
      awards: "Won 1 Oscar. 49 wins & 63 nominations total",
      ratings:
        '[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"90/100"}]',
      rottenTomatoes: "99.00"
    },
    {
      imdbID: "tt10706602",
      title_en: "Collective",
      title_bg: "Колектив",
      type: "movie",
      imdbRating: "8.1",
      metascore: "95",
      boxOffice: "N/A",
      awards: "Nominated for 2 Oscars. 37 wins & 55 nominations total",
      ratings:
        '[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"95/100"}]',
      rottenTomatoes: "99.00"
    },
    {
      imdbID: "tt11422728",
      title_en:
        "Summer of Soul (...Or, When the Revolution Could Not Be Televised)",
      title_bg:
        "Лятото на душата (...Или когато революцията не можеше да бъде излъчена)",
      type: "movie",
      imdbRating: "8.0",
      metascore: "96",
      boxOffice: "$2,320,649",
      awards: "Won 1 Oscar. 73 wins & 43 nominations total",
      ratings:
        '[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"96/100"}]',
      rottenTomatoes: "99.00"
    },
    {
      imdbID: "tt16377862",
      title_en: "All That Breathes",
      title_bg: "Всичко, което диша",
      type: "movie",
      imdbRating: "7.0",
      metascore: "87",
      boxOffice: "$101,283",
      awards: "Nominated for 1 Oscar. 24 wins & 43 nominations total",
      ratings:
        '[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"87/100"}]',
      rottenTomatoes: "99.00"
    },
    {
      imdbID: "tt4925292",
      title_en: "Lady Bird",
      title_bg: "Лейди Бърд",
      type: "movie",
      imdbRating: "7.4",
      metascore: "93",
      boxOffice: "$48,958,273",
      awards: "Nominated for 5 Oscars. 124 wins & 228 nominations total",
      ratings:
        '[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"93/100"}]',
      rottenTomatoes: "99.00"
    },
    {
      imdbID: "tt6751668",
      title_en: "Parasite",
      title_bg: "Паразит",
      type: "movie",
      imdbRating: "8.5",
      metascore: "96",
      boxOffice: "$53,369,749",
      awards: "Won 4 Oscars. 316 wins & 266 nominations total",
      ratings:
        '[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"96/100"}]',
      rottenTomatoes: "99.00"
    },
    {
      imdbID: "tt8760684",
      title_en: "Apollo 11",
      title_bg: "Аполон 11",
      type: "movie",
      imdbRating: "8.1",
      metascore: "88",
      boxOffice: "$9,039,891",
      awards: "Won 3 Primetime Emmys. 59 wins & 45 nominations total",
      ratings:
        '[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"88/100"}]',
      rottenTomatoes: "99.00"
    }
  ],
  averageBoxOfficeAndScores: [
    {
      average_box_office: "$112,153,702",
      average_metascore: "71.87",
      average_imdb_rating: "7.37",
      average_rotten_tomatoes: "83.48%"
    }
  ],
  topCountries: [
    {
      country_en: "United States",
      country_bg: "САЩ",
      count: 319
    },
    {
      country_en: "United Kingdom",
      country_bg: "Великобритания",
      count: 103
    },
    {
      country_en: "Canada",
      country_bg: "Канада",
      count: 62
    },
    {
      country_en: "Japan",
      country_bg: "Япония",
      count: 18
    },
    {
      country_en: "India",
      country_bg: "Индия",
      count: 18
    },
    {
      country_en: "Hungary",
      country_bg: "Унгария",
      count: 11
    },
    {
      country_en: "Australia",
      country_bg: "Австралия",
      count: 11
    },
    {
      country_en: "South Africa",
      country_bg: "Южна Африка",
      count: 10
    },
    {
      country_en: "China",
      country_bg: "Китай",
      count: 10
    },
    {
      country_en: "France",
      country_bg: "Франция",
      count: 10
    }
  ]
};

//
interface spark3 {
  options?: ApexOptions;
  width?: string | number;
  height?: string | number;
  series?: ApexOptions["series"];
  [key: string]: any;
  label?: XAxisAnnotations;
  endingShape?: string;
}
export class Totalcustomers extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
        }
      ],
      options: {
        colors: ["rgb(132, 90, 223)"],
        chart: {
          type: "line",
          height: 40,
          width: 100,
          sparkline: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98]
          }
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          }
        },
        xaxis: {
          // show: false,
          axisBorder: {
            show: false
          }
        },
        tooltip: {
          enabled: false
        }
      }
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={40}
          width={100}
        />
      </div>
    );
  }
}
//
export class Totalrevenue extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [20, 14, 20, 22, 9, 12, 19, 10, 25]
        }
      ],
      options: {
        colors: ["rgb(35, 183, 229)"],
        chart: {
          type: "line",
          height: 40,
          width: 100,
          sparkline: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98]
          }
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          }
        },
        xaxis: {
          axisBorder: {
            show: false
          }
        },
        tooltip: {
          enabled: false
        }
      }
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={40}
          width={100}
        />
      </div>
    );
  }
}

//
export class Conversionratio extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [20, 20, 22, 9, 14, 19, 10, 25, 12]
        }
      ],
      options: {
        colors: ["rgb(38, 191, 148)"],
        chart: {
          type: "line",
          height: 40,
          width: 100,
          sparkline: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98]
          }
        },

        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          }
        },
        xaxis: {
          axisBorder: {
            show: false
          }
        },
        tooltip: {
          enabled: false
        }
      }
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={40}
          width={100}
        />
      </div>
    );
  }
}
//
export class Totaldeals extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Value",
          data: [20, 20, 22, 9, 12, 14, 19, 10, 25]
        }
      ],
      options: {
        colors: ["rgb(245, 184, 73)"],
        chart: {
          type: "line",
          height: 40,
          width: 100,
          sparkline: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 1.5,
          dashArray: 0
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98]
          }
        },
        yaxis: {
          min: 0,
          show: false,
          axisBorder: {
            show: false
          }
        },
        xaxis: {
          // show: false,
          axisBorder: {
            show: false
          }
        },
        tooltip: {
          enabled: false
        }
      }
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={40}
          width={100}
        />
      </div>
    );
  }
}
// revenueanalytics
export class Revenueanalytics extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          type: "line",
          name: "Profit",
          data: [
            {
              x: "Jan",
              y: 100
            },
            {
              x: "Feb",
              y: 210
            },
            {
              x: "Mar",
              y: 180
            },
            {
              x: "Apr",
              y: 454
            },
            {
              x: "May",
              y: 230
            },
            {
              x: "Jun",
              y: 320
            },
            {
              x: "Jul",
              y: 656
            },
            {
              x: "Aug",
              y: 830
            },
            {
              x: "Sep",
              y: 350
            },
            {
              x: "Oct",
              y: 350
            },
            {
              x: "Nov",
              y: 210
            },
            {
              x: "Dec",
              y: 410
            }
          ]
        },
        {
          type: "line",
          name: "Revenue",
          data: [
            {
              x: "Jan",
              y: 180
            },
            {
              x: "Feb",
              y: 620
            },
            {
              x: "Mar",
              y: 476
            },
            {
              x: "Apr",
              y: 220
            },
            {
              x: "May",
              y: 520
            },
            {
              x: "Jun",
              y: 780
            },
            {
              x: "Jul",
              y: 435
            },
            {
              x: "Aug",
              y: 515
            },
            {
              x: "Sep",
              y: 738
            },
            {
              x: "Oct",
              y: 454
            },
            {
              x: "Nov",
              y: 525
            },
            {
              x: "Dec",
              y: 230
            }
          ]
        },
        {
          type: "area",
          name: "Sales",
          data: [
            {
              x: "Jan",
              y: 200
            },
            {
              x: "Feb",
              y: 530
            },
            {
              x: "Mar",
              y: 110
            },
            {
              x: "Apr",
              y: 130
            },
            {
              x: "May",
              y: 480
            },
            {
              x: "Jun",
              y: 520
            },
            {
              x: "Jul",
              y: 780
            },
            {
              x: "Aug",
              y: 435
            },
            {
              x: "Sep",
              y: 475
            },
            {
              x: "Oct",
              y: 738
            },
            {
              x: "Nov",
              y: 454
            },
            {
              x: "Dec",
              y: 480
            }
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          animations: {
            speed: 500
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 8,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1
          },
          toolbar: {
            show: false
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          }
        },
        colors: [
          "rgb(132, 90, 223)",
          "rgba(35, 183, 229, 0.85)",
          "rgba(119, 119, 142, 0.05)"
        ],
        dataLabels: {
          enabled: false
        },
        grid: {
          borderColor: "#f1f1f1",
          strokeDashArray: 3
        },
        stroke: {
          curve: "smooth",
          width: [2, 2, 0],
          dashArray: [0, 5, 0]
        },
        xaxis: {
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return "$" + value;
            }
          }
        },
        tooltip: {
          y: [
            {
              formatter: function (e) {
                return void 0 !== e ? "$" + e.toFixed(0) : e;
              }
            },
            {
              formatter: function (e) {
                return void 0 !== e ? "$" + e.toFixed(0) : e;
              }
            },
            {
              formatter: function (e) {
                return void 0 !== e ? e.toFixed(0) : e;
              }
            }
          ]
        },
        legend: {
          show: true,
          customLegendItems: ["Profit", "Revenue", "Sales"],
          inverseOrder: true
        },
        title: {
          text: "Revenue Analytics with sales & profit (USD)",
          align: "left",
          style: {
            fontSize: ".8125rem",
            fontWeight: "semibold",
            color: "#8c9097"
          }
        },
        markers: {
          hover: {
            sizeOffset: 5
          }
        }
      }
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}
//
//ProfitEarned
export class Profitearned extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Profit Earned",
          data: [44, 42, 57, 86, 58, 55, 70]
        },
        {
          name: "Total Sales",
          data: [34, 22, 37, 56, 21, 35, 60]
        }
      ],
      options: {
        chart: {
          type: "bar",
          height: 180,
          toolbar: {
            show: false
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          }
        },
        grid: {
          borderColor: "#f1f1f1",
          strokeDashArray: 3
        },
        colors: ["rgb(132, 90, 223)", "#e4e7ed"],
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: -100,
                  to: -46,
                  color: "#ebeff5"
                },
                {
                  from: -45,
                  to: 0,
                  color: "#ebeff5"
                }
              ]
            },
            columnWidth: "60%",
            borderRadius: 5
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: undefined
        },
        legend: {
          show: false,
          position: "top"
        },
        yaxis: {
          title: {
            style: {
              color: "#adb5be",
              fontSize: "13px",
              fontFamily: "poppins, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label"
            }
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "";
            }
          }
        },
        xaxis: {
          categories: ["S", "M", "T", "W", "T", "F", "S"],
          axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0
          },
          labels: {
            rotate: -90
          }
        }
      }
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={180}
        />
      </div>
    );
  }
}
//Leads by Source

export class Sourcedata extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [32, 27, 25, 16],
      options: {
        labels: ["My First Dataset"],
        chart: {
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
          height: 250,
          type: "donut"
        },
        dataLabels: {
          enabled: false
        },

        legend: {
          show: false
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "round",
          colors: ["#fff"],
          width: 0,
          dashArray: 0
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: "82%",
              labels: {
                show: false,
                name: {
                  show: true,
                  fontSize: "20px",
                  color: "#495057",
                  offsetY: -4
                },
                value: {
                  show: true,
                  fontSize: "18px",
                  color: undefined,
                  offsetY: 8,
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              }
            }
          }
        },
        colors: [
          "rgb(132, 90, 223)",
          "rgb(35, 183, 229)",
          "rgb(245, 184, 73)",
          "rgb(38, 191, 148)"
        ]
      }
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={250}
        />
      </div>
    );
  }
}

export class Profit extends Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [48],
      options: {
        chart: {
          height: 127,
          width: 100,
          type: "radialBar",
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          }
        },
        colors: ["rgba(255,255,255,0.9)"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "55%",
              background: "#fff"
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: "#4b9bfa",
                fontSize: ".625rem",
                show: false
              },
              value: {
                offsetY: 5,
                color: "#4b9bfa",
                fontSize: ".875rem",
                show: true,
                fontWeight: 600
              }
            }
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Status"]
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          width={100}
          height={127}
        />
      </div>
    );
  }
}
// Deals Statistics

export const Dealsstatistics = [
  {
    id: "1",
    src: face4,
    name: "Mayor Kelly",
    role: "Manufacture",
    mail: "mayorkelly@gmail.com",
    location: "Germany",
    date: "Sep 15 - Oct 12, 2023",
    color: "info",
    checked: ""
  },
  {
    id: "2",
    src: face15,
    name: "Andrew Garfield",
    role: "Development",
    mail: "andrewgarfield@gmail.com",
    location: "Canada",
    date: "Apr 10 - Dec 12, 2023",
    color: "primary",
    checked: "defaultChecked"
  },
  {
    id: "3",
    src: face11,
    name: "Simon Cowel",
    role: "Service",
    mail: "simoncowel234@gmail.com",
    location: "Europe",
    date: "Sep 15 - Oct 12, 2023",
    color: "danger",
    checked: ""
  },
  {
    id: "4",
    src: face8,
    name: "Mirinda Hers",
    role: "Marketing",
    mail: "mirindahers@gmail.com",
    location: "USA",
    date: "Apr 14 - Dec 14, 2023",
    color: "warning",
    checked: "defaultChecked"
  },
  {
    id: "5",
    src: face9,
    name: "Jacob Smith",
    role: "Social Plataform",
    mail: "jacobsmith@gmail.com",
    location: "Singapore",
    date: "Feb 25 - Nov 25, 2023",
    color: "success",
    checked: "defaultChecked"
  }
];
