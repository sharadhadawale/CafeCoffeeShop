const { Supplier } = require("../models/supplier.model");
const express = require("express");
const router = express.Router();
const controller = require('../../controllers/supplier.controller');

router.post("/save", controller.saveSupplier)

module.exports = router;