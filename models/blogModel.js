const mongoose = require("mongoose");
const BLOG_CATEGORY = require("../types/blogCategory");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter The Title"],
      maxLength: [100, "Title Cannot be this much long"],
      minLength: [2, "It need to have at-least 2 characters"],
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: {
      type: String,
      required: [true, "Please Enter The Content"],
      minLength: [2, "It need to have at-least 2 characters"],
    },
    categories: {
      type: String,
      enum: [
        BLOG_CATEGORY.TYPES_OF_OFFICES,
        BLOG_CATEGORY.GUIDES,
        BLOG_CATEGORY.HYBRID_WORKING,
        BLOG_CATEGORY.OFFICE_TRENDS,
      ],
      default: BLOG_CATEGORY.TYPES_OF_OFFICES,
    },
    tags: [String],
    image: [
      {
        type: String,
        default:
          "https://www.useourfacilities.com/css/images/no-image-template.png",
      },
    ],
    video: [
      {
        type: String,
      },
    ],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogComment" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
