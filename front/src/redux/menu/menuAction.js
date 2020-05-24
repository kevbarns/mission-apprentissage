import { MENU_STATE } from "./menuTypes";

export const setMenuState = (state) => ({
  type: MENU_STATE,
  payload: { state: state },
});
