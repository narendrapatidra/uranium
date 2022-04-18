const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema( {
    name: String,
    gender: String,
    percentage:Number,


}, { timestamps: true });


// module.exports = mongoose.model('Developer', developerSchema)
