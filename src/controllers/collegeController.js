const collegeModel = require('../models/collegeModel')

const createCollege = async function(req,res){
    try {
 let body = req.body;

 if(Object.keys(body)==0){
     return res.status(400).send({status:false ,msg:"data require in body"})
 }

 const college = await collegeModel.creat(body);
  res.status(201).send({ status:true , msg : " college creat successfilly" ,data : college})
}
catch(err)
{
    res.status(500).send({status:false,error:err.message})
}

}

module.exports  = { createCollege }