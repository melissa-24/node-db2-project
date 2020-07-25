const express = require('express');

const carsRouter = require('../routers/carsRouter.js');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

server.use('/', (req, res) => {
    res.send(`<h1>API is Running</h1>`);
});


module.exports = server;