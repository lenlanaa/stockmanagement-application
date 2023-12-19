const express = require('express');

const allRoutes = express.Router();

const stockroutes = require('./user.routes');

allRoutes.use('/stock', stockroutes);
// allRoutes.use('/user', userroutes);

module.exports = allRoutes;