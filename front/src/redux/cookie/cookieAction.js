import { COOKIE_STATE } from "./cookieTypes";

export const setCookieState = (state) => ({
  type: COOKIE_STATE,
  payload: { state: false },
});

