const express = require("express");
const router = express.Router();
const Controller = require('../../controllers/itempurchasedinfo.controller');

router.post("/save",Controller.saveItemPurchasedInfo);

module.exports= router;