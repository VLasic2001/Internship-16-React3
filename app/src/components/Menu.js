import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="list">
        <Link to="/dogs">Dogs</Link>
        <Link to="/cats">Cats</Link>
      </div>
    );
  }
}

export default Menu;
