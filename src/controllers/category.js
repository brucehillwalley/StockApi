"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | STOCK MANAGEMENT API
------------------------------------------------------- */
const Category = require("../models/category")
/* ------------------------------------------------------- */
module.exports = {

    list: async (req, res) => {
      
        const data = await Category.find()

        res.status(200).send({
            error: false,
            data
        })
    },

    create: async (req, res) => {
      
        const data = await Category.create(req.body)

        res.status(201).send({
            error: false,
            message: "New category added successfully",
            data
        })
    },

    read: async (req, res) => {
      
        const data = await Category.findOne({ _id: req.params.categoryId})

        res.status(202).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
      
        const data = await Category.findOne({ _id: req.params.categoryId }, req.body)

        res.status(202).send({
            error: false,
            data,
            updatedData: await Category.findOne({ _id: req.params.categoryId})
        })
    },

    delete: async (req, res) => {
      
        const data = await Category.deleteOne({ _id: req.params.categoryId})

        res.status(data.deletedCount >= 1 ? 204: 404).send({
            error: !data.deletedCount,
            data
        })
    }
}