const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    memberID: {
      type: String,
      unique: [true, "member id must be unique"]
    },
    downloadLink: {
       type: String,
     },
  },
  { versionKey: false }
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;