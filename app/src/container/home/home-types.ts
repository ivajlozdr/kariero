export interface RedirectCardProps {
  href: string;
  title: string;
  description: string;
}

export interface Option {
  label: string;
  name?: string | undefined;
  value: number;
  icon: string;
  subValue?: number;
}

export interface OccupationSeriesType {
  regularOccupations: TopRecommendedOccupation[];
  relatedOccupations: MostNeededQuality[];
}

export type QualitiesCategory =
  | "Abilities"
  | "Knowledge"
  | "Skills"
  | "TechnologySkills"
  | "WorkActivities";

// Обобщени данни за платформата
export interface DataType {
  usersCount: UsersCount[];
  distinctOccupations: DistinctOccupations;
  topRecommendedOccupations: TopRecommendedOccupation[];
  topRecommendedRelatedOccupations: MostNeededQuality[];
  mostNeededAbilities: MostNeededQuality[];
  mostNeededKnowledge: MostNeededQuality[];
  mostNeededSkills: MostNeededQuality[];
  mostNeededTasks: MostNeededQuality[];
  mostNeededTechnologySkills: MostNeededQuality[];
  mostNeededWorkActivities: MostNeededQuality[];
  mostSelectedPersonalityTypes: Most[];
  mostSelectedWorkEnvironments: Most[];
  mostSelectedJobPriorities: Most[];
  mostSelectedEducationLevels: Most[];
  mostSelectedCareerGoals: Most[];
  mostSelectedJobSatisfactionLevels: Most[];
  mostPreferredWorkStyleStructure: Most[];
  mostPreferredWorkStyleCollaboration: Most[];
  mostPreferredWorkStyleWorkEnvironment: Most[];
}

export interface DistinctOccupations {
  count: number;
  data: TopRecommendedOccupation[];
}

export interface TopRecommendedOccupation {
  code: string;
  title_bg: string;
  title_en: string;
  description: string;
  bright_outlook: BrightOutlook;
  education: null | string;
  recommendation_count?: number;
}

export enum BrightOutlook {
  GrowRapidly = '["Grow Rapidly"]',
  Null = "null"
}

export interface MostNeededQuality {
  onet_id: string | number;
  name_en: string;
  name_bg: string;
  occurrence_count?: number;
  recommendation_count?: number;
}

export interface Most {
  preference: string;
  occurrence_count: number;
}

export interface UsersCount {
  user_count: number;
}
// ARTCOMPASS TEMP DATA BELOW

// Общи данни за режисьори, актьори и писатели
export interface CommonData {
  avg_imdb_rating: number; // Среден рейтинг в IMDb
  avg_metascore: number; // Среден Metascore
  total_box_office: string; // Общо приходи от бокс офис
  avg_rotten_tomatoes: string; // Среден рейтинг в Rotten Tomatoes
  avg_runtime: number; // Средно времетраене
  total_wins: string; // Общо спечелени награди
  total_nominations: string; // Общо номинации
  prosperityScore: number; // Индекс на процъфтяването
  total_recommendations: number; // Общо препоръки
}

// Данни свързани с режисьори
export interface DirectorData extends CommonData {
  director: string; // Име на режисьора
  director_en?: string; // Име на режисьора на английски
  director_bg: string; // Име на режисьора на български
  movie_count: number; // Брой филми
  director_count: number; // Брой режисьори (преименувано, за да се избегне конфликт с други интерфейси)
}

// Данни свързани с актьори
export interface ActorData extends CommonData {
  actor?: string; // Име на актьора
  actor_en?: string; // Име на актьора на английски
  actor_bg: string; // Име на актьора на български
  movie_count: number; // Брой филми
  actor_count: number; // Брой актьори (преименувано, за да се избегне конфликт)
}

// Данни свързани с писатели
export interface WriterData extends CommonData {
  writer?: string; // Име на писателя
  writer_en?: string; // Име на писателя на английски
  writer_bg: string; // Име на писателя на български
  movie_count: number; // Брой филми
  writer_count: number; // Брой писатели (преименувано, за да се избегне конфликт)
}

// Тип данни за филтрирани таблици (съюз от данни за режисьори, актьори и писатели)
export type FilteredTableData = (DirectorData | ActorData | WriterData)[];

// Данни за потребителите
export type UsersCountData = {
  user_count: number; // Брой потребители
};

export interface UserData {
  id: number; // Идентификатор на потребителя
  first_name: string; // Първо име
  last_name: string; // Фамилно име
  email: string; // Имейл адрес
}

