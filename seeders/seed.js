let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/stockify_db", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let userSeed = [
  {
    email: "smrodriguez88@gmail.com",
    firstName: "Steve",
    lastName: "Rodriguez"
  },
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
