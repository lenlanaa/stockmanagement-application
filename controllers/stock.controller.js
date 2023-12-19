const stockModel = require('../models/stock.model');

const create = async(req, res, next) => {
    try{

        console.log(req.body);
        const newitem = new stockModel(req.body);
         const saveditem = await newitem.save(); 
         console.log(saveditem);
        // const savedstock = await stockModel.save(req.body);
        response.status(201).json({
            message: 'Success',
            stock:savedstock
        })
    }
    catch(error){
        res.status(500).send("Failed to save");
}
}

const update = async(req, res, next) => {
    
}

const remove = async(req, res, next) => {
    
}

const findById = async(req, res, next) => {
    
}

const findByEmail = async(req, res, next) => {
    
}

const list = async(req, res, next) => {
    
}

module.exports = {
    create,
    update,
    remove,
    findById,
    findByEmail,
    list
}
