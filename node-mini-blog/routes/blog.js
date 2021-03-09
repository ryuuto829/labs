const express = require('express');
const {
  blogIndex,
  blogCreatePost,
  blogCreate,
  blogDetails,
  blogDelete,
} = require('../controllers/blog');

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
    'Too many actions were created from this IP, please try again after a 30 minutes.',,
});

const router = express.Router();

// Routes for all blogs
router.get('/', blogIndex);
router.post('/', limiter, blogCreatePost);
router.get('/create', limiter, blogCreate);
router.get('/:id', blogDetails);
router.delete('/:id', limiter, blogDelete);

module.exports = router;
