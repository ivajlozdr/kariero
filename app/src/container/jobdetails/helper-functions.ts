import { FullCareerDetails } from "../../types_common";
import chroma from "chroma-js";

/**
 * Извлича нива и проценти от даден текст и добавя липсващата стойност като "Други", ако общата сума не е 100%.
 *
 * @param {string} str - Текстов низ, съдържащ нива и проценти във формат "Ниво: X%".
 * @returns {{ level: string; percentage: number }[]} Масив от обекти, всеки съдържащ:
 * - `level`: Името на нивото (без водещи запетаи и интервали).
 * - `percentage`: Процентът, свързан с нивото.
 * Ако общата сума на процентите е по-малка от 100%, добавя допълнително ниво "Други" с оставащия процент.
 *
 * @example
 * const input = "Бакалавърска степен: 52%, Професионален бакалавър: 29%, Сертификат за след средно образование: 9%";
 * const result = extractLevelsAndPercentages(input);
 * // Резултат:
 * // [
 * //   { level: "Бакалавърска степен", percentage: 52 },
 * //   { level: "Професионален бакалавър", percentage: 29 },
 * //   { level: "Сертификат за след средно образование", percentage: 9 },
 * //   { level: "Други", percentage: 10 }
 * // ]
 */
export const extractLevelsAndPercentages = (
  str: string
): { level: string; percentage: number }[] => {
  const pattern = /(?:^|,\s*)(?<level>.*?): (?<percentage>\d+)%/g;
  const matches: { level: string; percentage: number }[] = [];

  let match;
  while ((match = pattern.exec(str)) !== null) {
    matches.push({
      level: match.groups?.level.trim() || "",
      percentage: parseInt(match.groups?.percentage || "0", 10)
    });
  }

  const totalPercentage = matches.reduce(
    (sum, item) => sum + item.percentage,
    0
  );

  if (totalPercentage < 100) {
    matches.push({
      level: "Други",
      percentage: 100 - totalPercentage
    });
  }

  return matches;
};

/**
 * Генерира цветова скала, базирана на основния цвят и дължината на масива 'education'.
 *
 * @param {string} primaryColor - Основният цвят, върху който се изгражда цветната скала.
 * @param {number} educationLength - Дължината на масива 'education', която определя колко цвята ще съдържа скалата.
 * @returns {string[]} Массив от цветове в HEX формат, създаден на базата на основния цвят.
 */
export const generateColorScale = (
  primaryColor: string,
  educationLength: number
): string[] => {
  return chroma
    .scale([
      chroma(primaryColor).darken(1).saturate(1).hex(),
      chroma(primaryColor).brighten(0.5).saturate(1).hex(),
      chroma(primaryColor).brighten(1.5).saturate(0.5).hex()
    ])
    .mode("lab")
    .domain([0, educationLength - 1])
    .colors(educationLength);
};

/**
 * Функция за филтриране на горещите технологии от данни за технологии.
 *
 * За всяка категория в данните, функцията намира първия елемент в 'example',
 * който съдържа свойството 'hot_technology' и го връща в резултатния масив.
 * Ако не се открие такъв елемент, той не се включва в резултатите.
 *
 * @param {FullCareerDetails} data - Данни за технологиите, съдържащи категории и примери.
 * @returns {any[]} Масив от технологии, които са маркирани като 'hot_technology'.
 */
export const filterHotTechnology = (
  data: FullCareerDetails
): {
  hotTechnologies: { name: string; category: string }[];
  regularTechnologies: { name: string; category: string }[];
} => {
  const hotTechnologies: { name: string; category: string }[] = [];
  const regularTechnologies: { name: string; category: string }[] = [];

  data.tools_technology.technology.category.forEach(
    (categoryItem: any, i: number) => {
      categoryItem.example.forEach((exampleItem: any) => {
        if (exampleItem.hot_technology) {
          hotTechnologies.push({
            name: exampleItem.hot_technology,
            category: data.translated.technology_skills[i]
          });
        } else if (exampleItem.name) {
          regularTechnologies.push({
            name: exampleItem.name,
            category: data.translated.technology_skills[i]
          });
        }
      });
    }
  );

  return { hotTechnologies, regularTechnologies };
};
