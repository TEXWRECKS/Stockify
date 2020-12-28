import axios from "axios";


export default {
  setItemURL: function() {
    return axios.post("https://localhost:3001/api/");
  },
  getItemById: function(id) {
    return axios.get("https://localhost:3001/api/" + id);
  },
};
