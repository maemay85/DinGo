import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCartAsync = createAsyncThunk(
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

const cartSlice = createSlice({
  name: "allProducts",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addToCartAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// export const selectAllProducts = (state) => {
//   return state.allProducts;
// };

export default cartSlice.reducer;
