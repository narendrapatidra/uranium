const mongoose = require("mongoose")
const emailValidator = require("email-validator")
const ObjectId = mongoose.Schema.Types.ObjectId
const objectId = mongoose.Types.ObjectId

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
            }, message: "Enter valid email id", isAsync: false
        }
    },
    mobile: {
        type: Number,
        required: "Mobile number is required",
        unique: true,
        trim: true,
        validate: {
            validator: function (number) {
                let x = number.toString()
                return ((x[0] == 9 || x[0] == 8 || x[0] == 7 || x[0] == 6) && x.length == 10 && x !== "")
            }, message: "Enter valid mobile number", isAsync: false
        }
    },
    collegeId: {
        type: ObjectId,
        trim: true,
        validate: {
            validator: function (CollegeId) {
                return objectId.isValid(CollegeId)
            }, message: "Enter valid collegeId", isAsync: false

        },
        ref: "College"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model("Intern", internSchema)