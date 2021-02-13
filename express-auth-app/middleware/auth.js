const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const { JWT_SECRET } = process.env;

// Check if the user is authenticated
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, JWT_SECRET, err => {
      if (err) {
        res.redirect('./login');
      } else {
        next();
      }
    });
  } else {
    res.redirect('./login');
  }
};

// Check if current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        const user = await User.findById(decodedToken.id);

        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };
