const express = require("express");
const {
  registerUser,
  loginUser,
  verifyOTP,
  getUserDetails,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
  forgotPassword,
  resetPassword,
  updateProfile,
  updatePassword,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const { upload } = require("../config/multer");
const router = express.Router();

router.post("/register", registerUser);
router.post("/otp", verifyOTP);
router.post("/login", loginUser);
router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword);
router.get("/profile", isAuthenticatedUser, getUserDetails);
router.put("/profile/update", isAuthenticatedUser, updateProfile);
router.put("/password/update", isAuthenticatedUser, updatePassword);
router.get(
  "/admin/users",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllUsers
);
router.get(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getSingleUser
);
router.put(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateUserRole
);
router.delete(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteUser
);

module.exports = router;
