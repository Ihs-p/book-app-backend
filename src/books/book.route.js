const express = require("express");
const Book = require("./book.model");
const {
  postBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require("./book.controller");
const { verifyToken } = require("../middleware/verifyUserToken");

const router = express.Router();

// post a book
router.post("/create-book", verifyToken, postBook);
router.get("/", getBooks);
router.get("/:id", getBook);
router.put("/edit/:id", verifyToken, updateBook);
router.delete("/delete/:id", verifyToken, deleteBook);

module.exports = router;
