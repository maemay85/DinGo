import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleOrderProductAsync = createAsyncThunk(
  "cart/fetchAll",
  async () => {
    try {
      const { data } = await axios.get("/api/cart");
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const addOrderProductAsync = createAsyncThunk(
  "cart/addToCart",
  async ({ id, name, price }) => {
    try {
      const { data } = await axios.post("/api/cart", {
        id,
        name,
        price,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteOrderProductAsync = createAsyncThunk(
  "cart/deleteProduct",
  async (id, name) => {
    const { data } = await axios.delete(`/api/cart/${id}`, {
      id,
      name,
    });
    return data;
  }
);

export const editQtyAsync = createAsyncThunk(
  "cart/editQty",
  async ({ id, quantity }) => {
    try {
      const { data } = await axios.put(`/api/cart/${id}`, {
        quantity,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const shoppingCartSlice = createSlice({
  name: "carts",
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

export const selectCart = (state) => state.carts;

export default shoppingCartSlice.reducer;
