const mongoose = require("mongoose");

const uri = process.env.DB_URL;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });
