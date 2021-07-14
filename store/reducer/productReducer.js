import * as actionTypes from "../actions/types";

const initialState = {
  products: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    // case actionTypes.ADD_PRODUCT:
    //   const { newProduct } = action.payload;
    //   return {
    //     ...state,
    //     products: [...state.products, newProduct],
    //   };
    default:
      return state;
  }
};

export default reducer;
