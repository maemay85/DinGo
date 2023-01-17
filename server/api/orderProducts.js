const router = require("express").Router();
// const OrderProducts = require("../db/models/OrderProducts");
// const Order = require("../db/models/Order");
const { Order, User, OrderProducts, Product } = require("../db/models");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const orderProducts = await OrderProducts.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
    });
    res.json(orderProducts);
  } catch (err) {
    next(err);
  }
});

/* router.get("/:orderProductsId", async (req, res, next) => {
  try {
    res.json(await OrderProducts.findByPk(req.params.orderProductsId));
  } catch (err) {
    next(err);
  }
}); */

router.post("/", async (req, res, next) => {
  try {
    // if order exists, add product to order
    const id = req.body.id;
    const productId = req.body.productId;
    // console.log("PRODUCT ID ", productId);
    const [order, created] = await Order.findOrCreate({
      where: {
        isComplete: false,
        userId: id,
      },
    });
    // console.log("ORDER", order);
    // const user = await User.findByToken(id);

    // const addToCart = await OrderProducts.build(req.body);
    // addToCart.setOrder(order, { save: false });
    // await addToCart.save();
    // const returnAddToCart = addToCart.toJSON();
    // returnAddToCart.order = order;
    // res.json(returnAddToCart);
    await order.addProduct(productId);
    const reload = await order.reload({ include: Product });
    console.log("RELOAD ", reload);
  } catch (err) {
    next(err);
  }
});

// router.post("/", async(req, res, next) => {
//   try {
//     res.json(await OrderProducts.create(req.body))
//   } catch(err) {
//     next(err)
//   }
// })

router.put("/:orderProductsId", async (req, res, next) => {
  try {
    const orderProducts = await OrderProducts.findByPk(
      req.params.orderProductsId
    );
    res.send(await orderProducts.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete("/:orderProductsId", async (req, res, next) => {
  try {
    await OrderProducts.destroy({
      where: {
        id: req.params.orderProductsId,
      },
    });
    res.json(req.params.orderProductsId);
  } catch (err) {
    next(err);
  }
});
