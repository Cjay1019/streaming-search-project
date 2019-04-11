import React, { Component } from "react";
import Container from "../components/Container";
import auth from "../utils/firebase";
import { MDBAlert, MDBBtn } from "mdbreact";

class Reset extends Component {
  state = {
    email: "",
    error: "",
    success: false
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
    this.reset();
  };

  alertHandler = (error, success) => {
    if (this.state.error) {
      return <MDBAlert color="danger">{this.state.error}</MDBAlert>;
    } else if (this.state.success) {
      return <MDBAlert color="success">Passord reset email sent!</MDBAlert>;
    }
  };

  reset = () => {
    auth
      .sendPasswordResetEmail(this.state.email)
      .then(res => {
        this.setState({
          error: "",
          success: true
        });
      })
      .catch(error => {
        console.log(error);
        switch (error.code) {
          case "auth/invalid-email":
            this.setState({
              error: "Please enter a valid email address.",
              success: false
            });
            break;
          case "auth/user-not-found":
            this.setState({
              error: "Couldn't find your account.",
              success: false
            });
            break;
          default:
            this.setState({
              error: "Something went wrong. Please try again.",
              success: false
            });
        }
      });
  };

  render() {
    return (
      <Container>
        <form className="text-center border border-light p-5">
          <p className="h4 mb-4">Reset Password</p>

          <input
            onChange={this.handleInputChange}
            value={this.state.email}
            name="email"
            type="email"
            id="defaultLoginFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />

          <MDBBtn
            onClick={this.handleFormSubmit}
            className="btn-rounded btn blue-gradient btn-outline-info waves-effect cyan-text"
            type="submit"
          >
            Submit
          </MDBBtn>
        </form>
        {this.alertHandler()}
      </Container>
    );
  }
}

export default Reset;
