import instance from "./instance";

import * as actionTypes from "./types";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/products");
      console.log(res.data);
      dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
// ACTIONS
// export const addProduct = (newProduct) => {
//   return async (dispatch) => {
//     try {
//       const formData = new FormData();
//       for (const key in newProduct) formData.append(key, newProduct[key]);
//       const res = await instance.post(
//         `/shops/${newProduct.shopId}/products`,
//         formData
//       );
//       dispatch({
//         type: actionTypes.ADD_PRODUCT,
//         payload: { newProduct: res.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
