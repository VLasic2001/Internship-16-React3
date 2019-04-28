import React from "react";
import { Link } from "react-router-dom";
import { isEmptyStatement } from "@babel/types";

class CatDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: null
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    fetch(`http://localhost:3000/cats/${this.state.cat.id}`, {
      method: "DELETE",
      body: JSON.stringify(this.state.cat),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => this.props.history.push("/cats"));
  }

  handleEdit() {}

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/cats/${id}`)
      .then(response => response.json())
      .then(response =>
        this.setState({ cat: response }, function() {
          if (Object.keys(this.state.cat).length === 0) {
            this.props.history.push("/");
          }
        })
      );
  }
  render() {
    if (!this.state.cat) {
      return null;
    }
    return (
      <div>
        <h1>{this.state.cat.name}</h1>
        <p>{this.state.cat.description}</p>
        <Link to={`/cats/edit/${this.state.cat.id}`}>Edit</Link>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default CatDetails;
