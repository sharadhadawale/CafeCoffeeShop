const {Inventory} = require('../bll/models/inventory.model');
const InventoryService = require('../bll/services/inventory.service');

/**
 * Used for saving inventory items
 * @param {*} inventoryRequest 
 * @param {*} inventoryResponse 
 * @param {*} next 
 * @returns 
 */
exports.saveInventoryItem = async (inventoryRequest, inventoryResponse,next) => {
    try {
      
  const newInventory = new Inventory({
      ItemID: inventoryRequest.body.ItemID,
      total: inventoryRequest.body.total,
      PurchasedSinceLast: inventoryRequest.body.PurchasedSinceLast,
      SoldSinceLast: inventoryRequest.body.SoldSinceLast,
      UnaccountedFor: inventoryRequest.body.UnaccountedFor,
      PeriodDate: inventoryRequest.body.PeriodDate
  });
  const savedInventoryItem= await newInventory.save();

  inventoryResponse.status(200).send({
    savedInventoryItem
  });
    } catch (error) {
    next(error)
    }

}

