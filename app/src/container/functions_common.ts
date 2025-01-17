export const updatePrimaryColor = () => {
  const rootStyles = getComputedStyle(document.documentElement);
  const primary = rootStyles.getPropertyValue("--primary").trim();
  const primaryWithCommas = primary.split(" ").join(",");
  const primaryHex = rgbToHex(primaryWithCommas);

  return primaryHex;
};

// Преобразува RGB цвят в HEX формат
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
