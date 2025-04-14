const cloudnery = require('cloudinary').v2;
const multer = require("multer");

cloudnery.config({
  cloud_name: "dtcvy85p5",
  api_key: "123252113918238",
  api_secret: "SB7NLHYlDHQwtlm4Ac1iANUbLck",
});

const storage = new multer.memoryStorage();

async function uploadImage(file) {
  const result = await cloudnery.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}

const upload = multer({ storage });

module.exports = { uploadImage, upload };
