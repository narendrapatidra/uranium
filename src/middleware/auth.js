const jwt = require("jsonwebtoken");



const mid = function(req,res,next){
let token = req.headers["x-auth-token"];
try { 
if(!token){
    res.status(400).send({msg:"token is not present"})
} 
let decodedToken = jwt.verify(token, "functionup-uranium");
//If no decodedtoken is present in the code return error
if (!decodedToken)
 return res.status(401).send({ status: false, msg: "token is invalid" });


next()
}catch (err){
    res.status(500).send({msg:"error",error:err.message})
}
}

module.exports.mid= mid