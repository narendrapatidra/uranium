function gettrim(){
    const a="  functionUp  ";
    const b = a.trim()
    return  b
}
function changetoLowerCase(){
    const c = "functionUp"
    const d = c.toLowerCase()
    return d
}
function changetoupperCase(){
    const c = "functionUp"
    const d = c.toUpperCase()
    return d
}

module.exports.validator1= gettrim()
module.exports.validator2= changetoLowerCase()
module.exports.validator3= changetoupperCase()