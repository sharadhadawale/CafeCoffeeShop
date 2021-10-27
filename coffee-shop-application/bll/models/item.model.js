const config = require('config');
const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const ItemSchema = new mongoose.Schema({
  itemID: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10,
    unique: true
  },
  itemName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  pricePerUnit:{
      type:Number,
      required:true
  },
  isActive:{type:Boolean, default:true}
});

const Item = mongoose.model('Item', ItemSchema);
exports.Item = Item; 