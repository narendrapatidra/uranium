const mongoose = require('mongoose');
const  ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    
	userId:{
        type: ObjectId,
        ref:"User"
    },
	productId: {
        type:ObjectId,
        ref : "Produc"

    },
	amount:Number,
	isFreeAppUser: Boolean, 
	date: string
    
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) //users
