const { ItemPurchased } = require('../bll/models/itempurchased.model');

/**
 * Used for saving item purchased
 * @param {*} ItemPurchasedRequest 
 * @param {*} ItemPurchasedResponse 
 * @param {*} next 
 * @returns 
 */
exports.saveItemPurchased = async (ItemPurchasedRequest, ItemPurchasedResponse,next) => {

  let taxInPercent = (ItemPurchasedRequest.body.applicableTax || 100) / 100;

    try {
      
  const newItemPurchased = new ItemPurchased({
    transactionID: ItemPurchasedRequest.body.transactionID,
    staffUID: ItemPurchasedRequest.body.staffUID,
    supplierID: ItemPurchasedRequest.body.supplierID,
    purchasedDateTime: ItemPurchasedRequest.body.purchasedDateTime,
    applicableTax: taxInPercent,
    price: ItemPurchasedRequest.body.price,
    purchasedPriceWithTax: ( taxInPercent === 1 ? ItemPurchasedRequest.body.price : (ItemPurchasedRequest.body.price + (ItemPurchasedRequest.body.price * taxInPercent))),
    customerID: ItemPurchasedRequest.body.customerID
  });
  const savedItemPurchased= await newItemPurchased.save();

  ItemPurchasedResponse.status(200).send({
    savedItemPurchased
  });
    } catch (error) {
    next(error)
    }

}

