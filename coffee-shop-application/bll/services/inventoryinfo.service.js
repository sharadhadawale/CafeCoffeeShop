const { InventoryInfo } =require('../models/inventoryinfo.model');

exports.findInventoryInfoItemById = async (id)=>{
    try {
        return await InventoryInfo.findById(id).lean().exec();
        
    } catch (error) {
        throw error
    }
};

exports.updateInventoryInfoItem = async (id, newItem)=>{
    try {
        return await InventoryInfo.updateOne({ _id: req.params.id },{$set:newItem});

    } catch (error) {
        throw error
    }
}
