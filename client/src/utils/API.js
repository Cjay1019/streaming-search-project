// tmdb api with key and using axios
import axios from "axios";
const BASEURL = "https://api.themoviedb.org/3/search/";
const tmdbKEY = "&api_key=a8b72166f37f46eaccf6cb81bbbca4c1";
const genreURL = "https://api.themoviedb.org/3/genre/";
// eslint-disable-next-line
const toddKEY = "NSkkF3Om8xmshbpLTFKHrzJ6cIj0p1nzurQjsnJfnzM6SM4MGp";
var returnObject = {};

export default {
  tmdbSearch: function(selectedOption, query) {
    return axios.get(BASEURL + selectedOption + "?query=" + query + tmdbKEY);
  },
  genreList: function(selectedOption, query) {
    return axios.get(
      genreURL + selectedOption + "/list?query=" + query + tmdbKEY
    );
  },
  utellySearch: (query, services) => {
    return axios
      .get(
        "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" +
          query +
          "&country=us",
        { headers: { "X-RapidAPI-Key": toddKEY } }
      )
      .then(function(data) {
        //var returnObject = {};
        returnObject.urlArray = [];
        returnObject.sourceName = [];
        let locations = data.data.results[0].locations;

        for (let i = 0; i < locations.length; i++) {
          if (services.includes(locations[i].display_name)) {
            returnObject.urlArray.push(locations[i].url);
            returnObject.sourceName.push(locations[i].display_name);
          }
        }

        for (let i = 0; i < locations.length; i++) {
          if (services.includes(locations[i].display_name)) {
            returnObject.title = query;
            return returnObject;
          }
        }
      });
  }
};

export { returnObject };
