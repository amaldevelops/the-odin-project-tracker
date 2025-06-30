import React, { Component } from "react";

class Count extends Component {
  constructor(TodoCount) {
    super(TodoCount);
    // this.count=this.TodoCount;
  }

  render() {
    return (
      <div>
        <h3>Number of Todo's:</h3>
        <h4>{this.props.TodoCount}</h4>
      </div>
    );
  }
}

export default Count;
