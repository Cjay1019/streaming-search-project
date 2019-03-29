import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetails from "./MovieDetails";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: "",
    userServices: ["iTunes", "Amazon Prime"]
  };

  // componentDidMount() {
  //   this.utellySearch("");
  // }

  movieSearch = (query, services) => {
    API.utellySearch(query, services)
      .then(res => {
        API.omdbSearch(res).then(movie =>
          this.setState({ result: movie.data })
        );
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.movieSearch(this.state.search, this.state.userServices);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
          <Col size="md-8">
            <Card heading={this.state.result.Title || "Search for a Movie"}>
              {this.state.result.Title ? (
                <MovieDetails
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                />
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

export default OmdbContainer;
