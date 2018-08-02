const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // Logger for the server

const { properties } = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get('/ping', (req, res) => res.status(200).send('pong'));
app.get('/properties', properties.list);

module.exports = app;
