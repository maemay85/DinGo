import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  selectSingleProduct,
} from "../features/singleProduct/singleProductSlice";
import { addOrderProductAsync } from "../cart/cartSlice";

const SingleProduct = () => {
  const { productId } = useParams();

  const singleProduct = useSelector(selectSingleProduct);
  const { productName, description, imageUrl, price, inventory } =
    singleProduct;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch({ productId, orderId });
  };

  return (
    <div id="single-product">
      <h1>{productName}</h1>
      <img src={imageUrl} />
      <p>Product description: {description}</p>
      <p>Price: {price}</p>
      <p>Available: {inventory}</p>

      <button type="submit" onSubmit={handleSubmit}>
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;
