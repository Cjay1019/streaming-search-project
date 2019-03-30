import React, { Component } from "react";
import Container from "../components/Container";
import auth from "../utils/firebase";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    errors: null
  };

  createAccount = () => {
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.setState({
          errors: null
        });
      })
      .catch(error => {
        this.setState({
          errors: error.message
        });
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
            value={this.value}
            name="email"
            type="email"
            id="defaultLoginFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />

          <input
            onChange={this.handleInputChange}
            value={this.value}
            name="password"
            type="password"
            id="defaultLoginFormPassword"
            className="form-control mb-4"
            placeholder="Password"
          />

          <button
            onClick={this.handleFormSubmit}
            className="btn btn-info btn-block my-4"
            type="submit"
          >
            Register
          </button>
          <p>
            Already a member?
            <a href="#" onClick={this.clickSignIn}>
              Sign in
            </a>
          </p>
        </form>
      </Container>
    );
  }
}

export default Register;
