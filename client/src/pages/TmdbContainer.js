import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import Checks from "../components/Checks";
import SearchForm from "../components/SearchForm";
import MovieDetails from "../components/MovieDetails";
import RadioBtn from "../components/RadioBtn";
import API from "../utils/API";
import { returnObject } from "../utils/API";
import { MDBAnimation } from "mdbreact";

class TmdbContainer extends Component {
  state = {
    selectedOption: "tv",
    genres: [],
    user: null,
    result: [],
    search: ""
  };

  // handle input for the ui
  handleOptionChange = event => {
    this.setState({
      selectedOption: event.target.value
    });
  };

  movieSearch = (query, services) => {
    var newState = {};
    newState.selectedOption = this.state.selectedOption;
    newState.search = this.state.search;
    newState.genres = [];
    newState.result = [];

    var movieGenreIDs = [];
    API.utellySearch(query, services).then(res => {
      console.log(this.state.selectedOption);

      returnObject.forEach((element, i) => {
        console.log(element);

        API.tmdbSearch(this.state.selectedOption, element.showName)
          .then(movie => {
            console.log(movie);
            if (
              movie.data.results.length === 0 ||
              movie.data.results[0].length === 0
            ) {
              newState.result[i] = {};
              newState.result[i].name = "N/A";
              newState.result[i].poster_path =
                "https://customers.seometamanager.com/knowledgegraph/logo/na-stock_myshopify_com_logo.png";
              newState.result[i].first_air_date = "N/A";
            } else {
              newState.result[i] = movie.data.results[0];

              movieGenreIDs[i] = movie.data.results[0].genre_ids;
            }
            //this.filterData(newState);
          })
          .then(() => {
            API.genreList(this.state.selectedOption, element.showName).then(
              genre => {
                var genreList = [];

                if (movieGenreIDs[i] !== undefined) {
                  for (let j = 0; j < genre.data.genres.length; j++) {
                    if (movieGenreIDs[i].includes(genre.data.genres[j].id)) {
                      genreList.push(genre.data.genres[j].name);
                    }
                  }

                  if (genreList.length > 0) {
                    newState.genres[i] = genreList;
                    console.log(newState.genres[i]);
                  }
                }
                if (genreList.length < 1) {
                  genreList[0] = "N/A";
                  console.log(genreList);
                  newState.genres[i] = genreList;
                }
                //this.filterData(newState);
                console.log(newState);

                //this.setState(newState);
                //console.log(this.state);
              }
            );
          });
      });
    });
    //async
    this.setState(
      () => newState,
      () => {
        setTimeout(() => {
          this.setState(() => newState);
          console.log(this.state);
        }, 5000);
      }
    );
  };
  /*
  filterData = newState => {
    //filter
    newState.result = newState.result.filter(n => n);
    newState.genres = newState.genres.filter(n => n);
    //this.setState(newState);
    //console.log(this.state);
  };
  */
  // handle input for the ui
  handleInputChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the tMDB API for the value of `this.state.search`

  handleFormSubmit = event => {
    event.preventDefault();
    this.movieSearch(this.state.search, this.props.userServices);
  };

  // setting up tmdb container with all the components made card, col, row, etc
  render() {
    //Gets movie details for each result in Utelly
    var movieDetailElements = [];
    for (let i = 0; i < this.state.result.length; i++) {
      movieDetailElements.push(
        <Col size="md-12" key={returnObject.showName}>
          <Card
            heading={
              returnObject[i].showName || "Search for a Movie or TV Show"
            }
          >
            {this.state.result[i].name ||
            this.state.result[i].title ||
            returnObject[i].showName ? (
              <MDBAnimation type="fadeIn">
                <MovieDetails
                  name={this.state.result[i].name || this.state.result[i].title}
                  src={this.state.result[i].poster_path}
                  genre={this.state.genres[i]}
                  released={
                    this.state.result[i].first_air_date ||
                    this.state.result[i].release_date
                  }
                  urlArray={returnObject[i].urlArray}
                  sourceName={returnObject[i].sourceName}
                />
              </MDBAnimation>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col>
      );
    }

    return (
      <Container>
        <Row>
          <Col size="md-12" />
          <Col size="md-12" customClass="p-0 mt-4">
            <Card heading="Select your search properties below">
              <RadioBtn
                selectedOption={this.state.selectedOption}
                handleOptionChange={this.handleOptionChange}
              />
              <Checks
                handleChecksInput={this.props.handleChecksInput}
                userServices={this.props.userServices}
              />
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
          {movieDetailElements}
        </Row>
      </Container>
    );
  }
}

export default TmdbContainer;
