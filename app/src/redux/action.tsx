export const ThemeChanger = (value: any) => async (dispatch: any) => {
  dispatch({
    type: "ThemeChanger",
    payload: value
  });
};
