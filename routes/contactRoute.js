const express = require("express");
const {
  postContact,
  getSingleContact,
  getAllContacts,
  deleteContact,
} = require("../controllers/contactController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

router.post("/add-contact", postContact);

router.get(
  "/all-contacts",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllContacts
);

router.get(
  "/single-contact/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getSingleContact
);

router.delete(
  "/single-contact/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteContact
);

module.exports = router;
