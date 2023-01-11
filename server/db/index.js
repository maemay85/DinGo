const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");

// User.hasMany(Order);
// Order.belongsTo(User);

// // Order.belongsTo(User, {
// //   // through: "UserOrders",
// //   // as: "users",
// //   // foreignKey: "orderId",
// // });

// Order.belongsToMany(Product, {
//   through: "OrderProducts",
//   as: "products",
//   foreignKey: "orderId",
// });

// Product.belongsToMany(Order, {
//   through: "OrderProducts",
//   as: "orders",
//   foreignKey: "productId",
// });

module.exports = {
  User,
  Order,
  Product,
  db,
};
