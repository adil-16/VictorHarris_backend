const mongoose = require("mongoose");

const officeSchema = new mongoose.Schema(
  {
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    title: String,
    label: String,
    price: Number,
    desksAvailable: Number,
    minimumTermTitle: String,
    maximumTermTitle: String,
    minimumTermText: String,
    maximumTermText: String,
    dynamicAttributes: {
      type: mongoose.Schema.Types.Mixed,
      optional: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PropertyOffice", officeSchema);
