import { COOKIE_STATE } from "./cookieTypes";

const initialState = {
  state: true,
};

export default function cookieReducer(state = initialState, action) {
  switch (action.type) {
    case COOKIE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
