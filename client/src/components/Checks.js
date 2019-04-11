import React from "react";

function Checks({ handleChecksInput, userServices }) {
  return (
    <div className="mb-3">
      <div className="custom-control custom-checkbox d-inline mx-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="netflixCheck"
          onChange={handleChecksInput}
          name="Netflix"
          checked={userServices.includes("Netflix")}
        />
        <label className="custom-control-label" htmlFor="netflixCheck">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1024px-Netflix_icon.svg.png"
            alt=""
            width="50"
            height="50"
          />
          <p>Netflix</p>
        </label>
      </div>
      <div className="custom-control custom-checkbox d-inline mx-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="amazonCheck"
          onChange={handleChecksInput}
          name="Amazon Prime"
          checked={userServices.includes("Amazon Prime")}
        />
        <label className="custom-control-label" htmlFor="amazonCheck">
          <img
            src="https://services.tegrazone.com/sites/default/files/app-icon/amazon-video_appicon2_0.png"
            alt=""
            width="50"
            height="50"
          />
          <p>Amazon</p>
        </label>
      </div>
      <div className="custom-control custom-checkbox d-inline mx-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="itunesCheck"
          onChange={handleChecksInput}
          name="iTunes"
          checked={userServices.includes("iTunes")}
        />
        <label className="custom-control-label" htmlFor="itunesCheck">
          <img
            src="https://tunesgo.wondershare.com/images/en/itunes-tips/itunes-icon-anekdamian.png"
            alt=""
            width="50"
            height="50"
          />
          <p>iTunes</p>
        </label>
      </div>
      <div className="custom-control custom-checkbox d-inline mx-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="googleCheck"
          onChange={handleChecksInput}
          name="Google Play"
          checked={userServices.includes("Google Play")}
        />
        <label className="custom-control-label" htmlFor="googleCheck">
          <img
            src="https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/google_play.png"
            alt="google"
            width="50"
            height="50"
          />
          <p>Google</p>
        </label>
      </div>
    </div>
  );
}

export default Checks;
