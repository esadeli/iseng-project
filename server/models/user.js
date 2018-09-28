'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const beautify = require('mongoose-beautiful-unique-validation')

const UserSchema = new Schema({
name:  { type: String},
username: { 
    type: String,
    unique: 'Username should be unique'
},
email: {
    type: String,
    unique: 'Email should be unique'
},
password: {type: String},
role: {
    type: String,
    default: 'Patient'
}
},{
    timestamps: true
})

UserSchema.plugin(beautify)
const User = mongoose.model('User',UserSchema)

module.exports = User