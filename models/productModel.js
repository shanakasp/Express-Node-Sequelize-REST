const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    // Define your product model schema here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Product; // Ensure to return the Product model
};
