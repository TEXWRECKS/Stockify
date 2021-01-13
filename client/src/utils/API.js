import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getItem: function(data) {
    console.log(`[utils/API] [getItem] - URL being retrieved ${JSON.stringify(data)}`)
    return axios.post("/api/getItem", {
        params: {
            "url": data
        }
    });
  },
  saveItem: function(data) {
    console.log(`[utils/API] [saveItem] - Item being saved ${JSON.stringify(data)}`)
    return axios.post("api/saveItem", {
        params: {
            title : data.itemTitle,
            url : data.itemUrl,
            image : data.itemImage,
            price : data.itemPrice,
            availability : data.itemStatus,
            itemPriceAlert: "",
        }
    });
  },
  getUsersSavedItems: function(user) {
    console.log(`[utils/API] [getUsersSavedItems] - Retrieving saved items for user ${JSON.stringify(user)}`)
    return axios.post("api/getUsersSavedItems", {
        params: {
            user : user,
        }
    });
  },
};