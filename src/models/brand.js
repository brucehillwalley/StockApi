"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | STOCK MANAGEMENT API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Brand Model:

const BrandSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    image: {
        type: String,
        trim: true,
    }

}, {
    collection: 'brands',
    timestamps: true
})

/* ------------------------------------------------------- */
module.exports = mongoose.model('Brand', BrandSchema)