import { MENU_STATE } from "./menuTypes";

const initialState = {
  state: false,
};

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
