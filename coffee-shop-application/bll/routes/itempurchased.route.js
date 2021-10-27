const express = require("express");
const router = express.Router();
const Controller = require('../../controllers/itempurchased.controller');

router.post("/save",Controller.saveItemPurchased);

module.exports= router;