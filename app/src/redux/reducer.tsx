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
  colorPrimaryRgb: "37 102 91",
  colorPrimary: "37 102 91",
  colorSecondary: "63 135 118",
  colorTertiary: "92, 110, 133",
  bodyBgLighter: "35 37 40",
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
        bodyBgLighter: payload.class === "dark" ? "35 37 40" : "255 255 255",
        colorPrimaryRgb: payload.class === "dark" ? "76 181 174" : "37 102 91",
        colorPrimary: payload.class === "dark" ? "76 181 174" : "37 102 91",
        colorSecondary: payload.class === "dark" ? "136 229 204" : "63 135 118",
        colorTertiary: payload.class === "dark" ? "90 118 149" : "92 110 133"
      };
      return state;

    default:
      return state;
  }
}
