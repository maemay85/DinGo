const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  isComplete: {
    type: Sequelize.BOOLEAN,
    default: false,
  },
});

module.exports = Order;
