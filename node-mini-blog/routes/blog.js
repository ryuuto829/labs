const express = require('express');
const {
  blogIndex,
  blogCreatePost,
  blogCreate,
  blogDetails,
  blogDelete,
} = require('../controllers/blog');

const router = express.Router();

// Routes for all blogs
router.get('/', blogIndex);
router.post('/', blogCreatePost);
router.get('/create', blogCreate);
router.get('/:id', blogDetails);
router.delete('/:id', blogDelete);

module.exports = router;
