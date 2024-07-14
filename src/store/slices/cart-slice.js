import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = { ...action.payload };

      const ProductIndex = state.findIndex(
        (cartItem) => cartItem.id == product.id
      );
      if (ProductIndex != -1) {
        state[ProductIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    decrementQuantity(state, action) {
      const product = { ...action.payload };

      const ProductIndex = state.findIndex(
        (cartItem) => cartItem.id == product.id
      );
      if (ProductIndex != -1) {
        if (state[ProductIndex].quantity === 1) {
          state.splice(ProductIndex, 1);
        } else {
          state[ProductIndex].quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
