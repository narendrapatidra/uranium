 function printDate(){
let a= new Date()
return a
}

function printMonth(){
    let month =["January","February","March","April","May","June","July","August","September","October","November","December"];
    let b= new Date();
    let monthname= month[b.getMonth()];
    return monthname
}

function getBatchInfo(){
    let c= 'uraniam';
    let d= ' W3D1';
    let e = c.concat(" "+ d +" "+ "the topic for today is Nodejs module system")
return e
}

module.exports.util1 = printDate()
module.exports.util2 = printMonth()
module.exports.util3 = getBatchInfo()