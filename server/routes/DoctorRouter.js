'use strict'

const express = require('express')
const router = express.Router()
const DoctorController = require('../controllers/DoctorController')
const IsLogin = require('../middlewares/IsLogin')

// create doctor
router.post('/',IsLogin,(req,res)=>{
    DoctorController.createDokter(req,res)
})

// get list of doctor
router.get('/lists',(req,res)=>{
    DoctorController.getListofDoctors(req,res)
})

// get detail of doctor
router.get('/:id', (req,res) =>{
    DoctorController.getDetailOneDoctor(req,res)
})

module.exports = router