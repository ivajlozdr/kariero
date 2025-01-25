import { useNavigate } from "react-router-dom";
import { NotificationState } from "./types_common";

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
