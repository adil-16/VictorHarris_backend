const mongoose = require("mongoose");

const blogCommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      minLength: [2, "Comment should be at-least 2 characters"],
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogComment", blogCommentSchema);
