const express = require("express");
const {} = require("../controllers/contactController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

router.post("/contact", postContact);

router.get(
  "/contact",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllContacts
);

router.get(
  "/contact/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getSingleContact
);

router.delete(
  "/contact/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteBlog
);

module.exports = router;
