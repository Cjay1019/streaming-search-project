import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import auth from "./utils/firebase";
import TmdbContainer from "./pages/TmdbContainer";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import "./App.css";

class App extends Component {
  state = {
    user: null,
    userServices: [],
    register: false
  };

  componentDidMount() {
    auth.onAuthStateChanged(firebaseUser => {
      this.setState({
        user: firebaseUser
      });

      if (firebaseUser) {
        console.log(`Firebase UID: ${firebaseUser.uid}`);
      } else {
        console.log("not logged in");
      }
    });
  }

  modalClose = () => {
    this.setState({
      register: false
    });
  };

  renderSignReg = () => {
    this.setState({
      register: !this.state.register
    });
  };

  renderBtn = () => {
    if (this.state.user) {
      return (
        <Profile
          handleChecksInput={this.handleChecksInput}
          userServices={this.state.userServices}
        />
      );
    }
    return this.state.register ? (
      <Register
        renderSignReg={this.renderSignReg}
        linkHandler={this.linkHandler}
      />
    ) : (
      <SignIn
        renderSignReg={this.renderSignReg}
        linkHandler={this.linkHandler}
      />
    );
  };

  handleChecksInput = event => {
    const value = event.target.checked;
    const name = event.target.name;
    this.setState({
      userServices: value
        ? this.state.userServices.concat(name)
        : this.state.userServices.filter(e => e !== name)
    });
  };

  render() {
    return (
      <div className="backgroundColor elegant-color ">
        <Navbar
          user={this.state.user}
          modalClose={this.modalClose}
          renderBtn={this.renderBtn}
        />
        {/* <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <TmdbContainer
                  handleChecksInput={this.handleChecksInput}
                  userServices={this.state.userServices}
                />
              )}
            />
          </Switch>
        </Router> */}
        <TmdbContainer
          handleChecksInput={this.handleChecksInput}
          userServices={this.state.userServices}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
