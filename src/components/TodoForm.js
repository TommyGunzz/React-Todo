import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  handleChanges = (e) => {
    // update state with each keystroke
    console.log(e.target.name, e.target.value);
    this.setState({ ...this.state, newItem: e.target.value });
  };

  // class property to submit form
  submitItem = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({ ...this.state, newItem: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          name="item"
          value={this.state.newItem}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;