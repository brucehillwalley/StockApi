"use strict"
const { Transform } = require('nodemailer/lib/xoauth2')
/* -------------------------------------------------------
    NODEJS EXPRESS | STOCK MANAGEMENT API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
const firm = require('./firm')
/* ------------------------------------------------------- */
// Purchase Model:

const PurchaseSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    firmId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm',
        required: true
    },
    brandId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        default: 1,
    },
    amount:{
        type: Number,
        set: function(){
            return this.quantity * this.price
        },
        default: function(){
            return this.quantity * this.price
        },
        transform: function(){
            return this.quantity * this.price
        }
    }
   
},
{
    collection: "purchases",
    timestamps: true
})

/* ------------------------------------------------------- */
module.exports = mongoose.model('Purchase', PurchaseSchema)