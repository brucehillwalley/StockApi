"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | STOCK MANAGEMENT API
------------------------------------------------------- */
const Firm = require("../models/firm");
/* ------------------------------------------------------- */
module.exports = {
  list: async (req, res) => {
    const data = await Firm.find();
    res.status(200).send({
      error: false,
      data,
    });
  },
  create: async (req, res) => {
    const data = await Firm.create(req.body);
    res.status(201).send({
      error: false,
      message: "New Firm is created",
      data,
    });
  },
  read: async (req, res) => {
    const data = await Firm.findOne({ _id: req.params.firmId });
    res.status(202).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await Firm.updateOne({ _id: req.params.firmId }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      data,
      updatedData: await Firm.findOne({ _id: req.params.firmId }),
    });
  },
  delete: async (req, res) => {
    const data = await Firm.deleteOne({ _id: req.params.firmId });
    res.status(data.deletedCount >= 1 ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
