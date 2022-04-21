const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middlewareController = require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser  )

router.post("/login",middlewareController.mid ,userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middlewareController.mid, userController.getUserData)


router.put("/users/:userId",middlewareController.mid, userController.updateUser)
router.delete("/getdeleted/:userId",middlewareController.mid, userController.getdeleted)

module.exports = router;