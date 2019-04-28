import React from "react";

class CatCreate extends React.Component {
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
    const cat = {
      name: this.state.nameInput,
      description: this.state.descriptionInput
    };
    if (cat.name === "" || cat.description === "") return;
    fetch("http://localhost:3000/cats", {
      method: "POST",
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => this.props.history.push(`/cats/${response.id}`));
  }
  render() {
    return (
      <>
        <h1>Cat create</h1>
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

export default CatCreate;
