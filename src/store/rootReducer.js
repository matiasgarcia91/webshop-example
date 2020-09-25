// src/store/reducer.js
import { combineReducers } from "redux";
import productsReducer from "./products/reducer";

const reducer = combineReducers({
  products: productsReducer,
  // etc.
});

export default reducer;
