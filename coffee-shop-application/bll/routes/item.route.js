const express = require("express");
const router = express.Router();
const controller = require('../../controllers/item.controller')

router.get("/",controller.getAllItems);
router.get("/:id",controller.findItem);
router.put("/:id",controller.updateItem);
router.delete("/:id",controller.deleteItem);
router.post("/save",controller.saveItem);

module.exports= router