const express = require("express");
const {
  postBlog,
  getPersonalBlogs,
  getSingleBlog,
  getAllBlogs,
  deleteBlog,
  updateBlog,
  deleteAdminBlog,
} = require("../controllers/blogController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

router.post("/blog", isAuthenticatedUser, postBlog);
router.get("/blog", isAuthenticatedUser, getPersonalBlogs);
router.get("/blog/:id", isAuthenticatedUser, getSingleBlog);
router.get("/blogs", getAllBlogs);
router.delete("/blog/:id", isAuthenticatedUser, deleteBlog);
router.put("/blog/:id", isAuthenticatedUser, updateBlog);

router.delete(
  "/admin/blog/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteAdminBlog
);

router.post("/blog-comment/:blog", isAuthenticatedUser, postBlogComment);
router.get("/blog-comment/:blog", isAuthenticatedUser, getBlogComments);

module.exports = router;
