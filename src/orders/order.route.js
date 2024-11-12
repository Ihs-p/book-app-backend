const express = require("express");

const {createOrder, getOrdersByemail } = require("./order.controller");

const router = express.Router();

// post a book
router.post("/", createOrder);
router.get("/email/:email",getOrdersByemail );
// router.get("/:id",getBook)
// router.put("/edit/:id",updateBook)
// router.delete("/delete/:id",deleteBook)

module.exports = router;
