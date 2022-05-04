const express = require('express');
const { createCollege } = require('../controllers/collegeController');
const router = express.Router();
const { createIntern } = require("../controllers/internController")

router.post("/functionup/interns", createIntern)
router.post("/functionup/colleges", createCollege)


module.exports = router;