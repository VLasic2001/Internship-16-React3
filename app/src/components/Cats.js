import React from "react";
import { Switch, Route } from "react-router-dom";
import CatsList from "./CatsList";
import CatDetails from "./CatDetails";
import CatCreate from "./CatCreate";

class Cats extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/cats" render={props => <CatsList {...props} />} />
          <Route
            exact
            path="/cats/create"
            render={props => <CatCreate {...props} />}
          />
          <Route
            exact
            path="/cats/:id"
            render={props => <CatDetails {...props} />}
          />
        </Switch>
      </>
    );
  }
}

export default Cats;
