const express = require("express");
const { register, login } = require("../controllers/users");

// create user router
const userRouter = express.Router();

// endpoint for the GET request
userRouter.post("/register", register);
userRouter.post("/login", login);

module.exports = userRouter;
