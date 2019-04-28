import React from "react";

class DogCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      descriptionInput: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    fetch("http://localhost:3000/dogs", {
      method: "POST",
      body: JSON.stringify(dog),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => this.props.history.push(`/dogs/${response.id}`));
  }
  render() {
    return (
      <>
        <h1>Dog create</h1>
        <p>
          Name: <input onChange={e => this.handleNameChange(e)} />
        </p>
        <p>
          Description: <input onChange={e => this.handleDescriptionChange(e)} />
        </p>
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}

export default DogCreate;
