import React from "react";

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

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/cats/${id}`)
      .then(response => response.json())
      .then(response => this.setState({ cat: response }));
  }
  render() {
    if (!this.state.cat) {
      return null;
    }
    return (
      <div>
        <h1>{this.state.cat.name}</h1>
        <p>{this.state.cat.description}</p>
        <button>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default CatDetails;
