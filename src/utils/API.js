// omdb api with key and using axios
import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const omdbKEY = "&apikey=b31c3ab9";
// eslint-disable-next-line
const utellyKEY = "84d184dfd2msh6b5924af4ec8de5p14dfb2jsn75fb3b8d9b09";
const myKEY = "9KBNrYyc6smshwxvf4gIpT7UMF7Ep19W8h3jsnGfSntcS9oioI";

export default {
  omdbSearch: function(query) {
    return axios.get(BASEURL + query + omdbKEY);
  },
  utellySearch: (query, services) => {
    return axios
      .get(
        "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" +
          query +
          "&country=us",
        { headers: { "X-RapidAPI-Key": myKEY } }
      )
      .then(function(data) {
        console.log(data);
        let locations = data.data.results[0].locations;
        for (let i = 0; i < locations.length; i++) {
          if (services.includes(locations[i].display_name)) {
            return query;
          }
        }
      });
  }
};
