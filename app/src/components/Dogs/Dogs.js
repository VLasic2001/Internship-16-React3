import React from "react";
import { Switch, Route } from "react-router-dom";
import DogsList from "./DogsList";
import DogDetails from "./DogDetails";
import DogCreate from "./DogCreate";
import DogEdit from "./DogEdit";

class Dogs extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/dogs" render={props => <DogsList {...props} />} />
          <Route
            exact
            path="/dogs/create"
            render={props => <DogCreate {...props} />}
          />
          <Route
            exact
            path="/dogs/edit/:id"
            render={props => <DogEdit {...props} />}
          />
          <Route
            exact
            path="/dogs/:id"
            render={props => <DogDetails {...props} />}
          />
        </Switch>
      </>
    );
  }
}

export default Dogs;
