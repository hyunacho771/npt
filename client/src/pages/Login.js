//pages/Login.js
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    redirect: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    axios
      .post("/api/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        this.setState({ redirect: true });
      });
  };

  render() {
    const { email, password, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/videos" />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            value={password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
