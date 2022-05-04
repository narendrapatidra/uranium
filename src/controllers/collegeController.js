const { find } = require('../models/collegeModel');
const collegeModel = require('../models/collegeModel');
const internModel = require('../models/internModel');

//1.
const createCollege = async function (req, res) {
    try {
        let body = req.body;

        if (Object.keys(body) == 0) {
            return res.status(400).send({ status: false, msg: "data is required in body" })
        }

        const college = await collegeModel.create(body);
        res.status(201).send({ status: true, msg: " college creat successfilly", data: college })
    }
    catch (err) {
        res.status(500).send({ status: false, error: err.message })
    }

}


//3.
const getColleges = async function (req, res) {
    try {
        let data = req.query
        let collegeDetail = await collegeModel.findOne({ name: data.collegeName })
        let internDetail = await internModel.find({ collegeId: collegeDetail._id }).select({name:1,email:1,mobile:1})
        collegeDetail = await collegeModel.findOne({ name: data.collegeName }).select({name:1,fullName:1,logoLink:1,_id:0})
        collegeDetail._doc["interests"]=internDetail
        res.status(200).send({ status: true, data: collegeDetail})
    } 
    catch (err) {
        res.status(500).send({ status: false, error: err.message })
    } 
}

module.exports = { createCollege, getColleges }