let axios = require("axios");
const res = require("express/lib/response");
const { get } = require("express/lib/response");



const getVaccinsession = async function (req, res) {
    try {
        let districtId = req.query.district_id;
        let date = req.query.date

        let option = {
            method: "get",
            url: ` https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`

        }
        let getSession = await axios(option)
        console.log(getSession.data)
        res.send({ data: getSession.data })
    }
    catch (err) {
        res.send({ error: err.message })

    }

}

let getSortedCities = async function (req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

        let cityObjArray = []
        for (i = 0; i < cities.length; i++) {

            let obj = { city: cities[i] }

            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=7d5ba6e1b23bf53bb0bbe590b17978e8`)

            obj.temp = resp.data.main.temp


            cityObjArray.push(obj)


        }


        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })

        res.status(200).send({ status: "true", data: sorted })

    }





catch (err) {
    res.status(500).send({ status: "faluse", error: err.message })
}
}








const allMoment = async function (req, res) {
    try {


        let option = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }

        let result = await axios(option)
        res.send({ data: result.data })
    }

    catch (err) {
        res.send({ error: err.message })
    }
}



const postMemes = async function (req, res) {
    try {

        let template_id = req.query.template_id;
        let text0 = req.query.text0;
        let text1 = req.query.text1;
        let username = req.query.username;
        let password = req.query.password


        let option = {
            method: "post",
            url: `http://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`

        }
        let result = await axios(option)
        res.send({ data: result.data })


    }
    catch (err) {
        res.send({ data: err.message })
    }
}














module.exports.getVaccinsession = getVaccinsession
module.exports.allMoment = allMoment
module.exports.postMemes = postMemes
module.exports.getSortedCities = getSortedCities







// let getStates = async function (req, res) {

//     try {
//         let options = {
//             method: 'get',
//             url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
//         }
//         let result = await axios(options);
//         console.log(result)
//         let data = result.data
//         res.status(200).send({ msg: data, status: true })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }


// let getDistricts = async function (req, res) {
//     try {
//         let id = req.params.stateId
//         let options = {
//             method: "get",
//             url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
//         }
//         let result = await axios(options);
//         console.log(result)
//         let data = result.data
//         res.status(200).send({ msg: data, status: true })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }

// let getByPin = async function (req, res) {
//     try {
//         let pin = req.query.pincode
//         let date = req.query.date
//         console.log(`query params are: ${pin} ${date}`)
//         var options = {
//             method: "get",
//             url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
//         }
//         let result = await axios(options)
//         console.log(result.data)
//         res.status(200).send({ msg: result.data })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }

// let getOtp = async function (req, res) {
//     try {
//         let blahhh = req.body

//         console.log(`body is : ${blahhh} `)
//         var options = {
//             method: "post",
//             url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
//             data: blahhh
//         }

//         let result = await axios(options)
//         console.log(result.data)
//         res.status(200).send({ msg: result.data })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }


// module.exports.getStates = getStates
// module.exports.getDistricts = getDistricts
// module.exports.getByPin = getByPin
// module.exports.getOtp = getOtp