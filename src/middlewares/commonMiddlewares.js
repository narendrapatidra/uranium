

const miduserorder= function ( req, res, next) {
    
    const  header  = req.headers.isfreeasppuser
    console.log(header)
    if(header=="true"){
    
    next()
}else res.send({msg:" the request is missing a mandatory header is isFreeAppUser"})
}
// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
module.exports.miduserorder = miduserorder
