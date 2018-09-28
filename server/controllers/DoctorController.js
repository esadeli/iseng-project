'use strict'

const Doctor = require('../models/doctor')

class DoctorController {

    // create dokter
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

    // get list of dokter
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
}

module.exports = DoctorController