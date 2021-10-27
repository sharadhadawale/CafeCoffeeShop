const config = require('config');
const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const InventoryInfoSchema = new mongoose.Schema({
  staffID: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10
  },
  periodDate: {
    type: String,
    required: true
  }
});

const InventoryInfo = mongoose.model('InventoryInfo', InventoryInfoSchema);
exports.InventoryInfo = InventoryInfo; 