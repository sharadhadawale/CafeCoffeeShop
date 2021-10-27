const { Customer } = require('../models/customer.model');
const { ItemPurchased } = require('../models/itempurchased.model');

exports.findCustomerById= async (id)=>{
    try {
        return  await Customer.findById(id).select("-password").lean().exec();
    } catch (error) {
        throw error
    }
};

exports.findCustomer= async (query)=>{
    try {
        return  await Customer.find(query).lean().exec();
    } catch (error) {
        throw error
    }
}

exports.findCustomerPurchase= async (query)=>{
    try {
        return  await ItemPurchased.find(query).lean().exec();
    } catch (error) {
        throw error
    }
}

exports.saveCustomer= async (customerData) =>{
    try {
      const customer = new Customer({
            customerID: customerData.customerID,
            firstName: customerData.firstName,
            middleName: customerData.middleName,
            lastName: customerData.lastName,
            phoneNumber: customerData.phoneNumber,
            email: customerData.email,
            password: customerData.password,
            discountType: customerData.discountType,
            discountAmount: customerData.discountAmount
        });
       
        return await customer.save();
    } catch (error) {
        throw error
    }
}