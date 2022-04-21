const mid = function(req,res,next){
let token = req.headers["x-auth-token"];

if(!token){
    res.send({msg:"token is not present"})
} next()
}

module.exports.mid= mid