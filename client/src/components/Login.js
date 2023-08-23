//Login.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../utils/api";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginUser = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    login({ email, password })
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        this.setState({ errorMessage: error.response.data.message });
      });
  };

  render() {
    const { email, password, errorMessage } = this.state;
    return (
      <div className="login">
        <div>
          <h1>Login</h1>
          <form onSubmit={this.loginUser}>
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
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Register</Link>
          </p>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
    );
  }
}

export default Login;
