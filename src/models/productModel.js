const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name:String,
    category:String,
    price:{
        type:Number,
        require:true
    }
    // Write the schema content
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema) //users
