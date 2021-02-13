const rateLimit = require('express-rate-limit');

// Basic rate-limiting middleware for Express.
// Use to limit repeated requests to public APIs and/or endpoints such as password reset.
// Read more: https://www.npmjs.com/package/express-rate-limit
const loginLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 50, // start blocking after 50 requests
  message:
    'Too many login attempts created from this IP, please try again after an hour',
});

const signupLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 25, // start blocking after 25 requests
  message:
    'Too many login attempts created from this IP, please try again after an hour',
});

module.exports = { loginLimiter, signupLimiter };
