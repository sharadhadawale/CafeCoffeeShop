const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  uniqueIdentifier: {
    type: Number,
    required: true
  },
  staffFirstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  staffMiddleName: {
    type: String,
    required: false
  },
  staffLastName: {
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
    maxlength: 50,
    unique: true
  },
  dateOfJoining: {
    type: String,
    required: true
  },
  position: {
    type: [String],
    required: true
  },
  staffType: {
    type: String,
    required: true
  },
  paymentFrequency: {
    type: String,
    required: true
  },
  paymentSalary: {
    type: Number,
    required: true
  },
  isActive:{type:Boolean, default:true}
});

const Staff = mongoose.model('Staff', StaffSchema);
exports.Staff = Staff; 