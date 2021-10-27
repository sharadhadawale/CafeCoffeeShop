const config = require('config');
const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const ItemPurchasedSchema = new mongoose.Schema({
  transactionID: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10,
    unique: true
  },
  staffUID: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10,
  },
  supplierID: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10
  },
  purchasedDateTime: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  applicableTax: {
    type: Number,
    required: false
  },
  purchasedPriceWithTax: {
    type: Number,
    required: false
  },
  customerID: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10
  },
  isActive:{type:Boolean, default:true}
});

const ItemPurchased = mongoose.model('ItemPurchased', ItemPurchasedSchema);
exports.ItemPurchased = ItemPurchased; 