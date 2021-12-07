const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    books: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Author", AuthorSchema);
