import React from "react";

// renders movie images,info
function MovieDetails(props) {
  const LoopThroughSource = () => {
    console.log(props);
    return props.urlArray.map((url, i) => (
      <h3 key={url}>
        <a target="_blank" rel="noopener noreferrer" href={url}>
          {props.sourceName[i]}
        </a>
      </h3>
    ));
  };

  return (
    <div className="container">
      <div className="text-center" />

      <div className="row">
        <div className="col-sm-8">
          <img
            alt={props.title}
            className="img-fluid"
            src={props.src}
            style={{ margin: "0 auto" }}
          />
        </div>

        <div className="col-sm-4">
          <h3>Director(s): {props.director}</h3>
          <h3>Genre: {props.genre}</h3>
          <h3>Released: {props.released}</h3>
          <h3>URL(s) to source:</h3>
          {LoopThroughSource()}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
