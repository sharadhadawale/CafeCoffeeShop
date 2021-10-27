const { Customer } = require("../models/customer.model");
const express = require("express");
const router = express.Router();
const controller = require('../../controllers/customer.controller');

router.post("/save", controller.saveCustomer)

module.exports = router;