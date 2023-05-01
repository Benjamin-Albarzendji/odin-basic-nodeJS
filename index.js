const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  // For the home page
  if (req.url === '/') {
    fs.readFile('./pages/index.html', (err, html) => {
      if (err) {
        console.log(err);
      }
      res.setHeader('Content-Type', 'text/html');
      res.write(html);
      res.end();
    });
  }

  // For the about page
  else if (req.url === '/about') {
    fs.readFile('./pages/about.html', (err, html) => {
      if (err) {
        console.log(err);
      }
      res.setHeader('Content-Type', 'text/html');
      res.write(html);
      res.end();
    });
  }

  // For the contact page
  else if (req.url === '/contact') {
    fs.readFile('./pages/contact-me.html', (err, html) => {
      if (err) {
        console.log(err);
      }
      res.setHeader('Content-Type', 'text/html');
      res.write(html);
      res.end();
    });
  }

  // If the request does not exist
  else {
    fs.readFile('./pages/404.html', (err, html) => {
      if (err) {
        console.log(err);
      }
      res.setHeader('Content-Type', 'text/html');
      res.write(html);
      res.end();
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
