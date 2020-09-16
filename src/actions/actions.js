import axios from "axios";
import { apiKey } from "../Components/variables";
export function fetchProperties(cit, state) {
  let city = cit.split("");
  for (let e = 0; e <= city.length - 1; e++) {
    if (city[e] === " ") {
      console.log(city[e]);
      city[e + 1] = city[e + 1].toUpperCase();
    }
  }
  city = city.join("");
  city = city.replace(/ /g, "%20");
  city = city[0].toUpperCase() + city.slice(1);

  return (dispatch) => {
    dispatch({ type: "LOADING_PROPERTIES" });
    axios
      .get(
        `https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=${city}&limit=200&offset=0&state_code=${state}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": apiKey
          }
        }
      )
      .then((response) => {
        dispatch({
          type: "FETCH_PROPERTIES",
          payload: response.data.properties
        });
        console.log(21, response.data);
      })
      .catch((err) => {
        dispatch({ type: "FETCH_PROPERTIES_ERROR", payload: err });
      });
  };
}
export function filterProperties(
  min = null,
  max = null,
  beds = null,
  baths = null,
  type = null
) {
  console.log(type);
  return (dispatch) => {
    min = Number(min) >= 0 ? Number(min) : 0;
    max = max !== null ? Number(max) : 10000000000000000000000000;
    beds = beds !== null ? Number(beds) : 0;
    baths = baths !== null ? Number(baths) : 0;
    type = type !== "" ? type : null;
    dispatch({
      type: "SET_FILTER_PROPERTIES",
      payload: { min, max, beds, baths, type }
    });
  };
}
export function setPageProperties(page) {
  console.log(page);
  return (dispatch) => {
    dispatch({
      type: "SET_PAGE_PROPERTIES",
      payload: page
    });
  };
}

export function mostPopular() {
  return (dispatch) => {
    dispatch({
      type: "MOST_POPULAR"
    });
  };
}
export function highPrice() {
  return (dispatch) => {
    dispatch({
      type: "HIGH_PRICE"
    });
  };
}
export function Newest() {
  return (dispatch) => {
    dispatch({
      type: "NEWEST"
    });
  };
}
export function lowPrice() {
  return (dispatch) => {
    dispatch({
      type: "LOW_PRICE"
    });
  };
}

export function setPropertyType(type) {
  return (dispatch) => {
    dispatch({
      type: "SET_TYPE_PROPERTIES",
      payload: type
    });
  };
}
export function reset() {
  return (dispatch) => {
    dispatch({
      type: "RESET"
    });
  };
}
