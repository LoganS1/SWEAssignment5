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

// game page
app.get('/page2', function(req, res) {
  res.render('pages/page2');
});

let PORT = 8010;
app.listen(PORT);
console.log('Server is listening on port ', PORT);