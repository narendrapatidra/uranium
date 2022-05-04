const internModel = require("../models/internModel")

const createIntern = async function (req, res) {
    let data = req.body;
    let internData = await internModel.create(data)
    res.status(200).send({ status: true, data: internData })
}

module.exports = { createIntern }