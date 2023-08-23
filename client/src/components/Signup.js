//Signup.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup } from "../utils/api";
import "./Signup.css";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  registerUser = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    signup({ name, email, password })
      .then((response) => {
        console.log(response);
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        this.setState({ errorMessage: error.response.data.message });
      });
  };

  render() {
    const { name, email, password, errorMessage } = this.state;
    return (
      <div className="signup">
        <div>
          <h1>Register</h1>
          <form onSubmit={this.registerUser}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              required
            />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
    );
  }
}

export default Signup;
