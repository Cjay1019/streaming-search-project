import React, { Component } from "react";
import Container from "../components/Container";
import Checks from "../components/Checks";
import auth from "../utils/firebase";

class Profile extends Component {
  signOut = () => {
    this.props.saveServices(true);
    auth.signOut();
  };

  render() {
    return (
      <Container>
        <h1>Preferences</h1>
        <Checks
          userServices={this.props.userServices}
          handleChecksInput={this.props.handleChecksInput}
        />
        <button
          onClick={this.signOut}
          className="btn btn-info btn-block my-4"
          type="submit"
        >
          Sign out
        </button>
      </Container>
    );
  }
}

export default Profile;
