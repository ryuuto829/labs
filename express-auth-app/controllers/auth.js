const User = require('../models/User');

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

  return errors;
};

const login_get = (req, res) => {
  res.render('login', { title: 'Login', user: null });
};

const login_post = (req, res) => {
  res.send('login');
};

const signup_get = (req, res) => {
  res.render('signup', { title: 'Sign Up', user: null });
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });

    res.status(201).json(user);
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
