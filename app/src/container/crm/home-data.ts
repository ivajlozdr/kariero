import { Category, TempDataType } from "./home-types";

/**
 * Мапинг на имената за категорията на рейтингите.
 *
 * @type {Record<"IMDb" | "Metascore" | "RottenTomatoes", string>}
 */
export const occupationDisplayNames: Record<"Occupations" | "Related", string> =
  {
    Occupations: "Професии",
    Related: "Професии по модела на други"
  };

/**
 * Мапинг на имената за категориите на таблицата.
 *
 * @type {Record<Category, string>}
 */
export const tableCategoryDisplayNames: Record<Category, string> = {
  Directors: "Режисьори",
  Actors: "Актьори",
  Writers: "Сценаристи"
};

/**
 * Генерира опции за награди въз основа на предоставените данни.
 *
 * @param {TempDataType} data - Данни за награди и номинации.
 * @returns {Array<{label: string, value: number}>} Списък с опции за награди.
 */
export const getAwardOptions = (data: TempDataType) => [
  {
    label: "Общ брой спечелени награди",
    value: data.totalAwards?.[0]?.total_awards_wins || 0
  },
  {
    label: "Общ брой номинации за награди",
    value: data.totalAwards?.[0]?.total_awards_nominations || 0
  },
  {
    label: "Общ брой спечелени Оскари",
    value: data.totalAwards?.[0]?.total_oscar_wins || 0
  },
  {
    label: "Общ брой номинации за Оскари",
    value: data.totalAwards?.[0]?.total_oscar_nominations || 0
  }
];

/**
 * Генерира опции за средни стойности въз основа на предоставените данни.
 *
 * @param {TempDataType} data - Данни за средни стойности.
 * @returns {Array<{label: string, value: number}>} Списък с опции за средни стойности.
 */
export const getAveragesOptions = (data: TempDataType) => [
  {
    label: "Среден Боксофис",
    value: data.averageBoxOfficeAndScores?.[0]?.average_box_office || 0
  },
  {
    label: "Среден Метаскор",
    value: data.averageBoxOfficeAndScores?.[0]?.average_metascore || 0
  },
  {
    label: "Среден IMDb Рейтинг",
    value: data.averageBoxOfficeAndScores?.[0]?.average_imdb_rating || 0
  },
  {
    label: "Среден Rotten Tomatoes Рейтинг",
    value: data.averageBoxOfficeAndScores?.[0]?.average_rotten_tomatoes || 0
  }
];
