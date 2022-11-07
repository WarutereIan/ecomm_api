const express = require('express'),
 controller = require('../controllers/controllers')
 const router = express.Router()
 const auth = require('../auth/auth')
 const sellers = require('../controllers/sellers')
 const buyers = require('../controllers/buyers')
 

 

router.get('/', controller.index)

router.post('/buyerSignup/',auth.signup ,controller.signup)

router.get('/buyerLogin/', controller.loginget)

//buyer sees default categories on home, like in jiji
router.get('/buyer/home', buyers.home)

//user specifies categories they want to view, this comes from home
router.get('/buyer/viewproducts/:category', buyers.viewProduct)

//user making order based on product id
router.post('/buyer/makeOrder/:productId', buyers.createOrder)

router.delete('/buyer/deleteOrder/:orderId', buyers.deleteOrder)



router.post('/Login/', auth.login, (res)=>{
    res.send('logged in successfully')
})

module.exports = router