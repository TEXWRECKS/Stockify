const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemTitle: String,  // Name of item
    itemUrl: String,  // URL to item
    itemPrice: Number,  // latest item price
    itemStatus: String,  // current status: in-stock or out-of-stock
    itemAlert: String,  // alert type: price or in-stock
})

const userSchema = new Schema({
    email: String,  // User email
    firstName: String,  // User first name
    lastName: Number,  // User last name
    userItems: [itemSchema],  // FK reference to items 
})

const User = mongoose.model("User", userSchema);
module.exports = User;