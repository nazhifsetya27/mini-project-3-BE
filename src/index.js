const express = require("express");
const {
  userRoutes,
  productRoutes,
  productcategoriyRoutes,
  orderRoutes,
} = require("./routes");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 2200;

app.use(express.json());
const db = require("./sequelize/models");
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to Mini Project 3 API");
});

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/productcategory", productcategoriyRoutes);
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT: 🚀${PORT}🚀`);
  // db.Role.sync({ alter: true });

  // db.User.sync({ alter: true });
  // db.sequelize.sync({ alter: true });
});
