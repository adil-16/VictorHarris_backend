const mongoose = require("mongoose");
const BLOG_CATEGORY = require("../types/blogCategory");

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  categories: {
    type: String,
    enum: [
      BLOG_CATEGORY.TYPES_OF_OFFICES,
      BLOG_CATEGORY.GUIDES,
      BLOG_CATEGORY.HYBRID_WORKING,
      BLOG_CATEGORY.OFFICE_TRENDS,
    ],
  },
  tags: [String],
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
  },
  video: {
    type: String,
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogComment" }],
});

module.exports = mongoose.model("Blog", blogSchema);
