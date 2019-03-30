import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div
        className="form-group special-color
#37474F cyan-text"
      >
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Movie"
          id="search"
        />
        <br />
        <button
          onClick={props.handleFormSubmit}
          className="btn-rounded btn-elegant"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
