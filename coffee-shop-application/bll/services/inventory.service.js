const { Inventory } =require('../models/inventory.model');

exports.findInventoryItemById = async (id)=>{
    try {
        return await Inventory.findById(id).lean().exec();
        
    } catch (error) {
        throw error
    }
};

exports.updateInventoryItem = async (id, newItem)=>{
    try {
        return await Inventory.updateOne({ _id: req.params.id },{$set:newItem});

    } catch (error) {
        throw error
    }
}
