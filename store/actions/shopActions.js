import instance from "./instance";

import * as actionTypes from "./types";

export const shopsFetch = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/shops");

      dispatch({
        type: actionTypes.FETCH_SHOPS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// export const addShop = (newShop) => {
//   return async (dispatch) => {
//     try {
//       const formData = new FormData();
//       for (const key in newShop) formData.append(key, newShop[key]);
//       const res = await instance.post("/shops", formData);
//       dispatch({
//         type: actionTypes.ADD_SHOPS,
//         payload: { newShop: res.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
