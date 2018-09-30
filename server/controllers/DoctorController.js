'use strict'

const Doctor = require('../models/doctor')

class DoctorController {

    // create doctor
    static createDokter(req,res){
        Doctor.create({
            name: req.body.name,
            skill: req.body.skill,
            schedule: req.body.schedule
        })
        .then(doctor=>{
            res.status(200).json({
                msg: 'Create doctor success',
                data: doctor
            })
        })
        .catch(error=>{
            res.status(500).json({
                msg: 'ERROR: ',error
            })
        })
    }

    // get list of doctors
    static getListofDoctors(req,res){
        Doctor.find({})
            .then(doctors =>{
                res.status(200).json({
                    msg: 'List of doctors',
                    data: doctors
                })
            })
            .catch(error =>{
                res.status(500).json({
                    msg: 'ERROR: ',error
                })  
            })
    }

    // get detail of one doctor
    static getDetailOneDoctor(req,res){
        Doctor.findOne({ _id: req.params.id})
            .then(doctor => {
                res.status(200).json({
                    msg: 'Detail of Doctor',
                    data: doctor
                })
            })
            .catch(error =>{
                res.status(500).json({
                    msg: 'ERROR: ',error
                })
            })
    }
}

module.exports = DoctorController