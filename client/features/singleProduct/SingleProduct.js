import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct, selectSingleProduct } from "./singleProductSlice";
import { addOrderProductAsync } from "../cart/orderProductSlice";
import { fetchSingleOrderAsync } from "../order/orderSlice";
console.log("hello");
const SingleProduct = () => {
  const { id } = useSelector((state) => state.auth.me);
  const { productId } = useParams();
  const product = useSelector((state) => state.singleProduct);
  console.log("product", product);
  // console.log("id", id);
  // console.log("USER", user);
  // console.log("product.id", product.id);

  // const { productName, description, imageUrl, price, inventory } = product;
  // const productId = product.id;
  const orderId = 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const orderId = await dispatch(fetchSingleOrderAsync);
    await dispatch(addOrderProductAsync({ productId, orderId }));
  };

  return (
    <>
      {product && product.id ? (
        <div id="single-product">
          <h1>{product.productName}</h1>
          <img src={product.imageUrl} />
          <p>Product description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Available: {product.inventory}</p>

          <button type="submit" onClick={handleSubmit}>
            Add to Cart
          </button>
        </div>
      ) : null}
    </>
  );
};

/* return (
    <div className="single-item">
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: "center",
          mt: 30,
        }}
      >
        <Card raised sx={{ width: 600, height: 850, ml: 10, mt: 8 }}>
          <div key={productId}>
            <Grid align="center">
              <CardMedia
                component="img"
                image={imageUrl}
                sx={{ height: 500, width: 500, mt: 1 }}
              />
            </Grid>
            <CardContent align="center">
              <Typography variant="p" align="center">
                {name}
              </Typography>
              <br />
              <br />
              <Typography variant="p" align="center">
                {description}
              </Typography>
              <br />
              <br />
              <Typography variant="h5" align="center">
                Price
              </Typography>
              <Typography variant="p" align="center">
                ${price}
              </Typography>
            </CardContent>
          </div>
          <Grid align="center">
            <Button
              type="submit"
              display="flex"
              onClick={async (evt) => {
                evt.preventDefault();
                await dispatch(addOrderProductAsync({ userId, productId }));
              }}
            >
              Add to Cart
            </Button>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
};

*/
export default SingleProduct;
