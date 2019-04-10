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
    result: {},
    search: ""
  };

  // handle input for the ui
  handleOptionChange = event => {
    this.setState({
      selectedOption: event.target.value
    });
  };

  movieSearch = (query, services) => {
    var movieGenreIDs = [];
    API.utellySearch(query, services)
      .then(res => {
        console.log(this.state.selectedOption);
        API.tmdbSearch(this.state.selectedOption, res.title)
          .then(movie => {
            if (
              movie.data.results[0].name === "Undefined" &&
              movie.data.results[0].title === "Undefined"
            ) {
              alert(
                "Movie or TV Show is either not found, or not available on your services"
              );
            } else {
              this.setState({ result: movie.data.results[0] });
            }
            movieGenreIDs = movie.data.results[0].genre_ids;
          })
          .then(() => {
            console.log(res);
            API.genreList(this.state.selectedOption, res.title).then(genre => {
              console.log(genre.data.genres);
              var genreList = [];
              console.log(movieGenreIDs);
              for (let i = 0; i < genre.data.genres.length; i++) {
                if (movieGenreIDs.includes(genre.data.genres[i].id)) {
                  genreList.push(genre.data.genres[i].name);
                }
              }
              this.setState({ genres: genreList });
            });
          });
      })

      .catch(err => console.log(err));
  };
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
          <Col size="md-12" customClass="p-0 mt-4">
            <Card
              heading={
                this.state.result.name || "Search for a Movie or TV Show"
              }
            >
              {this.state.result.name || this.state.result.title ? (
                <MDBAnimation type="fadeIn">
                  <MovieDetails
                    name={this.state.result.name || this.state.result.title}
                    src={this.state.result.poster_path}
                    genre={this.state.genres}
                    released={
                      this.state.result.first_air_date ||
                      this.state.result.release_date
                    }
                    urlArray={returnObject.urlArray}
                    sourceName={returnObject.sourceName}
                  />
                </MDBAnimation>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TmdbContainer;
