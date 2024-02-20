const express = require("express");
const {
  getBlogs,
  getSingleBlog,
  postBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

router.get("/all-blogs", getBlogs);

router.get("/single-blog/:id", getSingleBlog);

router.post(
  "/add-blog",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  postBlog
);

router.delete(
  "/single-blog/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteBlog
);

router.put(
  "/single-blog/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateBlog
);

module.exports = router;
