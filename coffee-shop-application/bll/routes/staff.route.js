const express = require("express");
const router = express.Router();
const staffController = require('../../controllers/staff.controller');

router.post("/save", staffController.saveStaff)
module.exports = router;