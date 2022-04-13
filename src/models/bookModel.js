const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true,
    },
    year: {
        type: "number",
        default: 2021
    },
    authorName: String,
    tags: [String],
    totalPages: "number",
    stockAvailable: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users









//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });


// module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
