const config = require('config');
const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  ItemID: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10
  },
  total: {
    type: Number,
    required: true,
  },
  PurchasedSinceLast: {
    type: Number,
    required: true
  },
  SoldSinceLast: {
    type: Number,
    required: true
  },
  UnaccountedFor: {
    type: Number,
    required: true
  },
  PeriodDate: {
    type: String,
    required: true
  }
});

const Inventory = mongoose.model('Inventory', InventorySchema);
exports.Inventory = Inventory; 