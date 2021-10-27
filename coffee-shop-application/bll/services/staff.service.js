const { Staff } = require('../models/staff.model');

exports.findStaff= async (query)=>{
    try {
        return  await Staff.find(query).lean().exec();
    } catch (error) {
        throw error
    }
}

exports.saveStaff= async (staffData) =>{
    try {
      const staff = new Staff({
        uniqueIdentifier: staffData.uniqueIdentifier,
        staffFirstName: staffData.staffFirstName,
        staffMiddleName: staffData.staffMiddleName || [],
        staffLastName: staffData.staffLastName,
        phoneNumber: staffData.phoneNumber,
        email: staffData.email,
        dateOfJoining: staffData.dateOfJoining,
        position: staffData.dateOfJoining,
        staffType: staffData.staffType,
        paymentFrequency: staffData.paymentFrequency,
        paymentSalary: staffData.paymentSalary 
      });
       
      return await staff.save();
    } catch (error) {
        throw error
    }
}