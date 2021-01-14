const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemTitle: String,  // Name of item
    itemUrl: String,  // URL to item
    itemImage: String, // URL of image
    itemPrice: Number,  // latest item price
    itemStatus: String,  // current status: in-stock or out-of-stock
    itemPriceAlert: Boolean,  // set to alert on item price
    itemPriceThreshold: Number, // set threshold price to alert at
    itemAvailabilityAlert: Boolean, // set to alert on item availability
})

const userSchema = new Schema({
    email: String,  // User email
    firstName: String,  // User first name
    lastName: String,  // User last name
    userItems: [itemSchema],  // FK reference to items 
})

const User = mongoose.model("User", userSchema);
module.exports = User;