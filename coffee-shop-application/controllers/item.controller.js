const {Item} = require('../bll/models/item.model');
const ItemService = require('../bll/services/item.service');
exports.getAllItems = async (req, res, next)=>{
  try {
      
  // const reqObj= req
  const existingItems = await Item.find({ });
  res.status(200).send({
      existingItems
      
    });
  } catch (error) {
   next(error)

  }

};
exports.findItem = async(req, res, next)=>{
    try {
        
    // const reqObj= req
    const existingItem = await ItemService.findById(req.params.id);
    res.status(200).send({
        existingItem
        
      });
    } catch (error) {
     next(error)

    }

};

exports.updateItem = async (req, res,next) => {
    try {
        //find an existing Item
  const existingItem = await ItemService.findById(req.params.id);
  const newItem = Object.assign({},existingItem,req.body);
  const updatedItem= await ItemService.updateItem(req.params.id, newItem);

  res.status(200).send({
      updatedItem
    
  });
    } catch (error) {
        next(error)
    }

  
};

exports.saveItem = async (req, res,next) => {
    try {
        
  const existingItem = await Item.findOne({ itemID: req.body.itemID });
  if (!!existingItem) return res.status(400).send("Item already registered.");

  const newItem = new Item({
    itemID: req.body.itemID,
    itemName: req.body.itemName,
    pricePerUnit: req.body.pricePerUnit
  });
  const savedItem= await newItem.save();

  res.status(200).send({
    savedItem
    
  });
    } catch (error) {
    next(error)
    }

}

exports.deleteItem = async (req, res,next) => {
  try {
      
//find an existing Item
const existingItem = await Item.findById( req.params.id );
if (! existingItem) return res.status(400).send("No Item  registered by name ", req.params.itemID);
const deletedItem= await Item.remove({_id:req.params.id})
res.status(200).send({
  deletedItem
  
});
  } catch (error) {
  next(error)
  }

}