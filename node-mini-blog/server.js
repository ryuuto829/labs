const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./views/index.html', (err, data) => {
    if (err) console.log(err);

    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  })
});

server.listen(3000, 'localhost', (req,res) => {
  console.log('server is running on port 3000');
});
