import { combineReducers } from "redux";

const darkReducer = (state = false, action) => {
  switch (action.type) {
    case "dark":
      return !state;
    default:
      return state;
  }
};

const restaurantReducer = (state = null, action) => {
  switch (action.type) {
    case "get":
      return (state = action.data);
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  dark: darkReducer,
  restaurant: restaurantReducer
});
