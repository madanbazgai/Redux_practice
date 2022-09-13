import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 10 },
  reducers: {
    increment(state, action) {
      state.counter += 1;
    },
    decrement(state, action) {
      state.counter -= 1;
    },
    addTen(state, action) {
      state.counter += action.payload;
    },
    timesTwo(state, action) {
      state.counter *= action.payload;
    },
  },
});

export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
