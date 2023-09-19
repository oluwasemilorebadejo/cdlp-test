const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "pls input title"],
    },
    author: {
        type: String,
        required: [true, "pls input author"],
      },
      ISBN: {
        type: Number,
        required: [true, "pls input ISBN"],
      },
    publicationYear : {
        type: Number
    },
    type: {
        type: String,
        enum: ["physical", "digital"],
      },
      shelfLocation: {
        type: String,
      },
      isAvailable: {
      },
      fileSize: {
        type: Number,
      },
      downloadLink: {
        type: String,
      },
  },
  { versionKey: false }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;