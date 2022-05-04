const internModel = require("../models/internModel")

const createIntern = async function (req, res) {
    try {
        let data = req.body;
        let internData = await internModel.create(data)
        res.status(200).send({ status: true, data: internData })
        
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { createIntern }