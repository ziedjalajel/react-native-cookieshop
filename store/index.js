import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { fetchProducts } from "./actions/productActions";
import { shopsFetch } from "./actions/shopActions";
import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchProducts());
store.dispatch(shopsFetch());

export default store;
