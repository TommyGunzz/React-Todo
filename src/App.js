import React from "react";

import TodoList from "../src/components/TodoList";
import TodoForm from "../src/components/TodoForm";
// import "../styles.css";

const todos = [
  {
    name: "Wash Car",
    id: 2,
    done: false
  },
  {
    name: "Buy Food",
    id: 4,
    done: false
  },
  {
    name: "Pay Bills",
    id: 6,
    done: false
  },
  {
    name: "Get Rest",
    id: 8,
    done: false
  },
  {
    name: "Eat food",
    id: 10,
    done: false
  },
  {
    name: "Get Ready for class",
    id: 12,
    done: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  // Class methods to update state
  toggleItem = (itemId) => {
    console.log("Toggling item", itemId);
    this.setState({
      // Find the item in the todos array, and toggle its done flag
      todos: this.state.todos.map((item) => {
        if (itemId === item.id) {
          return {
            // Return the item with done flag toggled
            ...item,
            done: !item.done
          };
        }
        return item;
      })
    });
  };

  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      done: false
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newItem]
    });
  };

  clearDone = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((item) => !item.done)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>TO DO List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          toggleItem={this.toggleItem}
          todos={this.state.todos}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
