import React from "react";

/// sets the size of a column

function Col(props) {
  const size = props.size
    .split(" ")
    .map(size => "col-" + size)
    .join(" ");

  return <div className={size}>{props.children}</div>;
}

export default Col;
