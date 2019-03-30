import React, { Component } from "react";
import Container from "../components/Container";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  signIn = (user, pass) => {};

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.signIn(this.state.username, this.state.password);
  };

  render() {
    return (
      <Container>
        <form class="text-center border border-light p-5">
          <p class="h4 mb-4">Sign in</p>

          <input
            onChange={this.handleInputChange}
            value={this.value}
            name="email"
            type="email"
            id="defaultLoginFormEmail"
            class="form-control mb-4"
            placeholder="E-mail"
          />

          <input
            onChange={this.handleInputChange}
            value={this.value}
            name="password"
            type="password"
            id="defaultLoginFormPassword"
            class="form-control mb-4"
            placeholder="Password"
          />

          <div class="d-flex justify-content-around">
            <div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultLoginFormRemember"
                />
                <label
                  class="custom-control-label"
                  for="defaultLoginFormRemember"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <a href="">Forgot password?</a>
            </div>
          </div>

          <button
            onClick={this.handleFormSubmit}
            class="btn btn-info btn-block my-4"
            type="submit"
          >
            Sign in
          </button>

          <p>
            Not a member?
            <a href="">Register</a>
          </p>
        </form>
      </Container>
    );
  }
}

export default SignIn;
