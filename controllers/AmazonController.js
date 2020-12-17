const nightmare = require('nightmare')()
const db = require("../models");
// const mongoose = require("mongoose");  // UNCOMMENT THIS TO TEST

// getItem takes in a URL and parses it for item information
async function getItem(url){
    const item = await nightmare.goto(url)
                    .wait("#landingImage")
                    .evaluate(() => {
                        let item = {"image": "", "title": "", "price": "", "availability": ""}
                        item.image = document.getElementById("landingImage") ? document.getElementById("landingImage").src : ""
                        item.title = document.getElementById("productTitle").innerText
                        item.price = document.getElementById("priceblock_ourprice") ? parseFloat((document.getElementById("priceblock_ourprice").innerText).replace('$', '')) : ""
                        item.availability = document.getElementById("availability") ? document.getElementById("availability").innerText : ""
                        return item
                    })
                    .end()
                    .catch(err => console.error(err))
    item.url = url
    console.log(item)
    return item
}

// saveItem saves the item information under the specified username (email address)
async function saveItem(user, item){
    db.User.findOne({email: user})
    .then(function(record){
        record.userItems.push({
            itemTitle: item.title,
            itemUrl: item.url,
            itemImage: item.image,
            itemPrice: item.price,
            itemStatus: item.availability,
            itemPriceAlert: 0,
    })
    record.save()
    console.log(`${item.title} Saved to DB for ${user}`)
}).catch(err => console.error(err))
}


module.exports = {getItem, saveItem};

// Lego Bugatti - https://www.amazon.com/gp/product/B07C8L9CRJ/ref=ox_sc_saved_title_4?smid=A2TF0EOVMPEXJK&psc=1
// Lego Stranger Things - https://www.amazon.com/gp/product/B07Q2WMBLR/ref=ox_sc_saved_title_7?smid=ATVPDKIKX0DER&psc=1
// getItem("https://www.amazon.com/gp/product/B07Q2WMBLR/")
// getItem("https://www.amazon.com/Ryobi-P737-Portable-Cordless-Inflator/dp/B017JIWT9U/")
// getItem("https://www.amazon.com/RYOBI-P717-P163-Spotlight-Automotive-Lithium-Ion/dp/B088PBKNGS/")
// getItem("https://www.amazon.com/gp/product/B01LWK88EO/")

// UNCOMMENT THIS TO TEST
// async function test(){
//     mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/stockify_db", { useNewUrlParser: true, useUnifiedTopology: true });
//     item = await getItem("https://www.amazon.com/gp/product/B0050JRZR2/")
//     await saveItem("smrodriguez88@gmail.com", item)
//     return true
// }

// test()
