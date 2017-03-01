// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

let options = {
    server: {
        socketOptions: { keepAlive: 120 }
    },
    replset: {
        socketOptions: { keepAlive: 120 }
    }
};
mongoose.connect('mongodb://thielcole:GbQkNXHzEv3De683@cluster0-shard-00-00-svwvf.mongodb.net:27017,cluster0-shard-00-01-svwvf.mongodb.net:27017,cluster0-shard-00-02-svwvf.mongodb.net:27017/crossfit?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', options);  


// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));