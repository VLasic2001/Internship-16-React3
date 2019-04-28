import React from "react";

class CatEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: null,
      nameInput: "",
      descriptionInput: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/cats/${id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          cat: response,
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
    const cat = {
      name: this.state.nameInput,
      description: this.state.descriptionInput
    };
    if (cat.name === "" || cat.description === "") return;
    fetch(`http://localhost:3000/cats/${this.state.cat.id}`, {
      method: "PUT",
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => this.props.history.push(`/cats/${this.state.cat.id}`));
  }
  render() {
    return (
      <>
        <h1>Cat Edit</h1>
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

export default CatEdit;
