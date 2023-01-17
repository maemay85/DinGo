import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleOrderProductAsync = createAsyncThunk(
  "cart/fetchAll",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/orderProducts/${id}`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const addOrderProductAsync = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, orderId, id }) => {
    try {
      const { data } = await axios.post("/api/orderProducts", {
        productId,
        orderId,
        id,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteOrderProductAsync = createAsyncThunk(
  "orderProduct/deleteProduct",
  async (id, name) => {
    const { data } = await axios.delete(`/api/orderProducts/${id}`, {
      id,
      name,
    });
    return data;
  }
);

export const editQtyAsync = createAsyncThunk(
  "orderProduct/editQty",
  async ({ id, quantity }) => {
    try {
      const { data } = await axios.put(`/api/orderProducts/${id}`, {
        quantity,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const orderProductSlice = createSlice({
  name: "orderProducts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleOrderProductAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addOrderProductAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(editQtyAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteOrderProductAsync.fulfilled, (state, action) => {
      return state.filter((product) => product.productId != action.payload);
    });
  },
});

export const selectOrderProduct = (state) => state.orderProducts;

export default orderProductSlice.reducer;
