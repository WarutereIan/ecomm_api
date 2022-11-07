const controller = {
    index: (req,res)=>{
        res.status(201).send('this is home')
    },
    signup: (req,res)=>{
        res.status(201).send('hit signup page')
    },
    loginget: (req,res)=>{
        res.send('hit log in page')

    }

}

module.exports = controller