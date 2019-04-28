import React from "react";
import { Link } from "react-router-dom";

class CatsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: null
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/cats")
      .then(response => response.json())
      .then(response => {
        this.setState({ cats: response });
      });
  }
  render() {
    if (!this.state.cats) {
      return null;
    }
    return (
      <>
        {this.state.cats.map((cat, index) => (
          <Link to={`/cats/${cat.id}`} key={index}>
            {cat.name}
          </Link>
        ))}
        <Link to="/cats/create">Add cat</Link>
      </>
    );
  }
}

export default CatsList;
