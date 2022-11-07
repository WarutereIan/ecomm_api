const express = require('express')
const routes = require('./routes/routes')
const session = require('cookie-session')
const { default: mongoose } = require('mongoose')
const multer = require('multer')

require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI

const app = new express()

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + '-'+Date.now())
    }
})

const upload = multer({storage: storage})

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(session({
    name: 'token',
    secret:'iam your secret',
    maxAge: 1*60*60
    })
    )



app.use('/',routes)

mongoose.connect(MONGO_URI,
{useNewUrlParser: true,
    useUnifiedTopology: true},
    (err)=>{
        if(err){
           return console.log(err)
        }
        console.log('connected to database successfully')
    })




app.listen(5000,()=>{
    console.log('server running at port 5000')
})

module.exports = upload