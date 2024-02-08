const mongoose = require("mongoose");

const transportSchema = new mongoose.Schema(
  {
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    distance: Number,
    routeType: {
      type: String,
      enum: ["underground", "overground"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PropertyTransport", transportSchema);
