const { Supplier } = require('../models/supplier.model');

exports.findSupplier= async (query)=>{
    try {
        return  await Supplier.find(query).lean().exec();
    } catch (error) {
        throw error
    }
}


exports.saveSupplier= async (SupplierData) =>{
    try {
      const supplier = new Supplier({
        "supplierID": SupplierData.supplierID,
        "supplierName": SupplierData.supplierName,
        "phoneNumber": SupplierData.phoneNumber,
        "email": SupplierData.email,
        "address": SupplierData.address
        });
       
        return await supplier.save();
    } catch (error) {
        throw error
    }
}