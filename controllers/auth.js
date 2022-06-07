const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const BadRequestError = require("../errors/bad-request");
const UnauthenticatedError = require("../errors/unauthenticated");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
    },
    token: token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("Email or password provided is null");
    throw new BadRequestError("please provided valid email and password");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Wrong credentials!");
  }
  //compare password
  const validPassword = await user.comparePasswords(password);
  
  if (!validPassword) {
    throw new UnauthenticatedError("Wrong password.");
  }


  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
    },
    token: token,
  });
};

module.exports = {
  register,
  login,
};