// Данни свързани с жанрове
export interface GenrePopularityData {
  [year: string]: {
    [genre: string]: {
      genre_en: string; // Жанр на английски
      genre_bg: string; // Жанр на български
      genre_count: number; // Брой на жанра
    };
  };
}

// Данни свързани с филми
export interface MovieData {
  title_en: string; // Заглавие на филма на английски
  boxOffice: number | string; // Бокс офис приходи
  imdbRating: number; // Рейтинг в IMDb
  metascore: number; // Metascore рейтинг
  rottenTomatoes: number; // Рейтинг в Rotten Tomatoes
  type?: "movie" | "series"; // Тип (филм или сериал)
  title_bg: string; // Заглавие на филма на български
}

// Данни свързани с препоръки
export interface RecommendationData extends MovieData {
  id: number; // Идентификатор на препоръката
  imdbID: string; // IMDb идентификатор
  awards: string; // Награди
  recommendations: number; // Брой препоръки
  oscar_wins: string; // Спечелени Оскари
  oscar_nominations: string; // Номинации за Оскар
  total_wins: string; // Общо спечелени награди
  total_nominations: string; // Общо номинации
}

// Данни за изчисляване на средни стойности за приходи и рейтинги
export interface AverageBoxOfficeAndScores {
  average_box_office: string; // Средни приходи от бокс офис
  average_metascore: string; // Среден Metascore
  average_imdb_rating: string; // Среден рейтинг в IMDb
  average_rotten_tomatoes: string; // Среден рейтинг в Rotten Tomatoes
}

// Данни за страните
export interface CountryData {
  country_en: string; // Страна на английски
  country_bg: string; // Страна на български
  count: number; // Брой филми от тази страна
}

// Данни за изчисляване на процъфтяването на филми и сериали
export interface MovieProsperityData {
  imdbID: string; // IMDb идентификатор
  title_en: string; // Заглавие на филма на английски
  title_bg: string; // Заглавие на филма на български
  type: string; // Тип на филма (филм или сериал)
  imdbRating: string; // Рейтинг в IMDb
  metascore: string; // Metascore рейтинг
  total_box_office: string; // Общо приходи от бокс офис
  rotten_tomatoes: string; // Рейтинг в Rotten Tomatoes
  total_recommendations: number; // Брой препоръки
  total_wins: string; // Общо спечелени награди
  total_nominations: string; // Общо номинации
  prosperityScore: number; // Индекс на процъфтяването
  genre_en: string; // Жанр на английски
  genre_bg: string; // Жанр на български
}

// Структура на данни за популярността на жанровете през времето
export interface GenreSeriesData {
  name: string; // Име на жанра (напр. Криминален, Драма)
  data: { x: string; y: number }[]; // Данни: година (x) и брой жанра (y)
}

// Формат на данни за топ жанровете
export type HeatmapData = GenreSeriesData[];

export type TempDataType = {
  usersCount: UsersCountData[]; // Брой потребители
  topRecommendations: any[]; // Топ препоръки
  topGenres: any[]; // Топ жанрове
  genrePopularityOverTime: Record<string, any>; // Популярност на жанровете през времето
  topActors: any[]; // Топ актьори
  topDirectors: any[]; // Топ режисьори
  topWriters: any[]; // Топ писатели
  oscarsByMovie: any[]; // Оскари по филми
  totalAwardsByMovieOrSeries: any[]; // Общо награди по филми или сериали
  totalAwards: any[]; // Общо награди
  sortedDirectorsByProsperity: any[]; // Подредени режисьори по процъфтяване
  sortedActorsByProsperity: any[]; // Подредени актьори по процъфтяване
  sortedWritersByProsperity: any[]; // Подредени писатели по процъфтяване
  sortedMoviesByProsperity: any[]; // Подредени филми по процъфтяване
  sortedMoviesAndSeriesByMetascore: any[]; // Подредени филми и сериали по Metascore
  sortedMoviesAndSeriesByIMDbRating: any[]; // Подредени филми и сериали по IMDb рейтинг
  sortedMoviesAndSeriesByRottenTomatoesRating: any[]; // Подредени филми и сериали по Rotten Tomatoes рейтинг
  averageBoxOfficeAndScores: any[]; // Средни стойности за бокс офис и рейтинги
  topCountries: any[]; // Топ страни
  [key: `sorted${string}ByProsperity`]: any[]; // Подредени данни по процъфтяване
};

// Категориен тип за роли
export type Category = "Actors" | "Directors" | "Writers"; // Роли: Актьори, Режисьори, Писатели
