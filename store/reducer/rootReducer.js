import { combineReducers } from "redux";
import shopReducer from "./shopReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  shops: shopReducer,
  products: productReducer,
});
export default rootReducer;
