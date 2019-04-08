import React from "react";
import Modal from "./Modal";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark elegant-color justify-content-between">
          {/* eslint-disable-next-line */}
          <a className="navbar-brand cyan-text" href="">
            Streaming Service App
          </a>

          <div className="linksContainer">
            <ul className="navbar-nav mr-auto">
              <div style={{ display: "flex" }}>
                {/* <li className="nav-item active"> */}
                <Modal
                  currentName={this.props.currentName}
                  modalClose={this.props.modalClose}
                  btnName={this.props.user ? "Profile" : "Sign In"}
                >
                  {this.props.renderBtn()}
                </Modal>

                {/* </li> */}
                {/* <li className="nav-item active"> */}
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
