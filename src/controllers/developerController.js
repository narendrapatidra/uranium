// const AuthorModel= require("../models/authorModel
const batchModel = require("../models/batchModel")
const developerModel = require("../models/developerModel")
const DeveloperModel= require("../models/developerModel")


const createdeveloper= async function (req, res) {
    const developer = req.body
    const result = await DeveloperModel.create(developer)
    res.send({data: result})
}




const scholarshipdevelopers = async function (req, res) {
    
    const findperson = await developerModel.find({gender:"Female",percentage:{$gte:70}})
    res.send({data:findperson})
}

const finddeveloper = async function (req, res) {
    const batchname = req.query
    const findbatchname = await batchModel.find({name:batchname.name}).select({_id:1})
    const per = req.query
    const findprcent = await DeveloperModel.find({percentage:{$gte:per.percentage},batch:findbatchname[0]._id})
    
    res.send({data:findprcent})
}
// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

module.exports.createdeveloper= createdeveloper
module.exports.scholarshipdevelopers= scholarshipdevelopers
module.exports.finddeveloper= finddeveloper
// module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData