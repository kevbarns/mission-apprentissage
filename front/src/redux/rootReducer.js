import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import services from "./catalogue-services/catalogueReducer";
import cookie from "./cookie/cookieReducer";
import menu from "./menu/menuReducer";

const appState = {
  services,
  cookie,
  menu,
};

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    ...appState,
  });
