import { FullCareerDetails } from "../quiz/quiz-types";
import chroma from "chroma-js";

/**
 * Обработва превключването на статуса на любима професия за използване в onClick събитие.
 *
 * Тази функция връща друга функция, която се използва директно в onClick. Тя извиква асинхронно `ToggleFavouriteOccupation`, обработва резултата и показва съобщение за успех или грешка.
 *
 * @param {FullCareerDetails} career - Подробна информация за професията, която ще бъде запазена като любима.
 * @param {string | null} token - Токен за автентикация за API-то.
 * @param {string} date - Датата, на която е запазена любимата професия.
 * @returns {() => void} - Функция, която може директно да се използва в onClick събитие.
 */
export const handleToggleFavouriteOccupation = (
  career: FullCareerDetails,
  token: string | null,
  date: string
): (() => void) => {
  return async () => {
    try {
      const message = await ToggleFavouriteOccupation(career, token, date);
      console.log(message); // Optionally, replace with a notification system
    } catch (error) {
      console.error("Failed to toggle favourite occupation:", error);
    }
  };
};

/**
 * Превключва статуса на любима професия, като изпраща заявка към бекенда.
 *
 * Изпраща POST заявка за запазване на любима професия на потребителя, включително информация за автентикация и дата. Връща съобщение за успех, ако операцията е успешна, или записва грешки в конзолата при неуспех.
 *
 * @param {FullCareerDetails} career - Подробна информация за професията, която ще бъде запазена.
 * @param {string | null} token - Токен за автентикация за API-то.
 * @param {string} date - Датата, на която е запазена любимата професия.
 * @returns {Promise<string>} - Съобщение, потвърждаващо успеха или неуспеха на операцията.
 */
export const ToggleFavouriteOccupation = async (
  career: FullCareerDetails,
  token: string | null,
  date: string
): Promise<string> => {
  try {
    const occupationResponse = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/favourite-occupation`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: token,
          data: career,
          date: date
        })
      }
    );

    if (!occupationResponse.ok) {
      throw new Error(
        `Error saving occupation data for ${career.occupation.title}: ${occupationResponse.statusText}`
      );
    }

    const responseData = await occupationResponse.json();
    return responseData.message || "Successfully favourited!";
  } catch (error) {
    console.error("Error processing data:", error);
    return "An error occurred while trying to save your favourite occupation.";
  }
};

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
export const filterHotTechnology = (data: FullCareerDetails): any[] => {
  return data.tools_technology.technology.category
    .map((categoryItem: any) => {
      // Намери първия пример, който съдържа 'hot_technology'
      const hotTechExample = categoryItem.example.find(
        (exampleItem: any) => exampleItem.hot_technology
      );

      // Връща 'hot_technology' или null ако не е намерен
      return hotTechExample ? hotTechExample.hot_technology : null;
    })
    .filter((item: any) => item !== null); // Филтрира null стойности
};
