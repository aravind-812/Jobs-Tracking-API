const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const tempUser = { name, email, password: hashedPassword };
  const user = await User.create({ ...tempUsers });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.json(req.body);
};

module.exports = {
  register,
  login,
};

