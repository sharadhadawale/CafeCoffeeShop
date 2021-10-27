const config = require('config');
const mongoose = require('mongoose');


const CustomerSchema = new mongoose.Schema({
  customerID: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 10,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 10
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
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
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  discountType: {
    type: [String],
    required: false,
    enum: ['Fixed Amount', 'Percentage']
  },
  discountAmount: {
    type: String,
    required: false
  }
});

const Customer = mongoose.model('Customer', CustomerSchema);


exports.Customer = Customer; 