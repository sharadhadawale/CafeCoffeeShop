const express = require("express");
const router = express.Router();
const Controller = require('../../controllers/itemsoldinfo.controller');

router.post("/save",Controller.saveItemSoldInfo);

module.exports= router;