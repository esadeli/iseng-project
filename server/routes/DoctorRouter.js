'use strict'

const express = require('express')
const router = express.Router()
const DoctorController = require('../controllers/DoctorController')
const IsLogin = require('../middlewares/IsLogin')

// create dokter
router.post('/',IsLogin,(req,res)=>{
    DoctorController.createDokter(req,res)
})

// get list of dokter
router.get('/lists',(req,res)=>{
    DoctorController.getListofDoctors(req,res)
})

module.exports = router