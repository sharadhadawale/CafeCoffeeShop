const { ItemPurchasedInfo } = require('../bll/models/itempurchasedinfo.model');

/**
 * Used for saving item purchased
 * @param {*} ItemPurchasedInfoRequest 
 * @param {*} ItemPurchasedInfoResponse 
 * @param {*} next 
 * @returns 
 */
exports.saveItemPurchasedInfo = async (ItemPurchasedInfoRequest, ItemPurchasedInfoResponse,next) => {
    try {
      
  const newItemPurchasedInfo = new ItemPurchasedInfo({
    transactionID: ItemPurchasedInfoRequest.body.transactionID,
    ItemID: ItemPurchasedInfoRequest.body.ItemID,
    purchased_quantity: ItemPurchasedInfoRequest.body.purchased_quantity
  });
  const savedItemPurchasedInfo= await newItemPurchasedInfo.save();

  ItemPurchasedInfoResponse.status(200).send({
    savedItemPurchasedInfo
  });
    } catch (error) {
    next(error)
    }

}

