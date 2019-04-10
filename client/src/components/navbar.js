import React from "react";
import Modal from "./Modal";

// const navbarImagePath = "../../public/assets/img/streamingHeader.png";

const navStyle = {
  //100% opacity
  // backgroundImage: "url('//i.imgur.com/bchezKm.png')",
  // 60%opacity
  backgroundImage: "url('//i.imgur.com/qlCi5LH.png')",
  // cropped image
  // backgroundImage: "url('//i.imgur.com/R4ugpLC.png')",

  width: "100%",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  display: "flex",
  lineHeight: "20",
  boxSizing: "border-box",
  padding: "0"
};
const linksStyle = {
  padding: "0",
  display: "flex"
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
          <div>
            <Modal
              modalClose={this.props.modalClose}
              btnName={this.props.user ? "Profile" : "Sign In"}
            >
              {this.props.renderBtn()}
            </Modal>
          </div>
          {/* eslint-disable-next-line */}
          <a className="navbar-brand cyan-text" href="" />

          <div className="linksContainer" style={linksStyle}>
            <ul className="navbar-nav mr-auto">
              <div>
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
