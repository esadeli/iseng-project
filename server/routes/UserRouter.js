'use strict'

const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

//register
router.post('/register',(req,res)=>{
    UserController.registerUser(req,res)
})

// login
router.post('/login',(req,res)=>{
    UserController.loginUser(req,res)
})

module.exports = router