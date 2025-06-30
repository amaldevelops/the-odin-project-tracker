/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import Count from "./Count";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.editButtonName = "Edit Task";
    this.toDoListIndexNo;
    this.editTaskContent = "Hello";

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      inputVal: "Add a Task",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.editButton = this.editButton.bind(this);
    this.editTask = this.editTask.bind(this);
    this.resubmitButtonClicked = this.resubmitButtonClicked.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  editButton(buttonID) {
    console.log("Edit Button Clicked: " + buttonID);
    this.toDoListIndexNo = this.state.todos.findIndex((checkForIndex) => {
      return checkForIndex === buttonID;
    });
    console.log(this.toDoListIndexNo);

    this.editTaskContent = this.state.todos[this.toDoListIndexNo];
    this.editTaskContent = this.state.todos[this.toDoListIndexNo];
    this.editButtonName = "Change Task";
    this.setState({});
    console.log("EditTaskContent Value:" + this.editTaskContent);
    console.log(this.state);
  }

  editTask(editTaskInput) {
    this.editTaskContent = editTaskInput.target.value;
    this.setState({});
    console.log(this.editTaskContent);
    console.log(this.state);
  }

  resubmitButtonClicked(e) {
    e.preventDefault();

    console.log(this.state);
    this.editButtonName = "Edit Task";
    this.editTaskContent;
    let newArray = this.state.todos.splice(this.toDoListIndexNo, 1);
    this.setState((state) => ({ ...state, newArray }));
    this.setState((state) => ({
      todos: state.todos.concat(this.editTaskContent),
      inputVal: "",
    }));

    console.log(this.state);
  }

  deleteButton(buttonID) {
    console.dir(buttonID);
    console.log(this.state);
    let toDoListIndexNoDelete = this.state.todos.findIndex((checkForIndex) => {
      return checkForIndex === buttonID;
    });
    console.log(toDoListIndexNoDelete);
    let newArray = this.state.todos.splice(toDoListIndexNoDelete, 1);
    this.setState((state) => ({ ...state, newArray }));
  }

  render() {
    return (
      <section>
        <Count TodoCount={this.state.todos.length} />
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Task</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {this.editButtonName === "Edit Task" ? (
                <div>
                  {todo}{" "}
                  <button
                    type="button"
                    id={todo}
                    onClick={() => this.editButton(todo)}
                  >
                    {this.editButtonName}
                  </button>
                  <button
                    type="button"
                    id={todo}
                    onClick={() => this.deleteButton(todo)}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <div>
                  <form onSubmit={this.resubmitButtonClicked}>
                    <label htmlFor="task-edit">{this.editTaskContent} </label>
                    <input
                      id={todo}
                      type="text"
                      name="task-edit"
                      value={this.editTaskContent}
                      onChange={this.editTask}
                    />
                    <button
                      type="submit"
                      id={todo}
                    >
                      {this.editButtonName}
                    </button>
                  </form>
                </div>
              )}{" "}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
