require('dotenv').config();

const express = require('express');
const {stockroutes }= require('./routes/stock.routes');

const app = express();

app.use(express.json());//accepted the server to use json

app.use = ('/api/st',stockroutes);
// app.use('/api/st/stock',stockroutes)
app.listen(process.env.PORT, () =>{
    console.log(`Server listening on port ${process.env.PORT}`);
})