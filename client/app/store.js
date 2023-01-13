import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import singleProductSlice from "../features/singleProduct/singleProductSlice";
import allProductsSlice from "../features/allProducts/allProductsSlice";
import orderProductSlice from "../features/cart/orderProductSlice";
import orderSlice from "../features/order/orderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    singleProduct: singleProductSlice,
    allProducts: allProductsSlice,
    orderProducts: orderProductSlice,
    order: orderSlice

  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
