const mongoose = require("mongoose");

const amenitySchema = new mongoose.Schema(
  {
    amenities: [String],
  },
  {
    timestamps: true,
  }
);

amenitySchema.pre("save", function (next) {
  if (this.isNew) {
    this.amenities = ["WiFi", "AC"];
  }
  next();
});

module.exports = mongoose.model("PropertyAmenity", amenitySchema);
