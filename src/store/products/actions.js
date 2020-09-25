import axios from "../axios";

const productsFetched = products => ({
  type: "PRODUCTS_FETCHED",
  payload: products,
});

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("/products");
    console.log(response);
    dispatch(productsFetched(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
