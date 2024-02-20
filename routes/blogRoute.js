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

router.get("/blogs", getBlogs);

router.get("/blog/:id", getSingleBlog);

router.post("/blog", isAuthenticatedUser, authorizeRoles("admin"), postBlog);

router.delete(
  "/blog/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteBlog
);

router.put(
  "/blog/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateBlog
);

module.exports = router;
