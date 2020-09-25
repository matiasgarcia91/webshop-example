import axios from "../axios";

export const addToCart = productId => ({
  type: "ADD_TO_CART",
  payload: productId,
});
export const removeFromCart = productId => ({
  type: "REMOVE_CART",
  payload: productId,
});

const productsFetched = products => ({
  type: "PRODUCTS_FETCHED",
  payload: products,
});

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("/products");
    console.log("product", response);
    dispatch(productsFetched(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
