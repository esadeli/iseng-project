'use strict'

const jwt = require('jsonwebtoken')
const User = require('../models/user')

function IsLogin(req,res,next) {
    jwt.verify(req.headers.token,process.env.SECRETTOKEN, (err,decoded)=>{
        if(!err){
            let objdecoded = decoded
            // console.log('DECODED---->',decoded)
            User.findOne({
                _id: decoded.userid
            })
            .then(user =>{
                req.decoded = objdecoded
                next()
            })
            .catch(error =>{
                res.status(500).json({ msg: 'ERROR: ',error})
            })

        }else{
            res.status(500).json({
                msg: 'ERROR: ',err
            })
        }
    })
}

module.exports = IsLogin