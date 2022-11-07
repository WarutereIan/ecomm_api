const { default: mongoose, model } = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category:{
        type: String,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller'
    },
    image:{
        data: Buffer,
        contentType: String
    }
})

model.exports = mongoose.model('Product',ProductSchema)