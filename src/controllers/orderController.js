const res = require('express/lib/response');
const productModel = require('../models/productModel');
const  orderModel= require('../models/productModel');
const userModel = require('../models/userModel');


const createorder =  async function(req,res){
    const data = req.body

const uservalidation = await userModel.find({_id:1})
if(uservalidation._id==data.userId){
    const productvalidation = await productModel.find({_id:1})
if(productvalidation._id== data.productId){

const header = req.headers;
if(header.isfreeasppuser=="true"){
     await userModel.find({_id:userId}).updateMany({balance: `${balance}-${price}`},{new:true})
     const purches = await orderModel.create(data)
     res.send({data:purches})
}else res.send({msg:"product price checked"})


}else res.send({msg:"productid is not valid"})
}else res.send({msg:"userid is not valid"})

     res.send({data:getproduct})

}




module.exports.createorder = createorder