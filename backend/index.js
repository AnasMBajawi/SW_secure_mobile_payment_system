const express = require("express");
require("dotenv").config()
const configureSession = require('./middlewares/session');

const PORT = process.env.PORT ;
const app = express();
// import database connection
app.use(configureSession())
const db = require("./models/db")
// import Routers
// const ProductRouter = require("./routes/products");
const userRouter = require("./routes/users");
const ProductRouter = require("./routes/products")
app.use(express.json());

// Routers
// app.use("/products", ProductRouter);
app.use("/user", userRouter);
app.use("/product",ProductRouter)

app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`SERVER LISTENING AT http://localhost:${PORT}`);
});
