import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import auth from "./utils/firebase";
import TmdbContainer from "./pages/TmdbContainer";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    user: null,
    userServices: [],
    register: false,
    currentName: ""
  };

  componentDidMount() {
    auth.onAuthStateChanged(firebaseUser => {
      this.setState(
        {
          user: firebaseUser
        },
        () => {
          if (firebaseUser) {
            console.log(`Firebase UID: ${firebaseUser.uid}`);
            axios.get(`/api/${firebaseUser.uid}`).then(res => {
              this.setState({
                userServices: res.data[0].services,
                currentName: res.data[0].name
              });
            });
          } else {
            console.log("not logged in");
          }
        }
      );
    });
  }

  saveServices = signingOut => {
    if (this.state.user) {
      axios
        .put(`/api/${this.state.user.uid}`, this.state.userServices)
        .then(res => {});
      if (signingOut) {
        this.setState({
          currentName: ""
        });
      }
    }
  };

  modalClose = () => {
    this.setState({
      register: false
    });
    this.saveServices();
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
          saveServices={this.saveServices}
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
      <div className="backgroundColor elegant-color vh-100">
        <Navbar
          user={this.state.user}
          currentName={this.state.currentName}
          modalClose={this.modalClose}
          renderBtn={this.renderBtn}
        />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <TmdbContainer
                  handleChecksInput={this.handleChecksInput}
                  userServices={this.state.userServices}
                  {...props}
                />
              )}
            />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;
