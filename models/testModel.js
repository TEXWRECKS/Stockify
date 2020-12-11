const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const testSchema = new Schema({
    testString: String
})

// mongoose schema goes here...

const Test = mongoose.model("Test", testSchema);
module.exports = Test;