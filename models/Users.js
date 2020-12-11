const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemTitle: String,
    itemUrl: String,
    itemPrice: Number,
    itemStatus: String,  //current status: in-stock or out-of-stock
    itemAlert: String,  //alert type: price or in-stock
})

const userSchema = new Schema({
    email: String,
    firstName: String,
    lastName: Number,
    itemStatus: String,
})

const User = mongoose.model("User", userSchema);
module.exports = User;