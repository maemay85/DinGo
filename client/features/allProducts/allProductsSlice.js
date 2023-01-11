import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk("/products", async () => {
  try {
    const { data } = await axios.get("/products");
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
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default allProductSlice.reducer;
