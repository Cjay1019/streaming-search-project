// tmdb api with key and using axios
import axios from "axios";
const BASEURL = "https://api.themoviedb.org/3/search/";
const tmdbKEY = "&api_key=a8b72166f37f46eaccf6cb81bbbca4c1";
// const toddKEY = "NSkkF3Om8xmshbpLTFKHrzJ6cIj0p1nzurQjsnJfnzM6SM4MGp";
const genreURL = "https://api.themoviedb.org/3/genre/";
// eslint-disable-next-line

// const utellyKEY = "84d184dfd2msh6b5924af4ec8de5p14dfb2jsn75fb3b8d9b09";
const connerKEY = "9KBNrYyc6smshwxvf4gIpT7UMF7Ep19W8h3jsnGfSntcS9oioI";
let returnObject = [];
const removeFalsy = obj => {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].showName === "") {
      obj.splice(i, 1);
      i--;
    }
  }

  return obj;
};

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
    returnObject = [];
    return axios
      .get(
        "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" +
          query +
          "&country=us",
        { headers: { "X-RapidAPI-Key": connerKEY } }
      )
      .then(function(data) {
        let showLocations = [];
        for (let i = 0; i < data.data.results.length; i++) {
          returnObject[i] = {};
          returnObject[i].showName = "";
          returnObject[i].urlArray = [];
          returnObject[i].sourceName = [];
          showLocations[i] = data.data.results[i].locations;

          for (let j = 0; j < showLocations[i].length; j++) {
            if (services.includes(showLocations[i][j].display_name)) {
              returnObject[i].showName = data.data.results[i].name;
              returnObject[i].urlArray.push(showLocations[i][j].url);
              returnObject[i].sourceName.push(showLocations[i][j].display_name);
            }
          }
        }
        //Removes items in returnObject array that are null
        returnObject = removeFalsy(returnObject);
        return returnObject;
      });
  }
};

export { returnObject };
