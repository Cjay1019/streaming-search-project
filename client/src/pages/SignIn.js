import React, { Component } from "react";
import Container from "../components/Container";
import auth from "../utils/firebase";
import { MDBAlert } from "mdbreact";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  signIn = () => {
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.setState({
          error: null
        });
      })
      .catch(error => {
        switch (error.code) {
          case "auth/wrong-password":
            this.setState({
              error:
                "Wrong password. Try again or click Forgot password to reset it."
            });
            break;
          case "auth/invalid-email":
            this.setState({
              error: "Please enter a valid email address."
            });
            break;
          case "auth/user-not-found":
            this.setState({
              error: "Couldn't find your account."
            });
            break;
          default:
            this.setState({
              error: "Something went wrong. Please try again."
            });
        }
      });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.signIn();
    this.setState({ password: "" });
  };

  clickReg = () => this.props.renderSignReg();

  render() {
    return (
      <Container>
        <form className="text-center border border-light p-5">
          <p className="h4 mb-4">Sign in</p>

          <input
            onChange={this.handleInputChange}
            value={this.state.email}
            name="email"
            type="email"
            id="defaultLoginFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />

          <input
            onChange={this.handleInputChange}
            value={this.state.password}
            name="password"
            type="password"
            id="defaultLoginFormPassword"
            className="form-control mb-4"
            placeholder="Password"
          />

          <div className="d-flex justify-content-around">
            <div>
              {/* eslint-disable-next-line */}
              <a href="javascript:;" onClick={this.props.clickReset}>
                Forgot password?
              </a>
            </div>
          </div>

          <button
            onClick={this.handleFormSubmit}
            className="btn btn-info btn-rounded my-4 blue-gradient btn-outline-info waves-effect"
            type="submit"
          >
            Sign in
          </button>

          <p className="px-1">
            Not a member?
            {/* eslint-disable-next-line */}
            <a href="javascript:;" onClick={this.clickReg}>
              &nbsp;Register
            </a>
          </p>
        </form>
        {this.state.error && (
          <MDBAlert color="danger">{this.state.error}</MDBAlert>
        )}
      </Container>
    );
  }
}

export default SignIn;
