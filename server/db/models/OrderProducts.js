const Sequelize = require("sequelize");
const db = require("../db");

const OrderProducts = db.define(
  "OrderProducts",
  {
    orderProductQty: {
      type: Sequelize.INTEGER,
      default: 1,
    },
    totalPrice: {
      type: Sequelize.DECIMAL(5, 2),
      min: 0.1,
    },
  },
  { timestamps: false }
);

module.exports = OrderProducts;
