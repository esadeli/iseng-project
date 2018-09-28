'use strict'

const User = require('../models/user')
const HashPassword = require('../helpers/HashPassword')
const EmailValidator = require('../helpers/EmailValidator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

class UserController {

    //register user
    static registerUser(req,res){
        let hash = HashPassword(req.body.password)

        // check email
        if(EmailValidator(req.body.email)){
            User.create({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: hash
            })
            .then(user=>{
                jwt.sign({
                    userid: user._id,
                    name: user.name,
                    email: user.email
                },process.env.SECRETTOKEN, (err,token)=>{
                    if(!err){
                        res.status(200).json({
                            msg: 'Register Sukses',
                            token: token,
                            userid: user._id,
                            name: user.name
                        })
                    }else{
                        res.status(500).json({
                            msg: 'ERROR', err
                        })
                    }
                })
            })
            .catch(error=>{
                res.status(500).json({ msg: 'ERROR: ',error})
            })
        }else{
            res.status(500).json({
                msg: 'Please input email in this field'
            })
        }
    }

    // login user
    static loginUser(req,res){
      //check the input first
      if(EmailValidator(req.body.logininput)){
          //email
          User.findOne({email: req.body.logininput})
              .then(user=>{
                  if(user){
                      // check password:
                      if(bcrypt.compareSync(req.body.password,user.password)){
                          //get token
                          jwt.sign({
                              userid: user._id,
                              name: user.name,
                              email: user.email
                          },process.env.SECRETTOKEN,(error,token)=>{
                              if(!error){
                                  res.status(200).json({
                                      msg: 'Login success',
                                      token: token,
                                      userid: user._id,
                                      name: user.name
                                  })
                              }else{
                                  res.status(500).json({
                                      msg: 'ERROR: ',error
                                  })
                              }
                          })
                      }else{
                          res.status(403).json({
                              msg: 'You cannot login to site please check your email/username/password'    
                          })
                      }
                  }else if(user===null){
                      res.status(403).json({ 
                          msg: 'You cannot login to site please check your email/username/password'
                      })
                  }
                })
                .catch(error =>{
                    res.status(500).json({ msg: 'ERROR ',error})
                })
        }else if(!EmailValidator(req.body.logininput)){
            // username
            User.findOne({username: req.body.logininput})
               .then(user=>{
                    if(user){
                        // check password
                        if(bcrypt.compareSync(req.body.password, user.password)){
                            //get token
                            jwt.sign({
                                userid: user._id,
                                name: user.name,
                                email: user.email
                            },process.env.SECRETTOKEN,(error,token)=>{
                                if(!error){
                                    res.status(200).json({
                                        msg: 'Login success',
                                        token: token,
                                        userid: user._id,
                                        name: user.name
                                    })
                                }else{
                                    res.status(500).json({
                                        msg: 'ERROR: ',error
                                    })
                                }
                            })
                        }else{
                            res.status(403).json({
                                msg: 'You cannot login to site please check your email/username/password'
                            })    
                        }
                    }else if(user===null){
                        res.status(403).json({
                            msg: 'You cannot login to site please check your email/username/password'
                        })
                    }
               })
               .catch(error=>{
                   res.status(500).json({ mgs: 'ERROR: ',error})
               })

        }
    }
}

module.exports = UserController