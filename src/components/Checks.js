import React from "react";

function Checks({ handleChecksInput }) {
  return (
    <div className="mb-3">
      <div className="custom-control custom-checkbox d-inline mx-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="netflixCheck"
          onChange={handleChecksInput}
          name="Netflix"
        />
        <label className="custom-control-label" htmlFor="netflixCheck">
          Netflix
        </label>
      </div>
      <div className="custom-control custom-checkbox d-inline mx-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="amazonCheck"
          onChange={handleChecksInput}
          name="Amazon Prime"
        />
        <label className="custom-control-label" htmlFor="amazonCheck">
          Amazon Prime
        </label>
      </div>
      <div className="custom-control custom-checkbox d-inline mx-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="itunesCheck"
          onChange={handleChecksInput}
          name="iTunes"
        />
        <label className="custom-control-label" htmlFor="itunesCheck">
          iTunes
        </label>
      </div>
      <div className="custom-control custom-checkbox d-inline mx-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="googleCheck"
          onChange={handleChecksInput}
          name="Google Play"
        />
        <label className="custom-control-label" htmlFor="googleCheck">
          Google Play
        </label>
      </div>
    </div>
  );
}

export default Checks;
