const express = require('express');

// Express app
const app = express();

// Register view engine as EJS
app.set('view engine', 'ejs');

// Add public folder with stylesheets
app.use(express.static(`${__dirname}/public`));

// Blog post example data
const blogs = [
  {
    title: 'Some text',
    content: 'ASdasd asdasdk jaslk dj alsjdkaljd l asjd'
  },
  {
    title: 'Some text',
    content: 'ASdasd asdasdk jaslk dj alsjdkaljd l asjd'
  },
  {
    title: 'Some text',
    content: 'ASdasd asdasdk jaslk dj alsjdkaljd l asjd'
  },
  {
    title: 'Some text',
    content: 'ASdasd asdasdk jaslk dj alsjdkaljd l asjd'
  },
];

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
});

app.get('/create', (req, res) => {
  res.render('create', { title: "Create a new Post" });
});

app.use('/', (req, res) => {
  res.status(404).render('404', { title: 'Page not Found'});
});

app.listen(3000);
