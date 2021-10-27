const express = require("express");
const router = express.Router();
const Controller = require('../../controllers/itemsold.controller');

router.post("/save",Controller.saveItemSold);

module.exports= router;