const upload = require('../index')
const fs = require('fs')
const path = require('path')

const Product = require('../models/product')
const sellers = {
    createProduct: async (req,res)=>{
        const {name,quantity,price,category} = req.body
        
        upload.single('image')
        
        const image = {
            data: fs.readFileSync(path.join(__dirname 
                + '/uploads'+ req.file.filename)),
            contentType: 'image/png'
        }

        const product = await Product.create({name,
            quantity,
            price,
            category,
            image},(err)=>{
                if(err){
                    console.log(err)
                    res.status(400).send('error creating new listing')
                }
                res.status(200).json({"product":product.toJSON()})
            })
        
    

    },
    viewOrders: async (req,res)=>{
        
    },
    serviceOrders: ()=>{}
}

module.exports = sellers