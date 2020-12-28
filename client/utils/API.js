import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  setItemURL: function() {
    return axios.post("https://localhost:3000/api/");
  },
  getItem: function(url) {
    return axios.get("https://localhost:3000/api/getItem", {
        params: {
            "url": url
        }
    });
  },
};