const Order = require('../models/order')
require('dotenv').config()

const token = req.session.token,
    privateKey = process.env.SECRET_KEY,
    jwt = require('jsonwebtoken'),
    userId = jwt.verify(token,privateKey),

    buyers = {
    viewProduct: async (req,res)=>{


    },
    createOrder: async (req,res)=>{
        const {productId} = req.body
        const newOrder = await Order.create({productId}, (err)=>{
            if(err){
                console.log(err)
                return res.status(401)
                .send('error creating new listing')
            }
            res.status(200).json({"order":newOrder.toJSON()})
        })
    },
    viewActiveOrders: (req,res)=>{

    },
    deleteOrder: (req,res)=>{},


}

module.exports = buyers
