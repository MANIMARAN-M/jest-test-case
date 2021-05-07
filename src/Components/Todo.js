import React from "react";

const Todo = ({ todos }) => {
  const h1 = <h1>{todos.title}</h1>;
  const text = todos.completed ? <strike>{h1}</strike> : h1;
  return <div data-testid={`todo-${todos.id}`}>{text}</div>;
};

export default Todo;
