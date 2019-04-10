// tmdb api with key and using axios
import axios from "axios";
const BASEURL = "https://api.themoviedb.org/3/search/";
const tmdbKEY = "&api_key=a8b72166f37f46eaccf6cb81bbbca4c1";
const genreURL = "https://api.themoviedb.org/3/genre/";
// eslint-disable-next-line
const utellyKEY = "84d184dfd2msh6b5924af4ec8de5p14dfb2jsn75fb3b8d9b09";
const connerKEY = "9KBNrYyc6smshwxvf4gIpT7UMF7Ep19W8h3jsnGfSntcS9oioI";
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
        { headers: { "X-RapidAPI-Key": connerKEY } }
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
