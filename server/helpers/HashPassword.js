'use strict'

// const crypto = require('crypto')
const bcryptjs = require('bcryptjs');
const salt = bcryptjs.genSaltSync(10);

function HashPassword(input){

    const hash = bcryptjs.hashSync(input,salt)
    // const hash = crypto.createHmac('sha256', process.env.SECRET)
    //                .update(input)
    //                .digest('hex');
    return hash              
}

module.exports = HashPassword