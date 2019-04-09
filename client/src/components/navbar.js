import React from "react";
import Modal from "./Modal";

// const navbarImagePath = "../../public/assets/img/streamingHeader.png";

const navStyle = {
  //100% opacity
  // backgroundImage: "url('//i.imgur.com/fklw0oO.png')",
  // 60%opacity
  backgroundImage: "url('//i.imgur.com/QG7RtH5.png')",
  width: "80%",
  backgroundSize: "cover",
  display: "flex",
  lineHeight: "5",
  marginBottom: "1em"
  // backgroundColor: "orange"
};

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="container navbar navbar-expand-md navbar-dark justify-content-between rounded mb-0"
          style={navStyle}
        >
          {/* eslint-disable-next-line */}
          <a className="navbar-brand cyan-text" href="">
            Streaming Service App
          </a>

          <div className="linksContainer">
            <ul className="navbar-nav mr-auto">
              <div style={{ display: "flex" }}>
                {/* <li className="nav-item active"> */}
                <Modal
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
