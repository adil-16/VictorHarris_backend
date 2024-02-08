const mongoose = require("mongoose");

const factSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter The Title"],
    maxLength: [32, "Title cannot be this much long"],
    minLength: [2, "Title should be at-least 2 characters"],
  },
  description: {
    type: String,
    required: [true, "Please Enter The Description"],
    maxLength: [300, "Description cannot be this much long"],
    minLength: [2, "Description should be at-least 2 characters"],
  },
});

module.exports = mongoose.model("Facts", factSchema);
