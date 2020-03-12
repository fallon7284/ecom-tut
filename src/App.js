import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage, Mens } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/mens" component={Mens} />
      </Switch>
    </Router>
  );
}

export default App;
