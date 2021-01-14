import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getItem: async function(data) {
    console.log(`[utils/API] [getItem] - URL being retrieved ${JSON.stringify(data)}`)
    return await axios.post("/api/getItem", {
        params: {
            "url": data
        }
    });
  },
  saveUserItem: async function(user, item) {
    console.log(`[utils/API] [saveUserItem] - Saving Item ${JSON.stringify(item)} for ${user.email}`)
    return await axios.post("api/saveUserItem", {
        params: {
          user : user,
          item : item,
        }
    });
  },
  getUsersSavedItems: async function(user) {
    console.log(`[utils/API] [getUsersSavedItems] - Retrieving saved items for user ${JSON.stringify(user.email)}`)
    return await axios.post("api/getUsersSavedItems", {
        params: {
            user : user,
        }
    });
  },
  deleteUsersSavedItem: async function(user, item) {
    console.log(`[utils/API] [deleteUsersSavedItem] - Removing saved item ${item.name}for user ${JSON.stringify(user.email)}`)
    return await axios.post("api/deleteUsersSavedItem", {
        params: {
            user : user,
            item : item,
        }
    });
  },
  updateUsersSavedItems: async function(user, item) {
    console.log(`[utils/API] [updateUsersSavedItems] - Update saved item ${item.name} for user ${JSON.stringify(user.email)}`)
    return await axios.post("api/updateUsersSavedItems", {
        params: {
            user : user,
            item : item,
        }
    });
  },
  
};