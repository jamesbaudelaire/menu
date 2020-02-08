import { combineReducers } from "redux";

import { LS } from "functions/LS";
LS.init();

const restaurantReducer = (state = null, action) => {
  switch (action.type) {
    case "get":
      return (state = action.data);
    default:
      return state;
  }
};

const savedReducer = (state = LS.data.saved, action) => {
  switch (action.type) {
    case "save":
      if (
        state.filter(
          x =>
            x.url == action.data.url && x.restaurant == action.data.restaurant
        ).length == 0
      ) {
        return [...state, action.data];
      } else {
        let items = state.filter(x => x.restaurant == action.data.restaurant);
        return items.filter(x => x.url !== action.data.url);
      }
    case "delete":
      return state.filter(x => x !== action.data);
    default:
      return state;
  }
};

const filterReducer = (state = null, action) => {
  switch (action.type) {
    case "filter":
      if (action.data == state) {
        return "";
      } else {
        return action.data;
      }

    default:
      return state;
  }
};

const lastItemReducer = (state = null, action) => {
  switch (action.type) {
    case "last":
      return action.data;
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  restaurant: restaurantReducer,
  saved: savedReducer,
  filter: filterReducer,
  lastItem: lastItemReducer
});
