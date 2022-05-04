const mongoose=require("mongoose")

const internSchema = new mongoose.Schema({
     name: {
         mandatory}, 
    email: {mandatory, valid email, unique}, 
    mobile: {mandatory, valid mobile number, unique}, 
    collegeId: {ObjectId, ref to college model}, 
    isDeleted: {
        type: boolean, 
        default: false
    }
})