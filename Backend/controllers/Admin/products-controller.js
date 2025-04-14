const { uploadImage } = require("../../Helpers/Cloudnery");

const HandleImageUpload = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const b64 = file.buffer.toString("base64");
    const url = `data:${file.mimetype};base64,${b64}`;

    const result = await uploadImage(url);
    console.log(result);

    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something error occurred",
    });
  }
};

module.exports = { HandleImageUpload };
