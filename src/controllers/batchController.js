const BatchModel= require("../models/batchModel")

const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await BatchModel.create(batch)
    res.send({data: batchCreated})
}

// const getAuthorsData= async function (req, res) {
//     let authors = await BatchModel.find()
//     res.send({data: authors})
// }

module.exports.createBatch= createBatch
// module.exports.getAuthorsData= getAuthorsData