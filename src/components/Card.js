import React from "react";
// creates the card body

function Card(props) {
  return (
    <div
      className="card text-center special-color-dark cyan-text
    "
    >
      <div
        className="card-header special-color
#37474F"
      >
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
