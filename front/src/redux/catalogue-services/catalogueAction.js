import { getCatalogue } from "../../pages/Services/ServiceAPI";
import { FETCH_CATALOGUE_REQUEST, FETCH_CATALOGUE_SUCCESS, FETCH_CATALOGUE_FAILURE } from "./catalogueTypes";

export const fetchCatalogueRequest = () => ({
  type: FETCH_CATALOGUE_REQUEST,
});

export const fetchCatalogueSuccess = (services) => ({
  type: FETCH_CATALOGUE_SUCCESS,
  payload: { services },
});

export const fetchCatalogueFailure = (error) => ({
  type: FETCH_CATALOGUE_FAILURE,
  payload: { error },
});

export function fetchCatalogue() {
  return (dispatch) => {
    dispatch(fetchCatalogueRequest());
    return getCatalogue()
      .then(({ data }) => {
        dispatch(fetchCatalogueSuccess(data.services));
        return data.services;
      })
      .catch((error) => dispatch(fetchCatalogueFailure(error)));
  };
}
