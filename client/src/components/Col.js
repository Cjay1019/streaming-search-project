import React from "react";

/// sets the size of a column

function Col(props) {
  const size = props.size
    .split(" ")
    .map(size => "col-" + size)
    .join(" ");
  const customClass = props.customClass;
  return <div className={size + " " + customClass}>{props.children}</div>;
}

export default Col;
