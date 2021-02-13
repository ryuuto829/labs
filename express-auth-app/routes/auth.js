const { Router } = require('express');
const { loginLimiter, signupLimiter } = require('../middleware/limiter');
const {
  login_get,
  login_post,
  signup_get,
  signup_post,
  logout_get,
} = require('../controllers/auth');

const router = Router();

router.get('/login', login_get);
router.post('/login', loginLimiter, login_post);
router.get('/signup', signup_get);
router.post('/signup', signupLimiter, signup_post);
router.get('/logout', logout_get);

module.exports = router;
