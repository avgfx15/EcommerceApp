const express = require("express");
const cartRoute = express.Router();
const { test, addToCart } = require("../controllers/cartController");

cartRoute.get("/test", test);
cartRoute.post("/:id", addToCart);

module.exports = cartRoute;
