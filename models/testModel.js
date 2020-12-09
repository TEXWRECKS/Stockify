const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const testSchema = new Schema({
    testString: String
})

const Test = mongoose.model("Test", testSchema);
module.exports = Test;