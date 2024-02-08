const mongoose = require("mongoose");
const validator = require("validator");

const contactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [32, "Name cannot be this much long"],
    minLength: [2, "Name should be at-least 2 characters"],
  },
  message: {
    type: String,
    required: [true, "Please Enter Your message"],
    maxLength: [300, "Message cannot be this much long"],
    minLength: [2, "Last Name should be At-least 2 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter A Valid Email"],
  },
});

module.exports = mongoose.model("ContactUs", contactUsSchema);
