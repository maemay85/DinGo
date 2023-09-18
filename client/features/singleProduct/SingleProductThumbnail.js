import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  selectSingleProduct,
} from "./singleProductSlice"
import { addOrderProductAsync } from "../cart/orderProductSlice";
import { fetchSingleOrderAsync } from "../order/orderSlice";

const SingleProductThumbnail = (props) => {

  const product = props.productId;

  //const singleProduct = useSelector(selectSingleProduct);
  const { productName, description, imageUrl, price, inventory } = product;
  const productId = product.id;
  const orderId = 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const orderId = await dispatch(fetchSingleOrderAsync);

    await dispatch(addOrderProductAsync({productId, orderId}));


  };

  return (
    <div id="single-product">
      <h1>{productName}</h1>
      <img src={imageUrl} />
      <p>Price: {price}</p>

      <button type="submit" onClick={handleSubmit}>
        Add to Cart
      </button>
      Detail
    </div>
  );
};

export default SingleProductThumbnail;
