var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// Require Library
var jsforce = require('jsforce');

// Require Routes js
var routesIndex = require('./routes/index');
var routesAbout = require('./routes/about');

// Serve static files
app.use(express.static(__dirname + '/public'));

// Page Routes
app.use('/', routesIndex);
app.use('/about', routesAbout);

// View Engine To ejs
app.set('view engine', 'ejs');

// Served Localhost
console.log('Served: http://localhost:' + port);
app.listen(port);