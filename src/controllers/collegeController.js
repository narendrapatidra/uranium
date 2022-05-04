const { find } = require('../models/collegeModel');
const collegeModel = require('../models/collegeModel');
const internModel = require('../models/internModel');

//1.
const createCollege = async function (req, res) {
    try {
        let body = req.body;
        let name = body.name;
        let fullName = body.fullName;
        let logoLink  = body.logoLink

        if (Object.keys(body) == 0) {
            return res.status(400).send({ status: false, msg: "data require in body" })
        }

        if(!name || name.length == 0){
            return res.status(400).send({ status: false, msg: "Please, fill the name" }) 
        }
        if(!fullName ||fullName.length == 0){
            return res.status(400).send({ status: false, msg: "Please, fill the fullName" }) 
        }
        if( !logoLink || logoLink.length==0){
            return res.status(400).send({ status: false, msg: "Please, fill the logoLink" }) 
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