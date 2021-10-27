const config = require('config');
const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const ItemSoldInfoSchema = new mongoose.Schema({
  transactionID: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10,
    unique: true
  },
  ItemID: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10
  },
  sold_quantity: {
    type: Number,
    required: true
  },
  isActive:{type:Boolean, default:true}
});

const ItemSoldInfo = mongoose.model('ItemSoldInfo', ItemSoldInfoSchema);
exports.ItemSoldInfo = ItemSoldInfo; 