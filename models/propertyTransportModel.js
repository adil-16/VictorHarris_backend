const mongoose = require("mongoose");

const transportSchema = new mongoose.Schema(
  {
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
