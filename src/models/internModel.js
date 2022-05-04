const mongoose = require("mongoose")
const emailValidator = require("email-validator")
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required",
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function (email) {
                return emailValidator.validate(email)
            }, message: "Enter valid email id"
        }
    },
    mobile: {
        type: String,
        required: "Mobile number is required",
        unique: true,
        trim: true,
        validate: {
            validator: function (mobile) {
                let x = mobile
                return ((x[0] == 9 || x[0] == 8 || x[0] == 7 || x[0] == 6) && x.length == 10)
            }, message: "Enter valid mobile number"
        }
    },
    collegeId: {
        type: ObjectId,
        trim: true,
        ref: "College"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model("Intern", internSchema)