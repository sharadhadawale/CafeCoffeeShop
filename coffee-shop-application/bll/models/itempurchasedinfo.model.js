const config = require('config');
const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const ItemPurchasedInfoSchema = new mongoose.Schema({
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
  purchased_quantity: {
    type: Number,
    required: true
  },
  isActive:{type:Boolean, default:true}
});

const ItemPurchasedInfo = mongoose.model('ItemPurchasedInfo', ItemPurchasedInfoSchema);
exports.ItemPurchasedInfo = ItemPurchasedInfo; 