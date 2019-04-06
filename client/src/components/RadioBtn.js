import React from "react";

function MovieOrTVShow(props) {
  return (
    <div className="MovieOrTVShow">
      <div>
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
      </div>

      <div>
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
      </div>
    </div>
  );
}

export default MovieOrTVShow;
