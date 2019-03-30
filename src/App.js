import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OmdbContainer from "./pages/OmdbContainer";
import LogIn from "./pages/LogIn";
import LogOut from "./pages/Logout";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import "./mdb.css";
import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={OmdbContainer} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/signin" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
