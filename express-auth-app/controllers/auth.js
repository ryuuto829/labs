const login_get = (req, res) => {
  res.render('login', { title: 'Login', user: null });
};

const login_post = (req, res) => {};

const signup_get = (req, res) => {
  res.render('signup', { title: 'Sign Up', user: null });
};

const signup_post = (req, res) => {};

module.exports = {
  login_get,
  login_post,
  signup_get,
  signup_post,
};
