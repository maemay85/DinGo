import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  selectSingleProduct,
} from "../features/singleProduct/singleProductSlice";

const SingleProduct = () => {
  const { productId } = useParams();

  const singleProduct = useSelector(selectSingleProduct);
  const { productName, description, imageUrl, price, inventory } =
    singleProduct;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  return (
    <div id="single-product">
      <h1>{productName}</h1>
      <img src={imageUrl} />
      <p>Product description: {description}</p>
      <p>Price: {price}</p>
      <p>Available: {inventory}</p>
    </div>
  );
};

export default SingleProduct;
