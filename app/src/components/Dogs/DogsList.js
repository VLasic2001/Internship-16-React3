import React from "react";
import { Link } from "react-router-dom";

class DogsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: null
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/dogs")
      .then(response => response.json())
      .then(response => {
        this.setState({ dogs: response });
      });
  }
  render() {
    if (!this.state.dogs) {
      return null;
    }
    return (
      <div className="list">
        {this.state.dogs.map((dog, index) => (
          <Link to={`/dogs/${dog.id}`} key={index}>
            {dog.name}
          </Link>
        ))}
        <Link to="/dogs/create">Add dog</Link>
      </div>
    );
  }
}

export default DogsList;
