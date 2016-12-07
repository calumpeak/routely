'use strict';

const config    = require('./config.js');
const express   = require('express');
const app       = express();
const path      = require('path');

// Serve static assets
app.use(express.static(path.join(__dirname, './view')));
app.use(express.static(path.join(__dirname, './dist')));

app.listen(config.port, () => {
    console.log(`Travely server listening on ${config.port}`);
});
