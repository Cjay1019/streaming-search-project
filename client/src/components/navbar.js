import React, { Component } from "react";
import Modal from "./Modal";
import BG from "../img/streamingHeader.png";

// --------------------------------------------------------
// styling
const navStyle = {
  backgroundImage: `url(${BG})`,

  backgroundSize: "contain",
  minHeight: "20em",
  backgroundRepeat: "no-repeat",
  display: "flex",
  padding: "0"
};
const linksStyle = {
  padding: "0",
  display: "flex"
};
// --------------------------------------------------------

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="container navbar navbar-expand-md navbar-dark justify-content-between rounded mb-0"
          style={navStyle}
        >
          {/* eslint-disable-next-line */}
          <a className="navbar-brand cyan-text" href="" />

          <div className="linksContainer" style={linksStyle}>
            <ul className="navbar-nav mr-auto">
              <div>
                <Modal
                  currentName={this.props.currentName}
                  modalClose={this.props.modalClose}
                  btnName={this.props.user ? "Profile" : "Sign In"}
                >
                  {this.props.renderBtn()}
                </Modal>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
