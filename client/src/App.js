import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBAnimation } from "mdbreact";
import auth from "./utils/firebase";
import TmdbContainer from "./pages/TmdbContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    user: null,
    userServices: [],
    register: false,
    reset: false,
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
            axios.get(`/api/${firebaseUser.uid}`).then(res => {
              this.setState({
                userServices: res.data[0].services,
                currentName: res.data[0].name
              });
            });
          } else {
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
    if (this.state.reset) {
      this.clickReset();
    }
    this.saveServices();
  };

  renderSignReg = () => {
    this.setState({
      register: !this.state.register
    });
  };

  clickReset = () => {
    this.setState({
      reset: !this.state.reset
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
    } else if (this.state.reset) {
      return <Reset />;
    } else if (this.state.register) {
      return <Register renderSignReg={this.renderSignReg} />;
    } else {
      return (
        <SignIn
          renderSignReg={this.renderSignReg}
          clickReset={this.clickReset}
        />
      );
    }
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
      <div className="appBody">
        {/* <MDBAnimation type="fadeInUp" delay="1s"> */}
        <Navbar
          user={this.state.user}
          currentName={this.state.currentName}
          modalClose={this.modalClose}
          renderBtn={this.renderBtn}
        />
        {/* </MDBAnimation> */}
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <MDBAnimation type="fadeInUp" delay="1s">
                  <TmdbContainer
                    handleChecksInput={this.handleChecksInput}
                    userServices={this.state.userServices}
                    {...props}
                  />
                </MDBAnimation>
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
