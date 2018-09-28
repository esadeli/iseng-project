'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DoctorSchema = new Schema({
    name: {
        type: String
    },
    skill: [{
        type: String
    }],
    schedule: [{
        type: String
    }]
},{
    timestamps: true
})

const Doctor = mongoose.model('Doctor',DoctorSchema)
module.exports = Doctor
