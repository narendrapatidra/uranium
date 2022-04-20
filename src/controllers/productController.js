const res = require('express/lib/response');
const  productModel = require('../models/productModel')


const createProduct =  async function(req,res){
    const product = req.body;
    const getproduct = await productModel.create(product)
     res.send({data:getproduct})

}




module.exports.createProduct = createProduct