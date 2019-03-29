import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=b31c3ab9";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
