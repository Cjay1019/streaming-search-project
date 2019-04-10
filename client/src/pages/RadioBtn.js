import React from "react";

const radioStyle = {
  color: "#00bcd4"
};

function MovieOrTVShow(props) {
  return (
    <div className="MovieOrTVShow mb-3" style={radioStyle}>
      <div>
        <span>
          <label>
            <input
              type="radio"
              id="movie"
              name="watch"
              value="movie"
              checked={props.selectedOption === "movie"}
              onChange={props.handleOptionChange}
            />
            Movie
          </label>
          <label>
            <input
              type="radio"
              id="tv"
              name="watch"
              value="tv"
              checked={props.selectedOption === "tv"}
              onChange={props.handleOptionChange}
            />
            TV Show
          </label>
        </span>
      </div>
    </div>
  );
}

export default MovieOrTVShow;
