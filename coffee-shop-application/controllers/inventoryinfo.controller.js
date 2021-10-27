const {InventoryInfo} = require('../bll/models/inventoryinfo.model');
const InventoryInfoService = require('../bll/services/inventoryinfo.service');

/**
 * Used for saving inventory info items
 * @param {*} inventoryRequest 
 * @param {*} inventoryResponse 
 * @param {*} next 
 * @returns 
 */
exports.saveinventoryInfo = async (inventoryInfoRequest, inventoryInfoResponse,next) => {
    try {
      
  const newInventoryInfo = new InventoryInfo({
      staffID: inventoryInfoRequest.body.staffID,
      periodDate: inventoryInfoRequest.body.periodDate
  });
  const savedInventoryInfoItem= await newInventoryInfo.save();

  inventoryInfoResponse.status(200).send({
    savedInventoryInfoItem
  });
    } catch (error) {
    next(error)
    }

}

