import React from "react";

class CatDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/cats/${id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({ cat: response });
      });
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
        <button>Delete</button>
      </div>
    );
  }
}

export default CatDetails;
