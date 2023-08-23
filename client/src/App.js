//App.js

import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Videos from "./components/Videos";
import Home from "./components/Home";
import InsertVideo from "./components/InsertVideo";
import VideoDetail from "./components/VideoDetail";
import "./App.css";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/videos/insert" exact component={InsertVideo} />
          <Route path="/videos/:id" exact component={VideoDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
