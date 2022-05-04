const express = require('express')
const router = express.Router();
const { createIntern } = require("../controllers/internController")

router.post("/functionup/interns", createIntern)


module.exports = router;