import React from "react";

class DogEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: null,
      nameInput: "",
      descriptionInput: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/dogs/${id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          dog: response,
          nameInput: response.name,
          descriptionInput: response.description
        });
      });
  }
  handleNameChange(e) {
    this.setState({ nameInput: e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({ descriptionInput: e.target.value });
  }
  handleSubmit() {
    const dog = {
      name: this.state.nameInput,
      description: this.state.descriptionInput
    };
    if (dog.name === "" || dog.description === "") return;
    fetch(`http://localhost:3000/dogs/${this.state.dog.id}`, {
      method: "PUT",
      body: JSON.stringify(dog),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => this.props.history.push(`/dogs/${this.state.dog.id}`));
  }
  render() {
    return (
      <>
        <h1>Dog Edit</h1>
        <p>
          Name:{" "}
          <input
            value={this.state.nameInput}
            onChange={e => this.handleNameChange(e)}
          />
        </p>
        <p>
          Description:{" "}
          <input
            onChange={e => this.handleDescriptionChange(e)}
            value={this.state.descriptionInput}
          />
        </p>
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}

export default DogEdit;
