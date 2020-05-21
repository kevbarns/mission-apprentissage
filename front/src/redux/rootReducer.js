import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import services from "./catalogue-services/catalogueReducer";

const appState = {
  services,
};

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    ...appState,
  });
