const express = require('express');
const logger = require('../logger/logger')
const util = require('../util/helper')
const util2 = require('../util/helper')
const util3 = require('../util/helper')
const validator1 = require('../validator/formatter')
const validator2 = require('../validator/formatter')
const validator3 = require('../validator/formatter')
const lodash = require("lodash")
const router = express.Router();
// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// console.log( _.chunk(months,4))
// const arr1 =[1,3,5,7,9,11,13,15,17,19]
router.get('/test-me', function (req, res) {
    let getbatch = req.query.batch
    console.log(getbatch)
    res.send('My first ever bhalot!')
    // const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    //    console.log( _.chunk(months,4))
    // console.log( _.tail(arr1))
    console.log("calling the logger")
    logger.logging()
    console.log(" calling the util", util.util1)
    console.log(" calling the util", util2.util2)
    console.log(" calling the util", util3.util3)
    console.log(" calling the validator", validator1.validator1)
    console.log(" calling the validator", validator2.validator2)
    console.log(" calling the validator", validator3.validator3)

});
router.get('/movies', function (req, res) {
    let movies = ["pk", "pushapa", "attack", "bala", "ddlj"];

    res.send(movies)

});

router.get('/movies/:indexNumber', function (req, res) {
    let arr2 = ["rang de basnasti", "the shining", "lord of the rings", "bartman begins"]
    let id = req.params.indexNumber
    if (id < arr2.length) {
        res.send(arr2[id])
    } else {
        res.send("index not exist")
    }

});

router.get('/films', function (req, res) {
    let moviarr = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]


    res.send(moviarr)

});

router.get('/films/:filmId', function (req, res) {
    let moviarr = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    let divid = req.params.filmId;


    if (divid < moviarr.length) {
        res.send(moviarr[divid])
    } else {
        res.send(" no movie exists with this id")

    }

});


// router.get('/sum', function (req, res) {
//     const arr3 = [1,2,3,5,6,7]
 
//     const initialValue = 0;
// const sumWithInitial = arr3.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

    res.send(sumWithInitial)

});

module.exports = router;
// adding this comment for no   