const express = require("express");
const {
  postNewProduct,
  addItemIntoCart,
  cartCheckout,
} = require("../controllers/products");
const authentication = require("../middlewares/authentication");
const configureSession = require("../middlewares/session");

//create a router for products
const ProductRouter = express.Router();

// endpoint for the requests
ProductRouter.post("/", authentication, postNewProduct);
ProductRouter.post(
  "/cart/add",
  authentication,
  configureSession,
  addItemIntoCart
);
ProductRouter.post("/cart/checkout",authentication ,cartCheckout);
module.exports = ProductRouter;
