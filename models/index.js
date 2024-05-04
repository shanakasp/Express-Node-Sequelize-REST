const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/dbConfig");
const productModel = require("./productModel");
const reviewModel = require("./reviewModel");

// Create a new Sequelize instance with database configuration
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Define database object to store Sequelize instance and models
const db = {
  Sequelize, // Sequelize constructor
  sequelize, // Sequelize instance (connected to database)
};

// Initialize and associate models
db.products = productModel(sequelize, DataTypes);
db.reviews = reviewModel(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes, re-sync Done");
});

// Export the initialized Sequelize instance and models
module.exports = db;
