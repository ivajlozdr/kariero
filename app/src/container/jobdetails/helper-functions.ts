import { FullCareerDetails } from "../quiz/quiz-types";

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
