const express = require("express");
const {
  getProperties,
  getSingleProperty,
  postProperty,
  deleteProperty,
  updateProperty,
} = require("../controllers/propertyController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

router.get("/all-properties", getProperties);

router.get("/single-property/:id", getSingleProperty);

router.post(
  "/add-property",
  isAuthenticatedUser,
  authorizeRoles("landlord"),
  postProperty
);

router.delete(
  "/single-property/:id",
  isAuthenticatedUser,
  authorizeRoles("admin", "landlord"),
  deleteProperty
);

router.put(
  "/single-property/:id",
  isAuthenticatedUser,
  authorizeRoles("admin", "landlord"),
  updateProperty
);

//amenities
router.delete(
  "/single-property/:propertyId/amenities/:amenityId",
  isAuthenticatedUser,
  authorizeRoles("admin", "landlord"),
  deleteAmenities
);

router.put(
  "/single-property/:propertyId/amenities/:amenityId",
  isAuthenticatedUser,
  authorizeRoles("admin", "landlord"),
  updateAmenities
);

//special offer
router.delete(
  "/single-property/:propertyId/special-offer/:offerId",
  isAuthenticatedUser,
  authorizeRoles("admin", "landlord"),
  deleteOffer
);

router.put(
  "/single-property/:propertyId/special-offer/:offerId",
  isAuthenticatedUser,
  authorizeRoles("admin", "landlord"),
  updateOffer
);

//transport
router.delete(
  "/single-property/:propertyId/transport/:transportId",
  isAuthenticatedUser,
  authorizeRoles("admin", "landlord"),
  deleteTransport
);

router.put(
  "/single-property/:propertyId/transport/:transportId",
  isAuthenticatedUser,
  authorizeRoles("admin", "landlord"),
  updateTransport
);

//office
router.post(
  "/single-property/:propertyId",
  isAuthenticatedUser,
  authorizeRoles("admin", "landlord"),
  postOffice
);

router.delete(
  "/single-property/:propertyId/office/:officeId",
  isAuthenticatedUser,
  authorizeRoles("admin", "landlord"),
  deleteOffice
);

router.put(
  "/single-property/:propertyId/office/:officeId",
  isAuthenticatedUser,
  authorizeRoles("admin", "landlord"),
  updateOffice
);

module.exports = router;
