import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Menu {...props} />} />
          <Route exact path="/dogs" render={props => <Dogs {...props} />} />
          <Route exact path="/cats" render={props => <Cats {...props} />} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
