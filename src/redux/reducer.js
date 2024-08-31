import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  //   console.log("cart data reducer is called ", action);
  //   return data;
  // } else {
  //   return "no action called";
  // }

  switch (action.type) {
    case ADD_TO_CART:
      console.log("add to cart reducer is called ", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("remove from cart reducer", action);
      return action.data;
    default:
      return [];
  }
};
