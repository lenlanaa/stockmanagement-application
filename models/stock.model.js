const mongoose = require('mongoose');

const stockSchema= new mongoose.Schema({
    stockName: {
        required: true,
        type: String
    },
    itemName:{
        required: true,
        type: String
    },
    
    amount:{
        required: true,
        type: String
    },
    
    measurements:{
        type: String,
        required: true,
        enum:{
            values:["Kg","Liters","pcs"],
            message:"{value} is not valid role"
        }
    },

    
});

module.exports = mongoose.model('Stock', stockSchema);