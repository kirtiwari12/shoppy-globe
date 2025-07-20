import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity -= 1;
      }
      if (existingProduct.quantity === 0) {
        state.cart = state.cart.filter((item) => item.id !== product.id);
      }
    },
    deleteFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;

// Custom Selectors

export const useCart = () => useSelector((state) => state.cart.cart);

export const useProductQuantity = (productId) =>
  useSelector(
    (state) =>
      state.cart.cart.find((item) => item.id === productId)?.quantity || 0
  );

export const useTotalItemsInCart = () =>
  useSelector((state) =>
    state.cart.cart.reduce((total, item) => total + item.quantity, 0)
  );

export const useCartTotal = () =>
  useSelector((state) =>
    state.cart.cart
      .reduce((total, item) => {
        const itemTotal = +(item.price * item.quantity).toFixed(2);
        return total + itemTotal;
      }, 0)
      .toFixed(2)
  );
