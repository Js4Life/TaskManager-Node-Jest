const jwt = require('jsonwebtoken')
const User = require('../models/users')

const auth = async(req,res,next) => {
    console.log('auth Middleware')
    
    try {
        const token = req.header('Authorization').replace('Bearer ','')
     //   console.log('token',token)
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findOne( {_id : decoded._id,'tokens.token':token})
       // console.log('bearer',token)
     //   console.log(decoded)
      //  console.log('user with code',user)
        if(!user) {
            throw new Error("No user")
        }
        req.token = token
        req.user = user
        next()
        
    } catch (error) {
        res.status(401).send({error:'Please authenticate'})
        
    }
}

module.exports=auth