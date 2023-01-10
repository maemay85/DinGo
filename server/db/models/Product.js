const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  inventory: {
    type: Sequelize.INTEGER,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    default:
      "https://cdn.shopify.com/s/files/1/0550/5912/0300/products/premia-glass-62_800x.jpg?v=1658951916",
  },
  price: {
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false,
    min: 0.0,
  },
});

module.exports = Product;
