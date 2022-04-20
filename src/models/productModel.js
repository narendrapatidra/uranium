const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name:String,
    category:String,
    price:{
        type:String,
        require:true
    }
    // Write the schema content
}, { timestamps: true });

module.exports = mongoose.model('Produc', productSchema) //users
