const db = require("../models");

// getUsersSavedItems queries the database to get item information under the specified username (email address)
async function getUsersSavedItems(user){
    console.log(`[UserProductController] (getUsersSavedItems) - Retrieving items for user ${user}`)
    usersSavedItems = await db.User.findOne({email:user})
    console.log(`[UserProductController] (getUsersSavedItems) - Users Saved Items: ${JSON.stringify(usersSavedItems.userItems)}`)
    if (usersSavedItems){
        console.log(`[UserProductController] (getUsersSavedItems) - Found items for ${user}`)
    } else {
        console.log(`[UserProductController] (getUsersSavedItems) - No saved items found for ${user}`)
    }
    return usersSavedItems.userItems
};


// saveUserItem saves the item information under the specified username (email address)
async function saveUserItem(user, item){
    console.log(`[AmazonController] (saveUserItem) - recieved item: ${JSON.stringify(item)} for user: ${JSON.stringify(user)}`)
    db.User.findOne({email: user})
    .then(function(record){
        record.userItems.push({
            itemTitle: item.title,
            itemUrl: item.url,
            itemImage: item.image,
            itemPrice: item.price,
            itemStatus: item.availability,
            itemPriceAlert: false,
            itemPriceThreshold: null,
            itemAvailabilityAlert: false
    })
    record.save()
    console.log(`[AmazonController] (saveUserItem) - ${item.title} Saved to DB for ${user}`)
}).catch(err => console.error(err))
};


// deleteUsersSavedItem removes the item by ID for the specified username (email address)
async function deleteUsersSavedItem(user, item){
    console.log(`[AmazonController] (deleteItem) - recieved item: ${JSON.stringify(item)} for user: ${JSON.stringify(user)}`)
    db.User.findOne({email: user})
    .then(function(record){
        record.userItems.deleteOne({_id: ObjectId(item._id)});
    console.log(`[AmazonController] (deleteItem) - ${itemId} removed from DB for ${user}`)
}).catch(err => console.error(err))
};


// updateUsersSavedItems removes the item by ID for the specified username (email address)
async function updateUsersSavedItems(user, item){
    console.log(`[AmazonController] (updateItem) - updating item: ${JSON.stringify(item)} for user: ${JSON.stringify(user)}`)
    db.User.findOne({email: user})
    .then(function(record){
        record.userItems.updateOne(
            {_id: ObjectId(item._id)},
            { $set: { 
                itemPriceAlert: item.itemPriceAlert, 
                itemPriceThreshold: item.itemPriceThreshold, 
                itemAvailabilityAlert: item.itemAvailabilityAlert}} 
            );
    console.log(`[AmazonController] (updateItem) - ${itemId} removed from DB for ${user}`)
}).catch(err => console.error(err))
};

module.exports = {getUsersSavedItems, saveUserItem, deleteUsersSavedItem, updateUsersSavedItems};