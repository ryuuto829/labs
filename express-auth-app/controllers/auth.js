const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;
// We need to pass the expires value in ms instead of sec
const TOKEN_EXPIRES_IN = JWT_EXPIRES_IN * 1000;

// Handle errors
const handleErrors = err => {
  const errors = { email: '', password: '' };

  // Unique errors
  if (err.code === 11000) {
    errors.email = 'This email is already in use';
    return errors;
  }

  // Validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(err => {
      const { path, message } = err.properties;

      errors[path] = message;
    });
  }

  if (err.message === 'Incorrect email') {
    errors.email = 'That email is not registered';
  }

  if (err.message === 'Incorrect password') {
    errors.password = 'That password is incorrect';
  }

  return errors;
};

// Create token using JWT
const createToken = id =>
  jwt.sign({ id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

// Auth controllers
const login_get = (req, res) => {
  res.render('login', { title: 'Login', user: null });
};

const login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Login user via the custom login method
    const user = await User.login(email, password);

    // Generate a cookie
    const token = createToken(user._id);

    res.cookie('jwt', token, { httpOnly: true, maxAge: TOKEN_EXPIRES_IN });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const signup_get = (req, res) => {
  res.render('signup', { title: 'Sign Up', user: null });
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Add new user to db
    const user = await User.create({ email, password });

    // Generate a cookie
    const token = createToken(user._id);

    res.cookie('jwt', token, { httpOnly: true, maxAge: TOKEN_EXPIRES_IN });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports = {
  login_get,
  login_post,
  signup_get,
  signup_post,
};
