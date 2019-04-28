import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dogs from "./components/Dogs/Dogs";
import Cats from "./components/Cats/Cats";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Menu {...props} />} />
          <Route path="/dogs" render={props => <Dogs {...props} />} />
          <Route path="/cats" render={props => <Cats {...props} />} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
