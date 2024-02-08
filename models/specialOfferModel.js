const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("SpecialOffer", offerSchema);
