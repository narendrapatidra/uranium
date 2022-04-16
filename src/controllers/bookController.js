const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
const  autherfind =await authorModel.findById({_id:book.auther_id})
const publisherfind = await publisherModel.findById({_id:book.publisher_id})
if(autherfind){
    if(publisherfind){
        res.send({data:book})
    }else res.send({msg:"publisher id is not equal"})
}else res.send({ msg:"auther id is not same"})



}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id',"publisher_id")
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
