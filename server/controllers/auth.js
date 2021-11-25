const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");

const createUser = async (req, res) => {
  //Lets validate the data before we create a user in DB
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if user is alredy created in DB
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exist");

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    login: req.body.login,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    user.save();
    res.send("User successfully created");
  } catch (err) {
    res.status(400).send(err);
  }
};

const signIn = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if user is exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is not found");

  //Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(401).send("Invalid password");

  //Create and assign a token
  const token = await jwt.sign(
    { _id: user._id, login: user.login },
    process.env.TOKEN_SECRET
  );
  res.header("auth-token", token).send({ login: user.login, authToken: token });
};

const sendUserCredentials = async (req, res) => {
  const authToken = req.header("auth-token");
  const userLogin = req.user.login;
  res.send({ login: userLogin, authToken: authToken });
};

module.exports = {
  createUser,
  signIn,
  sendUserCredentials,
};
