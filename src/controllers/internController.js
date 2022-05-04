const internModel = require("../models/internModel")
const mongoose = require("mongoose")
const objectId = mongoose.Types.ObjectId
const emailValidator = require("email-validator")

//2.
const createIntern = async function (req, res) {
    try {
        let data = req.body;
        let keys = Object.keys(data)

        //when body is empty
        if (keys.length == 0)
            return res.status(400).send({ status: false, msg: "data is required in body" })

        //checks if name is not given in body
        if (!data.name || data.name.length == 0)
            return res.status(400).send({ status: false, msg: "name is required in body" })

        //checks if email is not given in body
        if (!data.email || data.email.length == 0)
            return res.status(400).send({ status: false, msg: "email is required in body" })

        //checks if email id is already present in collection
        if (await internModel.findOne({ email: data.email }))
            return res.status(400).send({ status: false, msg: "email Id is already in use" })

        //checks email validity
        if (!emailValidator.validate(data.email))
            return res.status(400).send({ status: false, msg: "Enter valid email id" })

        //checks if mobile is not given in body
        if (!data.mobile || data.mobile.length == 0)
            return res.status(400).send({ status: false, msg: "mobile number is required in body" })

        //checks for valid number
        function isValid(x, y) {
            if (isNaN(y))
                return true;
            else if ((x[0] == 9 || x[0] == 8 || x[0] == 7 || x[0] == 6) && x.length == 10 && x !== "")
                return false;
            else return true;
        }
        let y = parseInt(data.mobile)
        let x = y.toString()
        if (isValid(x, y))
            return res.status(400).send({ status: false, msg: "Enter valid mobile number" })

        //checks if CollegeId is given in body
        if (!data.collegeId)
            return res.status(400).send({ status: false, msg: "collegeId is required" })

        //checks for valid collegeId
        if (!objectId.isValid(data.collegeId))
            return res.status(400).send({ status: false, msg: "Enter valid collegeId" })

        let internData = await internModel.create(data)
        res.status(200).send({ status: true, data: internData })

    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { createIntern } 