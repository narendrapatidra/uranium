const internModel = require("../models/internModel")
const emailValidator = require("email-validator")
const collegeModel = require('../models/collegeModel');

//2.
const createIntern = async function (req, res) {
    try {
        let data = req.body;
        let getEmail = await internModel.findOne({ email: data.email })
        let getMobile = await internModel.findOne({ mobile: data.mobile })

        function isPresent(value) {
            if (!value || value.trim().length == 0)
                return true
        }

        function badRequest() {
            let error = [];

            //when body is empty
            if (Object.keys(data).length == 0)
                return "data is required in body"

            //checks if name is not given in body
            if (isPresent(data.name))
                error.push("name is required in body")

            //checks if email is not given in bodyeturn res.st
            if (isPresent(data.email))
                error.push("email is required in body")

            //checks if email id is already present in collection
            if (getEmail)
                error.push("email Id is already in use")

            //checks email validity 
            if (data.email && !emailValidator.validate(data.email))
                error.push("enter valid email id")

            //checks if mobile is not given in body
            if (isPresent(data.mobile))
                error.push("mobile number is required in body")

            //checks for valid mobile number
            function isValid(x, y) {
                if (isNaN(y))
                    return true;
                else if ((x[0] == 9 || x[0] == 8 || x[0] == 7 || x[0] == 6) && x.length == 10)
                    return false;
                else return true;
            }
            let y = parseInt(data.mobile)
            let x = y.toString()
            if (data.mobile && isValid(x, y))
                error.push("Enter valid mobile number")

            //check unique mobile
            if (getMobile)
                error.push("mobile number is already in use")

            //checks if collegeName is given in body
            if (isPresent(data.collegeName))
                error.push("collegeName is required")

            if (error.length > 0)
                return error;
        }

        if (badRequest()) {
            let err = badRequest();
            return res.status(400).send({ status: false, msg: err })
        }

        let Name = await collegeModel.findOne({ name: data.collegeName, isDeleted: false })
        if (!Name)
            return res.status(404).send({ status: false, msg: "college not found" })
        data.collegeId = Name._id

        let internData = await internModel.create(data)
        res.status(201).send({ status: true, data: internData })
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { createIntern } 