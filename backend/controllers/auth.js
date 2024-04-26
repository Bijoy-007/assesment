const jwt = require("jsonwebtoken");

const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const params = req.body;

    const userData = new User({
      username: params.username,
      role: params.role,
      password: params.password,
    });

    const createdUser = await userData.save();

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: createdUser,
    });
  } catch (err) {
    res.status(500).json({
      status: "faliure",
      message: "Failed",
    });
  }
};

const login = async (req, res) => {
  try {
    const params = req.body;

    const { username, passowrd } = params;

    const fetchedUser = await User.findOne({ username });

    if (!fetchedUser) {
      return res.status(400).json({
        status: "faliure",
        message: "User not found",
      });
    }

    // * Plain text password matching

    if (fetchedUser.passoword !== passowrd) {
      return res.status(400).json({
        status: "faliure",
        message: "Wrong password",
      });
    }

    // Successfull validation
    const newjwt = jwt.sign(
      {
        userId: fetchedUser._id,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({
      status: "success",
      message: "successfully logged in",
      data: {
        token: newjwt,
        userDetails: {
          role: fetchedUser.role,
        },
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "faliure",
      message: "Failed",
    });
  }
};

module.exports = { createUser, login };
