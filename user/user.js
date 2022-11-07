const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        quantity:Number
    }],
    
})




module.exports = mongoose.model('User',UserSchema)
