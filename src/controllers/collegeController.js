const collegeModel = require('../models/collegeModel');
const internModel = require('../models/internModel');
const isUrlValid = require('url-validation');

//1.
const createCollege = async function (req, res) {
    try {
        let body = req.body;
        let findCollege = await collegeModel.findOne({ name: body.name })

        function isPresent(value) {
            if (!value || value.trim().length == 0)
                return true
        }

        function badRequest() {
            let error = []

            //when body is empty
            if (Object.keys(body).length == 0)
                return "data is required in body"

            //checks if name is present or not
            if (isPresent(body.name))
                error.push("name is required")

            //checks if name is duplicate or not
            if (findCollege)
                error.push("College already present with the given name")

            //checks if fullName is present or not
            if (isPresent(body.fullName))
                error.push("fullName is required")

            //checks if logoLink is present or not
            if (isPresent(body.logoLink))
                error.push("logoLink is required")

            //checks url validation
            if (body.logoLink && !isUrlValid(body.logoLink))
                error.push("Enter valid url in logoLink")

            if (error.length > 0)
                return error;
        }

        if (badRequest()) {
            let err = badRequest();
            return res.status(400).send({ status: false, msg: err })
        }

        const college = await collegeModel.create(body);
        res.status(201).send({ status: true, msg: " college create successfilly", data: college })
    }
    catch (err) {
        res.status(500).send({ status: false, error: err.message })
    }
}


//3.
const getColleges = async function (req, res) {
    try {
        let data = req.query

        //check if query parameter is present
        if (Object.keys(data).length == 0)
            return res.status(400).send({ status: false, msg: "data filter is required" })
        //check if only collegeName is given in query
        if (!data.collegeName)
            return res.status(400).send({ status: false, msg: "only collegeName is allowed in query" })

        let collegeDetail = await collegeModel.findOne({ name: data.collegeName, isDeleted: false }).collation({ locale: "en", strength: 2 })

        //check collegeDetails are found or not
        if (!collegeDetail)
            return res.status(404).send({ status: false, msg: "College not found with given collegeName or college is deleted" })

        let internDetail = await internModel.find({ collegeId: collegeDetail._id, isDeleted: false }).select({ name: 1, email: 1, mobile: 1 })
        collegeDetail = await collegeModel.findById(collegeDetail._id).select({ name: 1, fullName: 1, logoLink: 1, _id: 0 })

        //when interns not found for college
        if (internDetail.length == 0) {
            collegeDetail._doc["interests"] = "no interns applied for internship at this college"
            return res.status(200).send({ status: true, data: collegeDetail })
        }

        collegeDetail._doc["interests"] = []
        collegeDetail._doc["interests"].push(...internDetail)

        if (collegeDetail._doc["interests"].length == 0)
            collegeDetail._doc["interests"] = "no interns applied for internship at this college"

        res.status(200).send({ status: true, data: collegeDetail })
    }
    catch (err) {
        res.status(500).send({ status: false, error: err.message })
    }
}

module.exports = { createCollege, getColleges }