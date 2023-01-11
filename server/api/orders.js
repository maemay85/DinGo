const router = require("express").Router();
const Order = require("../db/models/Order");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

router.get("/:orderId", async (req, res, next) => {
  try {
    res.json(await Order.findByPk(req.params.orderId));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.send(await Order.create(req.body));
  } catch (err) {
    next(err);
  }
});

router.put("/:orderId", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    res.send(await order.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete("/:orderId", async (req, res, next) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.orderId,
      },
    });
    res.json(req.params.orderId);
  } catch (err) {
    next(err);
  }
});
