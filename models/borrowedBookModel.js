const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    book_id: {
        type: {
            type: mongoose.Schema.ObjectId,
        ref: "Book",
        }
    },
    member: {
        type: {
            type: mongoose.Schema.ObjectId,
            ref: "Member",
        }
     },
     borrow_date: {
        type : Date,
     },
     return_date: {
        type: Date,
     }
  },
  { versionKey: false }
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Book;