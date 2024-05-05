const express = require("express");
const cors = require("cors");
const db = require("./models"); // Import Sequelize instance

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`API REQUEST PATH : ${req.path}`);
  next();
});

const PORT = process.env.PORT || 8080;

// Import routers
const router = require("./routes/productRoutes");

// Use routers
app.use("/api", router);

app.listen(PORT, async () => {
  try {
    await db.sequelize.authenticate();
    console.log(`Server is listening on port ${PORT}`);
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
