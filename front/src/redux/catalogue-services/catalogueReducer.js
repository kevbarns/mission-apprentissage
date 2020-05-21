import { FETCH_CATALOGUE_REQUEST, FETCH_CATALOGUE_SUCCESS, FETCH_CATALOGUE_FAILURE } from "./catalogueTypes";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATALOGUE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CATALOGUE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.services,
      };
    case FETCH_CATALOGUE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    default:
      return state;
  }
}
