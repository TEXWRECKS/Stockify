const db = require("../models");

// getUsersSavedItems queries the database to get item information under the specified username (email address)
async function getUsersSavedItems(user){
    console.log(`[UserProductController] (getUsersSavedItems) - Retrieving items for user ${user}`)
    usersSavedItems = await db.User.findOne({email:user})
    console.log(`${JSON.stringify(usersSavedItems.userItems)}`)
    if (usersSavedItems){
        console.log(`[UserProductController] (getUsersSavedItems) - Found items for ${user}`)
    } else {
        console.log(`[UserProductController] (getUsersSavedItems) - No saved items found for ${user}`)
    }
    return usersSavedItems.userItems
};


module.exports = {getUsersSavedItems};