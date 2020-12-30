import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  setItemURL: function() {
    return axios.post("https://localhost:3001/api/");
  },
  getItem: function(url) {
    console.log(`[utils/API] [getItem] - URL being retrieved ${url}`)
    return axios.get("https://localhost:3001/api/getItem", {
        params: {
            "url": url.url
        }
    });
  },
};