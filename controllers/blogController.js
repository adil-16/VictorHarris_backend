const ErrorHandler = require("../utils/errorHandler");

const Blog = require("../models/blogModel");

// const BlogComment = require("../models/blogCommentModel");

const postBlog = async (req, res, next) => {
  try {
    const author = req.user.id;
    const blogData = {
      ...req.body,
      author,
    };
    await Blog.create(blogData);
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const getSingleBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const getBlogs = async (req, res, next) => {
  try {
    const blog = await Blog.find();
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (req.user.id === blog.user._id) {
      const blog = await Blog.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(400).json({
        message: "Not Allowed",
      });
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newBlogData = {
      ...req.body,
    };
    const blog = await Blog.findByIdAndUpdate(id, newBlogData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

// const postBlogComment = async (req, res, next) => {
//   try {
//     const { blog } = req.params;
//     const data = {
//       ...req.bod,
//       blog,
//     };
//     await BlogComment.create(data);
//     res.status(200).json({
//       success: true,
//     });
//   } catch (error) {
//     return next(new ErrorHandler(error.message, 404));
//   }
// };

// const getBlogComments = async (req, res, next) => {
//   try {
//     const { blog } = req.params;
//     const blogComments = await BlogComment.find({ blog });
//     res.status(200).json({
//       success: true,
//       blogComments,
//     });
//   } catch (error) {
//     return next(new ErrorHandler(error.message, 404));
//   }
// };

module.exports = {
  postBlog,
  getSingleBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
};
