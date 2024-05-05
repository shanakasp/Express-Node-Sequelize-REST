// Import Sequelize library and DataTypes
const { DataTypes } = require("sequelize");

// Define the Product model function to create and export the model
module.exports = (sequelize) => {
  // Define the Product model schema
  const Product = sequelize.define(
    "product", // Model name (table name will be "Products" by default)
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      // Additional options for the model
      tableName: "products", // Custom table name
      timestamps: true, // Add createdAt and updatedAt timestamps
    }
  );

  // Return the Product model for use in other parts of the application
  return Product;
};
