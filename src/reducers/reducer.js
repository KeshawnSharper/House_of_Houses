import initState from "./initState";

export const StoreReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING_PROPERTIES":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        loading: true
      };
    case "MOST_POPULAR":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        properties: state.properties.sort((a, b) => (a.rank > b.rank ? 1 : -1)),
        pageProperties: state.properties
          .sort((a, b) => (a.rank > b.rank ? 1 : -1))
          .slice(10 * (1 - 1), 10 * 1)
      };
    case "FETCH_PROPERTIES":
      // Update total price of cart items
      // Subtract item base price + item quantity
      console.log(action.payload);
      return {
        ...state,
        properties: action.payload,
        pageProperties: action.payload.slice(10 * (1 - 1), 10 * 1),
        resetProperties: action.payload,
        loading: false
      };
    case "HIGH_PRICE":
      // Update total price of cart items
      // Subtract item base price + item quantity
      console.log(action.payload);
      return {
        ...state,
        properties: state.properties.sort((a, b) =>
          a.price < b.price ? 1 : -1
        ),
        pageProperties: state.properties
          .sort((a, b) => (a.price < b.price ? 1 : -1))
          .slice(10 * (1 - 1), 10 * 1)
      };
    case "LOW_PRICE":
      // Update total price of cart items
      // Subtract item base price + item quantity
      console.log(action.payload);
      return {
        ...state,
        properties: state.properties.sort((a, b) =>
          a.price > b.price ? 1 : -1
        ),
        pageProperties: state.properties
          .sort((a, b) => (a.price > b.price ? 1 : -1))
          .slice(10 * (1 - 1), 10 * 1)
      };
    case "NEWEST":
      // Update total price of cart items
      // Subtract item base price + item quantity
      console.log(action.payload);
      return {
        ...state,
        properties: state.properties.sort((a, b) =>
          a.last_update < b.last_update ? 1 : -1
        ),
        pageProperties: state.properties
          .sort((a, b) => (a.last_update < b.last_update ? 1 : -1))
          .slice(10 * (1 - 1), 10 * 1)
      };
    case "FETCH_PROPERTIES_ERROR":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        loading: false,
        error: true
      };
    case "RESET_PROPERTIES":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        properties: state.resetProperties,
        pageProperties: state.resetPropertie.slice(10 * (1 - 1), 10 * 1)
      };
    case "SET_FILTER_PROPERTIES":
      // Update total price of cart items
      // Subtract item base price + item quantity
      console.log(action.payload);
      if (action.payload.type === null) {
        return {
          ...state,

          properties: state.resetProperties.filter(
            (property) =>
              property.price >= action.payload.min &&
              property.price <= action.payload.max &&
              property.beds >= action.payload.beds &&
              property.baths >= action.payload.baths
            // property.prop_type === action.payload.prop_type
          ),
          pageProperties: state.resetProperties
            .filter(
              (property) =>
                property.price >= action.payload.min &&
                property.price <= action.payload.max &&
                property.beds >= action.payload.beds &&
                property.baths >= action.payload.baths
            )
            .slice(10 * (1 - 1), 10 * 1)
        };
      } else {
        return {
          ...state,

          properties: state.resetProperties.filter(
            (property) =>
              property.price >= action.payload.min &&
              property.price <= action.payload.max &&
              property.beds >= action.payload.beds &&
              property.baths >= action.payload.baths &&
              property.prop_type === action.payload.type
          ),
          pageProperties: state.resetProperties
            .filter(
              (property) =>
                property.price >= action.payload.min &&
                property.price <= action.payload.max &&
                property.beds >= action.payload.beds &&
                property.baths >= action.payload.baths &&
                property.prop_type === action.payload.type
            )
            .slice(10 * (1 - 1), 10 * 1)
        };
      }
    case "SET_PAGE_PROPERTIES":
      // Update total price of cart items
      // Subtract item base price + item quantity
      console.log(action.payload);
      return {
        ...state,
        pageProperties: state.properties.slice(
          10 * (Number(action.payload) - 1),
          10 * Number(action.payload)
        )
      };
    case "SET_MAX_PROPERTIES":
      // Update total price of cart items
      // Subtract item base price + item quantity
      console.log(action.payload);
      return {
        ...state,
        properties: state.properties.filter(
          (property) => property.price <= action.payload
        )
      };
    case "SET_BEDS_PROPERTIES":
      // Update total price of cart items
      // Subtract item base price + item quantity
      console.log(action.payload);
      return {
        ...state,
        properties: state.properties.filter(
          (property) => property.beds >= action.payload
        )
      };
    case "SET_BATHS_PROPERTIES":
      // Update total price of cart items
      // Subtract item base price + item quantity
      console.log(action.payload);
      return {
        ...state,
        properties: state.properties.filter(
          (property) => property.baths >= action.payload
        )
      };

    case "SET_TYPE_PROPERTIES":
      // Update total price of cart items
      // Subtract item base price + item quantity
      console.log(action.payload);
      return {
        ...state,
        properties: state.properties.filter(
          (property) => property.prop_type === action.payload
        ),
        pageProperties: state.properties
          .filter((property) => property.prop_type === action.payload)
          .slice(10 * (1 - 1), 10 * 1)
      };
    case "RESET":
      // Update total price of cart items
      // Subtract item base price + item quantity
      console.log(action.payload);
      return {
        ...state,
        properties: state.resetProperties,
        pageProperties: state.resetProperties.slice(10 * (1 - 1), 10 * 1)
      };
    default:
      return initState;
  }
};
