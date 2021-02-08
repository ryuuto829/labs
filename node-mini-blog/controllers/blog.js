const Blog = require('../models/blog');

// Show all posts
const blogIndex = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { title: 'Home', blogs: result });
    });
};

// Create new post & save to db
const blogCreatePost = (req, res) => {
  const blog = new Blog(req.body);

  blog.save().then(() => {
    res.redirect('/');
  });
};

// Show form for adding new posts
const blogCreate = (req, res) => {
  res.render('create', { title: 'Create a new Post' });
};

// Show full post details
const blogDetails = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then(result => {
      res.render('details', { title: 'Blog Details', blog: result });
    })
    .catch(() => {
      res.status(404).render('404', { title: 'Blog not Found' });
    });
};

// Delete post from db
const blogDelete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id).then(() => {
    res.json({ redirect: '/blogs' });
  });
};

module.exports = {
  blogIndex,
  blogCreatePost,
  blogCreate,
  blogDetails,
  blogDelete,
};
