import React from "react";
import App from "../App.css";

class Navbar extends React.Component {
  signup() {
    console.log("clicked");
  }

  login() {
    console.log("clicked");
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark elegant-color justify-content-between">
          <a className="navbar-brand cyan-text" href="#">
            Streaming Service App
          </a>

          <div className="linksContainer">
            <ul className="navbar-nav mr-auto">
              <div style={{ display: "flex" }}>
                {/* <li className="nav-item active"> */}
                <button
                  onClick={this.login}
                  className="nav-link elegant-color cyan-text"
                >
                  Login
                </button>
                {/* </li> */}

                {/* <li className="nav-item active"> */}
                <button
                  onClick={this.signup}
                  className="nav-link elegant-color cyan-text"
                >
                  Sign Up
                </button>
                {/* </li> */}
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
