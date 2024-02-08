const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("SpecialOffer", offerSchema);
