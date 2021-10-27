const {Supplier} = require('../bll/models/supplier.model');
const SupplierService = require('../bll/services/supplier.service');

exports.saveSupplier= async (req, res, next) => {
    try {
        //find an existing customer
        const query={ email: req.body.email }
        let supplier = await SupplierService.findSupplier(query);
        if (supplier.length > 1) return res.status(400).send('RECORD_EXISTS');
        
        const savedSupplier= await SupplierService.saveSupplier(req.body);
        
        res.status(200).send({
            savedSupplier
          });
    } catch (error) {
        next(error)
    }


};

