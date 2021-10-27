module.exports = function (app) {
    app.use("/api/staff", require("./bll/routes/staff.route"));
    app.use("/api/inventory", require("./bll/routes/inventory.route"));
    app.use("/api/inventoryinfo", require("./bll/routes/inventoryinfo.route"));
    app.use("/api/item", require("./bll/routes/item.route"));
    app.use("/api/itempurchased", require("./bll/routes/itempurchased.route"));
    app.use("/api/itempurchasedinfo", require("./bll/routes/itempurchasedinfo.route"));
    app.use("/api/itemsold", require("./bll/routes/itemsold.route"));
    app.use("/api/itemsoldinfo", require("./bll/routes/itemsoldinfo.route"));
    app.use("/api/supplier", require("./bll/routes/supplier.route"));
    app.use("/api/customer", require("./bll/routes/customer.route"));
};