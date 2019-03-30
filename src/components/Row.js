import React from "react";
//makes row fluid with the rest of the container
function Row(props) {
  return (
    <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>
  );
}

export default Row;
