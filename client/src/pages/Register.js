import React, { Component } from "react";
import Container from "../components/Container";
import auth from "../utils/firebase";
import axios from "axios";
import { MDBAlert } from "mdbreact";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    firebaseId: "",
    error: null
  };

  createAccount = () => {
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.setState(
          {
            errors: null,
            firebaseId: res.user.uid
          },
          () => {
            let newUser = {
              name: `${this.state.firstName} ${this.state.lastName}`,
              email: this.state.email,
              firebaseId: res.user.uid,
              services: []
            };
            console.log(newUser);
            axios.post("/api/create", newUser).then(res => {
              console.log("success?", res.data);
            });
          }
        );
      })
      .catch(error => {
        this.setState({ email: "", password: "" });
        switch (error.code) {
          case "auth/email-already-in-use":
            this.setState({
              error: "This email address is already in use by another account."
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
    this.createAccount();
  };

  clickSignIn = () => this.props.renderSignReg();

  render() {
    return (
      <Container>
        <form className="text-center border border-light p-5">
          <p className="h4 mb-4">Register</p>

          <div className="form-row mb-4">
            <div className="col">
              <input
                onChange={this.handleInputChange}
                value={this.value}
                name="firstName"
                type="text"
                id="defaultRegisterFormFirstName"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col">
              <input
                onChange={this.handleInputChange}
                value={this.value}
                name="lastName"
                type="text"
                id="defaultRegisterFormLastName"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>

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

          <button
            onClick={this.handleFormSubmit}
            className="btn btn-info btn-rounded my-4 blue-gradient btn-outline-info waves-effect"
            type="submit"
          >
            Register
          </button>
          <p>
            Already a member?
            {/* eslint-disable-next-line */}
            <a href="javascript:;" onClick={this.clickSignIn}>
              &nbsp;Sign in
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

export default Register;
