const express = require('express');
const {create,update,remove,findById,findByEmail,list} = require('../controllers/stock.controller');
const stockroutes = express.Router();

stockroutes.post('/add',create);
stockroutes.get('/findById',findById);
stockroutes.get('/findByEmail',findByEmail);
stockroutes.get('/delete',remove);
stockroutes.put('/update',update);
stockroutes.get('/list',list);

module.exports = stockroutes;