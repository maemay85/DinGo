import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import SignUp from "../features/auth/SignUp";
import Home from "../features/home/Home";
import { me } from "./store";
import SingleProduct from "../features/singleProduct/SingleProduct";
import AllProducts from "../features/allProducts/AllProducts";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      <Routes>
        {/* <Route path="/*" element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={<AuthForm name="login" displayName="Login" />}
        />
        <Route
          path="/signup"
          element={<SignUp name="signup" displayName="Sign Up" />}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
