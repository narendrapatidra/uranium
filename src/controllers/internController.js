const internModel = require("../models/internModel")
const mongoose = require("mongoose")
const objectId = mongoose.Types.ObjectId
const emailValidator = require("email-validator")
const collegeModel = require('../models/collegeModel');

//2.
const createIntern = async function (req, res) {

    

    try {
        let data = req.body;
        let keys = Object.keys(data)

        function isPresent(value) {
            if (!value || value.trim().length==0)
                return true
        }

        //when body is empty
        if (keys.length == 0)
            return res.status(400).send({ status: false, msg: "data is required in body" })

        //checks if name is not given in body
        if (isPresent(data.name))
            return res.status(400).send({ status: false, msg: "name is required in body" })

        //checks if email is not given in bodyeturn res.st
        if (isPresent(data.email))
            return res.status(400).send({ status: false, msg: "email is required in body" })

        //checks if email id is already present in collection
        if (await internModel.findOne({ email: data.email }))
            res.status(404).send({ status: false, msg: "email Id is already in use" })

        //checks email validity
        if (!emailValidator.validate(data.email))
            return res.status(400).send({ status: false, msg: "enter valid email id" })

        //checks if mobile is not given in body
        if (isPresent(data.mobile))
            return res.status(400).send({ status: false, msg: "mobile number is required in body" })

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
        if (isValid(x, y))
            return res.status(400).send({ status: false, msg: "Enter valid mobile number" })

        //check unique mobile
        if (await internModel.findOne({ mobile: data.mobile }))
            return res.status(400).send({ status: false, msg: "mobile number is already in use" })

        //checks if CollegeId is given in body
        if (isPresent(data.collegeName))
            return res.status(400).send({ status: false, msg: "collegeName is required" })

        let  Name = await collegeModel.findOne({name : data.collegeName, isDeleted : false})
        if (!Name) return res.status(400).send({status : false, msg: "college not found"})
        data.collegeId = Name._id 

        let internData = await internModel.create(data)
        res.status(201).send({ status: true, data: internData })

    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { createIntern } 