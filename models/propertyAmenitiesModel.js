const mongoose = require("mongoose");

const amenitySchema = new mongoose.Schema(
  {
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    dynamicAttributes: {
      type: mongoose.Schema.Types.Mixed,
      optional: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PropertyAmenity", amenitySchema);
