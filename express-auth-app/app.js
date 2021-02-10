const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

// Loads environment variables from a .env file
require('dotenv').config();

const { DB_URI } = process.env;

const app = express();

// Register css files in the public folder
app.use(express.static('public'));

// Attach data to request obj
app.use(express.json());

// Setup EJS as view engine
app.set('view engine', 'ejs');

// Database connection
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(3000))
  .catch(err => console.warn(err));

app.get('/', (req, res) => res.render('index', { title: 'Home', user: null }));

app.use(authRoutes);
