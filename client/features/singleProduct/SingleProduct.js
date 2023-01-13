import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  selectSingleProduct,
} from "./singleProductSlice"
import { addOrderProductAsync } from "../cart/orderProductSlice";

const SingleProduct = (props) => {
  const productId = props.productId;


  const singleProduct = useSelector(selectSingleProduct);
  const { productName, description, imageUrl, price, inventory } =
    singleProduct;
  const orderId = 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addOrderProductAsync({productId, orderId}));
  };

  return (
    <div id="single-product">
      <h1>{productName}</h1>
      <img src={imageUrl} />
      <p>Product description: {description}</p>
      <p>Price: {price}</p>
      <p>Available: {inventory}</p>

      <button type="submit" onClick={handleSubmit}>
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;
