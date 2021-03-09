const { Router } = require('express');
const {
  login_get,
  login_post,
  signup_get,
  signup_post,
  logout_get,
} = require('../controllers/auth');

const router = Router();

const RateLimit = require('express-rate-limit');
const MongoStore = require('rate-limit-mongo');
require('dotenv').config();

const { DB_URI } = process.env;

const rateLimitDelay = 30 * 60 * 1000; // 30 minutes delay
const limiter = new RateLimit({
  store: new MongoStore({
    uri: DB_URI,
    expireTimeMs: rateLimitDelay,
  }),
  max: 25,
  windowMs: rateLimitDelay,
  message:
    'Too many login attempts created from this IP, please try again after an 30 minutes.',
});

router.get('/login', login_get);
router.post('/login', limiter, login_post);
router.get('/signup', signup_get);
router.post('/signup', limiter, signup_post);
router.get('/logout', logout_get);

module.exports = router;
