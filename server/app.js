'use strict'

require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
// const bcyrptjs = require('bcryptjs')
mongoose.connect('mongodb://localhost:27017/caridokter',{useNewUrlParser: true});

const UserRouter = require('./routes/UserRouter')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/users',UserRouter)

app.get('/',(req,res)=>{
   console.log('Base setup ok') 
})

app.listen(process.env.PORT, ()=>{
    console.log('You are listening to PORT ',process.env.PORT)
})