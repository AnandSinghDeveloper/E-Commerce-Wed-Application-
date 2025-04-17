const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const { json } = require("express");

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const cheackedUser = await User.findOne({ email });
    if (cheackedUser) {
      res.json({
        success: false,
        message: "User already exists please login",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });

    console.log(newUser);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User already exists please login ",
    });
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const cheackedUser = await User.findOne({ email });
    if (!cheackedUser)
      return res.json({
        success: false,
        message: "Invalid Email ",
      });

    const isPasswordMatch = await bcrypt.compare(
      password,
      cheackedUser.password
    );
    if (!isPasswordMatch)
      return res.json({
        success: false,
        message: "Password does not match",
      });

    const token = jwt.sign(
      {
        id: cheackedUser._id,
        email: cheackedUser.email,
        role: cheackedUser.role,
        userName: cheackedUser.userName,
      },
      "ANAND_SECRET",
      { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "User logged in successfully",
      user: {
        id: cheackedUser.id,
        role: cheackedUser.role,
        email: cheackedUser.email,
        userName: cheackedUser.userName,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
    console.log(error);
  }
};

const logoutUser = async (req, res) => {
  try{
    res.clearCookie("token").json({
      success: true,
      message: "User logged out successfully",
    })
  }catch(error){
    res.status(500).json({
      success: false,
      message: "something went wrong",
    })
    console.log(error)
  }
};

const authmiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized user!",
    });
  }

  try {
    const decoded = jwt.verify(token, "ANAND_SECRET");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser, authmiddleware };
