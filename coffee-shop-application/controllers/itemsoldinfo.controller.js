const { ItemSoldInfo } = require('../bll/models/itemsoldinfo.model');

/**
 * Used for saving item purchased
 * @param {*} ItemSoldInfoRequest 
 * @param {*} ItemSoldInfoResponse 
 * @param {*} next 
 * @returns 
 */
exports.saveItemSoldInfo = async (ItemSoldInfoRequest, ItemSoldInfoResponse,next) => {
    try {
      
  const newItemSoldInfo = new ItemSoldInfo({
    transactionID: ItemSoldInfoRequest.body.transactionID,
    ItemID: ItemSoldInfoRequest.body.ItemID,
    sold_quantity: ItemSoldInfoRequest.body.sold_quantity
  });
  const savedItemSoldInfo= await newItemSoldInfo.save();

  ItemSoldInfoResponse.status(200).send({
    savedItemSoldInfo
  });
    } catch (error) {
    next(error)
    }

}

