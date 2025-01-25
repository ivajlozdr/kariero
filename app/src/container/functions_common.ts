import { useNavigate } from "react-router-dom";
import { NotificationState } from "./types_common";

export const updatePrimaryColor = () => {
  const rootStyles = getComputedStyle(document.documentElement);
  const primary = rootStyles.getPropertyValue("--primary").trim();
  const primaryWithCommas = primary.split(" ").join(",");
  const primaryHex = rgbToHex(primaryWithCommas);

  return primaryHex;
};

export const rgbToHex = (rgb: string): string => {
  // Уверява се, че входният цвят е във формат "rgb(r, g, b)"
  const result = rgb.match(/\d+/g);
  if (!result || result.length !== 3) {
    throw new Error("Невалиден RGB формат на цвета");
  }

  return `#${result
    .map((x) => parseInt(x).toString(16).padStart(2, "0")) // Преобразува всяка стойност на RGB в HEX
    .join("")}`;
};

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
