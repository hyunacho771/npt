//Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../utils/api";
import "./Navbar.css";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    logout()
      .then((response) => {
        console.log(response);
        setIsAuthenticated(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <>
          <Link to="/upload">Upload</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
