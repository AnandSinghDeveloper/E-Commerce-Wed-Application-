const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  authmiddleware,
} = require("../../controllers/auth/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check-auth", authmiddleware, (req, res) => {
  const user  = req.user;
   if(user)res.status(200).json({ success: true, message: "Authintcated user ", user })
    
});
module.exports = router;
