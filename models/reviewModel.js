// Import Sequelize library and DataTypes
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "review",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "reviews",
      timestamps: true,
    }
  );

  return Review;
};
