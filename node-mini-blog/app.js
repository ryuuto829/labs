const express = require('express');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blog');
require('dotenv').config();

// Express app
const app = express();

// Parses body and add it to the request obj
// Read more: http://expressjs.com/en/api.html#express.urlencoded
app.use(express.urlencoded({ extended: true }));

// Serving static files in Express
app.use(express.static('public'))

// Connect to mongodb
const { DB_URI, PORT } = process.env;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT || 3000));

// Register view engine as EJS
app.set('view engine', 'ejs');

// Add public folder with stylesheets
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.use('/blogs', blogRouter);

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use('/', (req, res) => {
  res.status(404).render('404', { title: 'Page not Found' });
});
