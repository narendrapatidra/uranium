const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const batchController= require("../controllers/batchController")
const developerController= require("../controllers/developerController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createAuthor", authorController.createAuthor  )
router.post("/createBatch", batchController.createBatch  )
router.post("/createdeveloper", developerController.createdeveloper )
router.get("/scholarshipdevelopers", developerController.scholarshipdevelopers )
router.get("/finddeveloper", developerController.finddeveloper )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;