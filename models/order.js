const { default: mongoose } = require("mongoose");

const OrderSchema = new mongoose.Schema({
    
    _createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    quantity: Number 
})

module.exports = mongoose.model('Order', OrderSchema)