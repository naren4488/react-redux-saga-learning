import { ADD_TO_CART } from "./constant";

export const addToCart = (data) => {
  console.log("action add to cart is called with data: ", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
