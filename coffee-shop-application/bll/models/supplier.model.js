const config = require('config');
const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
  supplierID: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10,
    unique: true
  },
  supplierName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    minlength: 9,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
    unique: true
  },
  address: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
});

const Supplier = mongoose.model('Supplier', SupplierSchema);


exports.Supplier = Supplier; 