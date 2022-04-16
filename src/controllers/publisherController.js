const PublisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await PublisherModel.find()
    res.send({data: authors})
}

module.exports.createPublisher= createPublisher
module.exports.getAuthorsData= getAuthorsData