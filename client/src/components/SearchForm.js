import React from "react";
import { MDBBtn } from "mdbreact";

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
        <MDBBtn
          onClick={props.handleFormSubmit}
          className="btn-rounded btn-outline-info waves-effect btn-elegant "
        >
          Search
        </MDBBtn>
      </div>
    </form>
  );
}

export default SearchForm;
