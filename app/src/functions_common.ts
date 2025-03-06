import { useNavigate } from "react-router-dom";
import {
  FavouriteNotificationType,
  FavouriteNotificationState,
  NotificationState,
  NotificationType
} from "./types_common";
import { Offers } from "./container/jobdetails/jobs-types";

/**
 * Обновява основния цвят в HEX формат.
 * Тази функция извлича текущия основен цвят от CSS променливите,
 * конвертира го от RGB в HEX формат и връща стойността в HEX.
 *
 * @returns {string} Основният цвят в HEX формат (например "#ff5733").
 */
export const updatePrimaryColor = () => {
  const rootStyles = getComputedStyle(document.documentElement);
  const primary = rootStyles.getPropertyValue("--primary").trim();
  const primaryWithCommas = primary.split(" ").join(",");
  const primaryHex = rgbToHex(primaryWithCommas);

  return primaryHex;
};

/**
 * Преобразува RGB цвят в HEX формат.
 * Тази функция очаква входната стойност да бъде string във формат "rgb(r, g, b)",
 * където r, g и b са цели числа. Тя извлича тези стойности и ги преобразува в HEX формат.
 *
 * @param {string} rgb String, представляващ RGB цвят (например "rgb(255, 87, 51)").
 * @returns {string} Цвят в HEX формат (например "#ff5733").
 * @throws {Error} Ако входът не е в валиден RGB формат.
 */
export const rgbToHex = (rgb: string): string => {
  // Проверява дали входът е във формат "rgb(r, g, b)"
  const result = rgb.match(/\d+/g);
  if (!result || result.length !== 3) {
    throw new Error("Невалиден RGB формат на цвета");
  }

  return `#${result
    .map((x) => parseInt(x).toString(16).padStart(2, "0")) // Преобразува всяка стойност на RGB в HEX
    .join("")}`;
};

/**
 * Показва известие.
 *
 * @param {React.Dispatch<React.SetStateAction<NotificationState | null>>} setNotification - Функция за задаване на състояние на уведомлението.
 * @param {string} message - Съобщението, което ще се покаже в уведомлението.
 * @param {NotificationType} type - Типът на уведомлението (например "success", "error" или "warning").
 * @returns {void} Няма връщана стойност.
 */
export const showNotification = (
  setNotification: React.Dispatch<
    React.SetStateAction<NotificationState | null>
  >,
  message: string,
  type: NotificationType
) => {
  setNotification({ message, type });
};

/**
 * Проверява дали токенът, съхранен в localStorage или sessionStorage, е валиден,
 * и връща URL за пренасочване, ако токенът не е валиден.
 *
 * @async
 * @function checkTokenValidity
 * @returns {Promise<string | null>} - Връща URL за пренасочване или null, ако токенът е валиден.
 * @throws {Error} - Хвърля грешка, ако заявката за проверка на токена е неуспешна.
 */
export const checkTokenValidity = async (): Promise<string | null> => {
  // Извличане на токена от localStorage или sessionStorage
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  if (!token) {
    // Ако няма намерен токен, връща URL за пренасочване
    return "/signin";
  }

  try {
    // Изпращане на заявка за валидиране на токена
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/token-validation`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token }) // Предаване на токена в тялото на заявката
      }
    );

    const data = await response.json(); // Извличане на отговора като JSON

    if (!data.valid) {
      // Ако "valid" в отговора е false, връща URL за пренасочване
      console.warn("Token is invalid, redirecting to /signin...");
      return "/signin";
    }

    return null; // Токенът е валиден, няма нужда от пренасочване
  } catch (error) {
    // Обработка на грешки при валидирането на токена
    console.error("Error validating token:", error);
    return "/signin"; // Пренасочване към страницата за вход
  }
};

/**
 * Обработва затварянето на известие и предприема действия в зависимост от типа на известието.
 * Ако типът на известието е "грешка", пренасочва потребителя към страницата за вход.
 * След това нулира състоянието на известието.
 *
 * @param {NotificationState | null} notification Текущото състояние на известието или null, ако няма такова.
 * @param {React.Dispatch<React.SetStateAction<NotificationState | null>>} setNotification Функцията за задаване на състоянието на известието.
 * @param {ReturnType<typeof useNavigate>} navigate Функцията navigate от хука `react-router-dom`, използвана за навигация.
 */
export const handleNotificationClose = (
  notification: NotificationState | null,
  setNotification: React.Dispatch<
    React.SetStateAction<NotificationState | null>
  >,
  navigate: ReturnType<typeof useNavigate>
) => {
  if (notification?.type === "error") {
    navigate("/signin");
  }
  setNotification(null);
};

/**
 * Обработва събитието при кликване върху вертикалното меню.
 * Проверява дали 'karieroverticalstyles' в local storage е зададено на 'icontext'.
 * Също така премахва атрибута за overlay ако ширината на екрана е по-голяма от 992px.
 *
 * @param {React.Dispatch<React.SetStateAction<string>>} setVerticalMenuClass Функцията за задаване на състоянието на класа.
 */
export const handleVerticalMenuClick = (
  setVerticalMenuClass: React.Dispatch<React.SetStateAction<string>>
) => {
  if (localStorage.getItem("karieroverticalstyles") === "icontext") {
    setVerticalMenuClass("");
  }

  if (window.innerWidth > 992) {
    const htmlElement = document.documentElement;
    if (htmlElement.getAttribute("icon-overlay") === "open") {
      htmlElement.setAttribute("icon-overlay", "");
    }
  }
};

/**
 * Генерира състоянието на известието за любими кариери.
 * @param {FavouriteNotificationType} type - Типът на известието ("add" или "remove").
 * @returns {FavouriteNotificationState} Обект, съдържащ типа, съобщението и заглавието на известието.
 */
export const getFavouriteNotificationState = (
  type: FavouriteNotificationType
): FavouriteNotificationState => ({
  type,
  message:
    type === "add"
      ? "Успешно добавихте тази професия в списъка ви за любими кариери."
      : "Успешно премахнахте тази професия от списъка ви за любими кариери.",
  title:
    type === "add"
      ? "Кариера добавена в любими"
      : "Кариера премахната от любими"
});

/**
 * Затваря известието за любими кариери.
 * @param {React.Dispatch<React.SetStateAction<FavouriteNotificationState | null>>} setFavouriteNotification - Функция за актуализиране на състоянието на известието.
 */
export const handleFavouriteNotificationClose = (
  setFavouriteNotification: React.Dispatch<
    React.SetStateAction<FavouriteNotificationState | null>
  >
) => {
  setFavouriteNotification(null);
};

/**
 * Извлича предложения за работа въз основа на подадените детайли за кариерата.
 * @param {{ keyword: string; occupation_code: string }[]} careerDetailsArray - Масив от обекти с ключова дума и код на професията.
 * @returns {Promise<Offers[]>} Промис, който връща масив с предложения за работа.
 */
export const fetchJobOffers = async (
  careerDetailsArray: { keyword: string; occupation_code: string }[]
): Promise<Offers[]> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/job-offers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(careerDetailsArray)
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch job offers");
    }

    const { results } = await response.json();

    if (!Array.isArray(results)) {
      throw new Error("Invalid response format");
    }

    console.log("results", results);
    return results;
  } catch (error) {
    console.error("Error fetching job offers:", error);
    return careerDetailsArray.map((career) => ({
      career: career.keyword,
      average_salary: 0,
      job_offers: []
    }));
  }
};
