const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const DIR = "./public";

// multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, `${DIR}/images/`);
    } else {
      cb(null, `${DIR}/videos/`);
    }
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = { upload };
