const mongoose = require('mongoose')

const SellerSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    _ordersToSeller: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
})



module.exports = mongoose.model('Seller',SellerSchema)