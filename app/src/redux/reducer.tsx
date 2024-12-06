const initialState = {
  lang: "bg",
  dir: "ltr",
  class: "dark",
  dataMenuStyles: "dark",
  dataNavLayout: "vertical",
  dataHeaderStyles: "dark",
  dataVerticalStyle: "overlay",
  toggled: "",
  dataNavStyle: "menu-click",
  horStyle: "",
  dataPageStyle: "modern",
  dataWidth: "fullwidth",
  dataMenuPosition: "fixed",
  dataHeaderPosition: "fixed",
  loader: "disable",
  iconOverlay: "",
  colorPrimaryRgb: "154 17 10",
  colorPrimary: "154 17 10",
  bodyBg: "",
  Light: "",
  darkBg: "",
  inputBorder: "",
  bgImg: "",
  iconText: "",
  body: {
    class: ""
  }
};

export default function reducer(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case "ThemeChanger":
      state = {
        ...payload,
        colorPrimaryRgb: payload.class === "dark" ? "154 17 10" : "175 11 72",
        colorPrimary: payload.class === "dark" ? "154 17 10" : "175 11 72"
      };
      return state;

    default:
      return state;
  }
}
