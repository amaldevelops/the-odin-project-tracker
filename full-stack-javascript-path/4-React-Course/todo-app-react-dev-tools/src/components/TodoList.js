import React from "react";

import Todo from "./Todo";

function TodoList(props) {
  return (
    <>
      {props.todos.map((todo, i) => (
   	    <Todo todo={todo} key={i} />
      ))}
    </>
  );
}

export default React.memo(TodoList);
