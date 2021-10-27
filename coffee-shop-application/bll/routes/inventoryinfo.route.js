const express = require("express");
const router = express.Router();
const inventoryInfoController = require('../../controllers/inventoryinfo.controller');

router.post("/save",inventoryInfoController.saveinventoryInfo);

module.exports= router;