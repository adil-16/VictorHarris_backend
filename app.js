require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");
const port = process.env.PORT || 5000;

require("./config/db");

const errorMiddleware = require("./middlewares/error");

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "ThisIsASecretKey",
    resave: false,
    saveUninitialized: true,
  })
);

const user = require("./routes/userRoute");

app.use("/api/v1", user);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
