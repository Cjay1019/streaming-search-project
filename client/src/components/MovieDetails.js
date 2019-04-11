import React from "react";
import Moment from "react-moment";
import { MDBView, MDBMask } from "mdbreact";

// renders movie images,info
function MovieDetails(props) {
  const LoopThroughSource = () => {
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
          <MDBView hover zoom className="imgFit mx-auto">
            <img
              alt={props.name}
              className="img-fluid rounded"
              src={"http://image.tmdb.org/t/p/w200" + props.src}
              style={{ margin: "0 auto" }}
            />
            <a
              href={`https://www.themoviedb.org/${props.selectedOption}/${
                props.id
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBMask className="flex-center" overlay="blue-light">
                <p className="white-text">View Info</p>
              </MDBMask>
            </a>
          </MDBView>
        </div>

        <div className="col-sm-4">
          <h3>Genre: {props.genre.join(", ")}</h3>
          <h3>
            Released:&nbsp;
            <Moment format="MM/DD/YYYY">{props.released}</Moment>
          </h3>
          <h3>Watch Now:</h3>
          {LoopThroughSource()}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
