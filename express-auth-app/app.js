const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/auth');

// Loads environment variables from a .env file
require('dotenv').config();
const { DB_URI, PORT } = process.env;

const app = express();

// Register css files in the public folder
app.use(express.static('public'));

// Attach data to request obj
app.use(express.json());

// Cookies middleware
app.use(cookieParser());

// Setup EJS as view engine
app.set('view engine', 'ejs');

// Database connection
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => app.listen(PORT || 3000))
  .catch(err => console.warn(err));

// Main routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('index', { title: 'Home' }));
app.get('/gallery', requireAuth, async (req, res) => {
  res.render('gallery', { title: 'Gallery' });
});

app.use(authRoutes);
