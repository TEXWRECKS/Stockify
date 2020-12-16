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
    lastName: "Rodriguez",
    userItems:
      [
        {
          itemTitle: "Ryobi P737 18-Volt ONE+ Portable Cordless Power Inflator for Tires (Battery Not Included, Power Tool Only)",
          itemUrl: "https://www.amazon.com/dp/B017JIWT9U/",
          itemImage: "https://images-na.ssl-images-amazon.com/images/I/412PMzJ19IL.jpg",
          itemPrice: 61.21,
          itemStatus: "In-Stock",
          itemPriceAlert: 50,
        },
      ]
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
