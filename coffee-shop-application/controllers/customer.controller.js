const {Customer} = require('../bll/models/customer.model');
const customerService = require('../bll/services/customer.service');

exports.saveCustomer= async (req, res, next) => {
    try {
        //find an existing customer
        const query={ email: req.body.email }
        let customer = await customerService.findCustomer(query);
        if (!customer) return res.status(400).send('RECORD_EXISTS');
        const purchasequery ={customerID: req.body.customerID }
        let customerOrder = await customerService.findCustomerPurchase(purchasequery);

        let sum = 0;
        let discountedAmount = 0;

        if(customerOrder && customerOrder.length > 0 ){
            customerOrder.forEach((element) => 
               sum += element.purchasedPriceWithTax
            )
            console.log("sum", sum);
            if (req.body.discountType === "Fixed Amount"){
                discountedAmount = sum - req.body.discountAmount;
            }
            else {
                discountedAmount = sum - (sum * req.body.discountAmount)/100;
            }
        }
        req.body.discountAmount = discountedAmount;

        const savedCustomer= await customerService.saveCustomer(req.body);
        
        res.status(200).send({
            savedCustomer
          });
    } catch (error) {
        next(error)
    }


};

