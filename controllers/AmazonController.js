const nightmare = require('nightmare')()
// const mongoose = require("mongoose");


async function getItem(url){
    console.log(`Item URL being scraped by nightmare ${url}`)
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
                    .catch(err => {
                        console.error(err)
                        return null
                    })
    item.url = url
    console.log(item)
    return item
}

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/stockify_db", { useNewUrlParser: true, useUnifiedTopology: true });
// deleteItem("smrodriguez88@gmail.com", {'title': 'Test Product', 'url': 'https://test.com/item', 'image': 'https://imgur.com/gallery/CNhtJan', 'price':'$3.50', 'availability':'In-Stock', 'itemPriceAlert': false})

module.exports = {getItem};
