import React from "react";

const radioStyle = {
  color: "#00bcd4"
};

function MovieOrTVShow(props) {
  return (
    <div className="MovieOrTVShow pb-3" style={radioStyle}>
      <div>
        <div className="custom-control custom-radio d-inline mx-2">
          <input
            className="custom-control-input"
            type="radio"
            id="movie"
            name="watch"
            value="movie"
            checked={props.selectedOption === "movie"}
            onChange={props.handleOptionChange}
          />
          <label className="custom-control-label" htmlFor="movie">
            Movie
          </label>
        </div>
        <div className="custom-control custom-radio d-inline mx-2">
          <input
            className="custom-control-input"
            type="radio"
            id="tv"
            name="watch"
            value="tv"
            checked={props.selectedOption === "tv"}
            onChange={props.handleOptionChange}
          />
          <label className="custom-control-label" htmlFor="tv">
            TV Show
          </label>
        </div>
      </div>
    </div>
  );
}

export default MovieOrTVShow;
