const {imgPath} = require('../constants');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imgPath)
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const imgUpload = multer({ storage });

module.exports = imgUpload;

