const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req,res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try{
  let data = req.body
  let savedData = await userModel.create(data);
  
  res.status(201).send({ msg: savedData });
  }
  catch(err){
    res.status(500).send({ msg:"error",error:err.message})
  }
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;
try{
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(401).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-uranium"
  );
  // res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
}
catch (err){
  res.status(500).send({msg:"error",error:err.message})
}
};

const getUserData = async function (req, res) {
  try {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

   //If no token is present in the request header return error
  if (!token) return res.status(400).send({ status: false, msg: "token must be present" });


  let decodedToken = jwt.verify(token, "functionup-uranium");
   //If no decodedtoken is present in the code return error
  if (!decodedToken)
    return res.status(401).send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(400).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
  }
  catch (err){
    res.status(500).send({msg :"error",error:err.message})
  }
};

const updateUser = async function (req, res) {
try {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(400).send("No such user exists");
  }
// let header = req.headers["x-Auth-token"]

// if(!header){
  // return res.send({status:"false",data:"token is not present"})
// }
let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error
if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.status(200).send({ status: updatedUser, data: updatedUser });
}
  catch(err){
    res.status(500).send({msg:"error",error:err.message})
  }
};



const getdeleted = async function(req,res){
  
const data = req.params.userId
const getfind = await userModel.findById(data)
if(!getfind){
  return res.status(400).send({status:"false",msg:"no such user exixts"})

}

const letupdateuser = await userModel.findOneAndUpdate({_id:data},{isDeleted:true},{new:true})
res.send({status:true,data:letupdateuser})
}





   const postmessage= async function(req ,res){
     try{
let message = req.body.message

let token = req.headers["x-auth-token"]
if(!token){
  return res.status(400).send({msg:"token must be present in request header"})
}

let decodedToken= jwt.verify(token,'functionup-uranium')
if(!decodedToken){
  return res.status(401).send({status: false, msg:"token is not valid"})
    
}
let userToBeModified = req.params.userId
let userloggedin = decodedToken.userId
if(userToBeModified != userloggedin)
return res.status(401).send ({msg:'User logged is not allowed to modify the requested users data'})

let user = await userModel.findById(req.params.userId)
if(!user) return res.status(400).send({status: false, msg: 'No such user exists'})

let updatepost = user.posts


updatepost.push(message)

let updatedUser = await userModel.findOneAndUpdate({_id : user._id},{posts:updatepost},{new:true})
return res.status(200).send({status: true, data: updatedUser})
     }
     catch (er)
     {
       res.status(500).send({msg:"error", error:er.message})
     }


   }
module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.getdeleted = getdeleted;
module.exports.postmessage = postmessage;

