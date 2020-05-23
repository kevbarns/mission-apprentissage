import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import services from "./catalogue-services/catalogueReducer";
import cookie from "./cookie/cookieReducer";

const appState = {
  services,
  cookie,
};

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    ...appState,
  });
