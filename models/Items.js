const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemTitle: String,
    itemUrl: String,
    itemPrice: Number,
    itemStatus: String,
})

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;