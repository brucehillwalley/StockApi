"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | STOCK MANAGEMENT API
------------------------------------------------------- */
const { mongoose: { Schema, model } } = require('../configs/dbConnection')
const { firmStatus } = require('../constraints/role&status')
/* ------------------------------------------------------- */
const FirmSchema = new Schema({
    name: {
        type: String,
        required: true,
        index: true
    },

    phone: {
        type: String,
        required: true,
        unique: true,        
    },

    address: {
        type: String,
        required: true,
        unique: true,
    },

    image: {
        type: String,
    },

    status: {
       type: String,
       trim: true,
       required: true,
       enum: {
        values:Object.keys(firmStatus), 
        message:"Please enter a valid status"
    },
       default: Object.keys(firmStatus)[0]
    }
}, 
{ timestamps: true,
collection: "firms"})
/* ------------------------------------------------------- */

module.exports = model('Firm', FirmSchema)