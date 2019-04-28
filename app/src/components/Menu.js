import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <>
        <Link to="/dogs">Dogs</Link>
        <Link to="/cats">Cats</Link>
      </>
    );
  }
}

export default Menu;
