const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(`API REQUEST PATH : ${req.path}`);
  next();
});

app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

//example <Route path='' component={component}/>

app.get("/", (req, res) => {
  res.send("Hello World!");
});
