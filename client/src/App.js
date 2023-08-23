//App.js

import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Videos from "./components/Videos";
import Home from "./components/Home";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/videos" exact component={Videos} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
