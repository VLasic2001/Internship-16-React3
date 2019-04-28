import React from "react";
import { Link } from "react-router-dom";
import { isEmptyStatement } from "@babel/types";

class DogDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: null
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    fetch(`http://localhost:3000/dogs/${this.state.dog.id}`, {
      method: "DELETE",
      body: JSON.stringify(this.state.dog),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => this.props.history.push("/dogs"));
  }

  handleEdit() {}

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/dogs/${id}`)
      .then(response => response.json())
      .then(response =>
        this.setState({ dog: response }, function() {
          if (Object.keys(this.state.dog).length === 0) {
            this.props.history.push("/");
          }
        })
      );
  }
  render() {
    if (!this.state.dog) {
      return null;
    }
    return (
      <div>
        <h1>{this.state.dog.name}</h1>
        <p>{this.state.dog.description}</p>
        <Link to={`/dogs/edit/${this.state.dog.id}`}>Edit</Link>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default DogDetails;
