const express = require('express');
const { createCollege, getColleges } = require('../controllers/collegeController');
const router = express.Router();
const { createIntern } = require("../controllers/internController")

router.post("/functionup/interns", createIntern)
router.post("/functionup/colleges", createCollege)
router.get("/functionup/collegeDetails", getColleges)

module.exports = router;