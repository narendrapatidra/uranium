const express = require('express');
const address = require('address')
const url = require('url')
// const http  = require('http')

const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const { ip } = require('address');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Akshay12:Akshay123@cluster0.eqljz.mongodb.net/narendra580", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


const l = function(req,res,next){
    let ipaddres = address.ip()
    console.log(ipaddres)
    next();

    
}

app.use(l)

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        let d= new Date()
    
        // const  p = req.ip()
    

      var pathname = req.url
    
       console.log(d+ "," + "," + pathname)
       
        next();
  }
  );

app.use('/', route);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
