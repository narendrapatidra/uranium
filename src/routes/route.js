const express = require('express');
const logger = require('../logger/logger')
const util = require('../util/helper')
const util2 = require('../util/helper')
const util3 = require('../util/helper')
const validator1 = require('../validator/formatter')
const validator2 = require('../validator/formatter')
const validator3 = require('../validator/formatter')
const lodash = require ("lodash")
const router = express.Router();
// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// console.log( _.chunk(months,4))
// const arr1 =[1,3,5,7,9,11,13,15,17,19]
router.get('/test-me', function (req, res) {
 
    res.send('My first ever bhalot!')
    // const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    //    console.log( _.chunk(months,4))
        // console.log( _.tail(arr1))
     console.log("calling the logger")
    logger.logging()
    console.log(" calling the util",util.util1)
    console.log(" calling the util",util2.util2)
    console.log(" calling the util",util3.util3)
    console.log(" calling the validator",validator1.validator1)
    console.log(" calling the validator",validator2.validator2)
    console.log(" calling the validator",validator3.validator3)

});

module.exports = router;
// adding this comment for no   