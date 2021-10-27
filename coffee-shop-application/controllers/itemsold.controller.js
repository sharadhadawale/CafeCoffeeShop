const { ItemSold } = require('../bll/models/itemsold.model');

/**
 * Used for saving item purchased
 * @param {*} ItemSoldRequest 
 * @param {*} ItemSoldResponse 
 * @param {*} next 
 * @returns 
 */
exports.saveItemSold = async (ItemSoldRequest, ItemSoldResponse,next) => {
    try {
  
  let taxInPercent = (ItemSoldRequest.body.applicableTax || 100) / 100; 

  const newItemSold = new ItemSold({
    transactionID: ItemSoldRequest.body.transactionID,
    staffUID: ItemSoldRequest.body.staffUID,
    soldDateTime: ItemSoldRequest.body.soldDateTime,
    applicableTax: taxInPercent,
    price: ItemSoldRequest.body.price,
    soldPriceWithTax: ( taxInPercent === 1 ? ItemSoldRequest.body.price : (ItemSoldRequest.body.price + (ItemSoldRequest.body.price * taxInPercent)))
  });
  const savedItemSold= await newItemSold.save();

  ItemSoldResponse.status(200).send({
    savedItemSold
  });
    } catch (error) {
    next(error)
    }

}

