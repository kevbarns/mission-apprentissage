import API from "../../config/api";

export function getCatalogue() {
  return API.get("/catalogue-services");
}
