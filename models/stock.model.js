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
    
    id:{
        required: true,
        type: String
    },
    role:{
        type: String,
        required: true,
        enum:{
            values:["HR","Manager","IT_admin","Stocks"],
            message:"{value} is not valid role"
        }
    },

    createDate: {
        required: true,
        type: Date,
        default: new Date()
    },
    updateTime: {
        required: false,
        type: Date,
        default: new Date()}
    
});

module.exports = mongoose.model('Stock', stockSchema);