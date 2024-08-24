// Store do Redux

import { createStore } from "redux";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...state,
        app_title: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
