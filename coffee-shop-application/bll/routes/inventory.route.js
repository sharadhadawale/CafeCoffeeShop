const express = require("express");
const router = express.Router();
const inventoryController = require('../../controllers/inventory.controller');

router.post("/save",inventoryController.saveInventoryItem);

module.exports= router;