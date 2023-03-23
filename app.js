const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// set up public folder
app.use(express.static('public'));
app.use(express.urlencoded());

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// assignment page
app.get('/assignment5', function(req, res) {
  res.render('pages/assignment5');
});

let PORT = 8010;
app.listen(PORT);
console.log('Server is listening on port ', PORT);