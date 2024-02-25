const mongoose = require("mongoose");
const PROPERTY_TYPE = require("../types/propertyType");
const PROPERTY_STATUS = require("../types/propertyStatus");

const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Property Name"],
      maxLength: [32, "Name cannot be this much long"],
      minLength: [2, "Name should be at-least 2 characters"],
    },
    image: {
      type: String,
      default:
        "https://www.useourfacilities.com/css/images/no-image-template.png",
    },
    address: {
      referenceNumber: Number,
      buildingNumber: Number,
      street: String,
      addressLine2: String,
      city: String,
      state: String,
      postcode: String,
      location: String,
    },
    size: {
      ft: Number,
      sizeStart: Number,
      sizeEnd: Number,
      desks: String,
      deskStart: Number,
      deskEnd: Number,
    },
    price: {
      type: Number,
    },
    marketingStatus: String,
    active: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      enum: [
        PROPERTY_TYPE.RESIDENTIAL_SALES,
        PROPERTY_TYPE.RESIDENTIAL_SETTINGS,
        PROPERTY_TYPE.COMMERCIAL,
      ],
    },
    commercialDetails: {
      availableAs: {
        type: String,
        enum: ["rent", "sale"],
      },
      rent: Number,
      rentOnApplication: Boolean,
      priceQualifier: String,
      propertyType: String,
      floorArea: Number,
      siteArea: Number,
    },
    status: {
      type: String,
      enum: [
        PROPERTY_STATUS.PUBLISH,
        PROPERTY_STATUS.PENDING,
        PROPERTY_STATUS.DRAFT,
      ],
    },
    amenities: [
      { type: mongoose.Schema.Types.ObjectId, ref: "PropertyAmenity" },
    ],
    office: { type: mongoose.Schema.Types.ObjectId, ref: "PropertyOffice" },
    facts: { type: mongoose.Schema.Types.ObjectId, ref: "PropertyFacts" },
    offer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PropertySpecialOffer",
    },
    transport: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PropertyTransport",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
