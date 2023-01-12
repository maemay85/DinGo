import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProductsAsync = createAsyncThunk("/products", async () => {
  try {
    const { data } = await axios.get("/api/products");
    return data;
  } catch (err) {
    console.log(err.message);
  }
});

const allProductSlice = createSlice({
  name: "allProducts",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

//TODO: we need to add, delete, edit single products

export const selectAllProducts = (state) => {
  return state.allProducts;
};

export default allProductSlice.reducer;
