import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import auth from "./utils/firebase";
import OmdbContainer from "./pages/OmdbContainer";
import SignIn from "./pages/SignIn";
import LogOut from "./pages/Logout";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import "./mdb.css";
import "./App.css";
class App extends Component {
  state = {
    user: null
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

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <OmdbContainer user={this.state.user} />}
          />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    );
  }
}
export default App;
