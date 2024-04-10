"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | STOCK MANAGEMENT API
------------------------------------------------------- */
const router = require("express").Router();
const firm = require("../controllers/firm");
/* ------------------------------------------------------- */

router.route("/").get(firm.list).post(firm.create);

router
  .route("/:firmId")
  .get(firm.read)
  .put(firm.update)
  .patch(firm.update)
  .delete(firm.delete);

module.exports = router;