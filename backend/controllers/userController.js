import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

// @desc Auth user and get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log("this is: " + user);
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      token: generateToken(user._id),
    });
  } else {
    throw new Error("Invalid email or password");
  }
});

// @desc Register new users
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, image } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
    image,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      token: generateToken(user._id),
    });
  } else {
    throw new Error("User could not be created");
  }
});

export { authUser, registerUser };
