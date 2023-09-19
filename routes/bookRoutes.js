const express = require("express");
const book = require("../controllers/bookController");

const router = express.Router();

router
  .route("/")
  .post(book.createbook);

router
  .route("/:id")
  .get(book.getbook)
  .patch(book.updatebook)
  .delete(book.deletebook);

module.exports = router;