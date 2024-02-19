const mongoose = require("mongoose");

const uri = process.env.DB_URL;

const User = require("../models/userModel");

mongoose
  .connect(uri)
  .then(async () => {
    console.log("Database Connection Successful");
    const user = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (!user) {
      const hashedPassword = process.env.ADMIN_PASSWORD;
      await User.create({
        firstName: "Admin",
        lastName: "User",
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
        role: "admin",
        phone: 1234567,
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
