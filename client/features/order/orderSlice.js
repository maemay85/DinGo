import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createOrderAsync = createAsyncThunk(
  "cart/createOrder",
  async (id, productId, quantity) => {
    try {
      const { data } = await axios.post(`/api/order/${id}`, {
        productId,
        quantity,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const fetchSingleOrderAsync = createAsyncThunk(
  "cart/fetchSingleOrder",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/order/${id}`);
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrderAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(fetchSingleOrderAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectOrder = (state) => state.order;

export default orderSlice.reducer;
