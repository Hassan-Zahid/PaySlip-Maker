require('rootpath')();
var express = require('express');
var expressValidator = require('express-validator');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
app.disable('x-powered-by');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressValidator());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// routes
app.use('/api/payslip', require(path.resolve('./server/controllers/payslip.controller.js')));

// Catch all other routes and return the index file
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Get port from environment and store in Express.
process.env.NODE_ENV = 'production';
const port = process.env.PORT || '4000';
app.set('port', port);

//Create HTTP server
const server = http.createServer(app);

//Listen on provided port, on all network interfaces.
server.listen(port, function () {
  console.log('Server listening at %s', port);
});
