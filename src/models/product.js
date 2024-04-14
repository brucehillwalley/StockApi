"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | STOCK MANAGEMENT API
------------------------------------------------------- */
const { mongoose:{ Schema, model} } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        index: true
    }




},{ collection:"products", timestamps: true })

module.exports = model("Product", ProductSchema)