const db = require("../db");

const User = require("./User");
const Product = require("./Product");
const Order = require("./Order");

User.hasMany(Order);
Order.belongsTo(User);

// // Order.belongsTo(User, {
// //   // through: "UserOrders",
// //   // as: "users",
// //   // foreignKey: "orderId",
// // });

Order.belongsToMany(Product, {
  through: "OrderProducts",
});

Product.belongsToMany(Order, {
  through: "OrderProducts",
});

module.exports = {
  User,
  Order,
  Product,
  db,
};
