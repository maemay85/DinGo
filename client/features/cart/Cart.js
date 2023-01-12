// View Cart, Edit Cart, Checkout
// Total Qty, Total Price

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleOrderProductAsync,
  deleteOrderProductAsync,
  selectCart,
} from "./orderProductSlice";
import { createOrderAsync } from "./orderSlice";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

const Cart = ({ Cart }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  useEffect(() => {
    dispatch(fetchSingleOrderProductAsync());
  }, [dispatch]);

  return (
    <div className="all-items">
      <h1>Check out your Shopping Cart!</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: "center",
        }}
      >
        {cart.length < 1 && (
          <div>
            <h2>Your shopping cart is empty!</h2>
          </div>
        )}
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <Card
                raised
                sx={{
                  width: 280,
                  ml: 10,
                  mb: 3,
                  padding: "0.1em",
                }}
              >
                <CardMedia
                  component="img"
                  image={product.imageUrl}
                  height="300"
                  width="300"
                />
                <CardContent>
                  <Link to={`/products/${product.productId}`}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {product.name}
                    </Typography>
                  </Link>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {product.price}
                  </Typography>
                  <button
                    type="delete"
                    onClick={async (evt) => {
                      evt.preventDefault();
                      await dispatch(
                        deleteOrderProductAsync(
                          product.id,
                          product.name,
                          product.price
                        )
                      );
                      await dispatch(fetchSingleOrderProductAsync());
                    }}
                  >
                    Delete Item
                  </button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </Grid>
      <button
        type="submit"
        onClick={async (evt) => {
          evt.preventDefault();
          await dispatch(createOrderAsync(cart));
        }}
      >
        Checkout!
      </button>
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default Cart;
