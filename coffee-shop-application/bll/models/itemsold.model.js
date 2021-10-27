const config = require('config');
const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const ItemSoldSchema = new mongoose.Schema({
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
    maxlength: 10
  },
  soldDateTime: {
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
  soldPriceWithTax: {
    type: Number,
    required: false
  },
  isActive:{type:Boolean, default:true}
});

const ItemSold = mongoose.model('ItemSold', ItemSoldSchema);
exports.ItemSold = ItemSold; 