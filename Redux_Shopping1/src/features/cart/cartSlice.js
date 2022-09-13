import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  quantity: 4, //mentioned amount on the video
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id != itemId);
    },
    increaseQuantity: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount += 1;
    },
    decreaseQuantity: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount -= 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.quantity = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
