import React, { Component, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Todo from "./Components/Todo";
import InputComponent from "./Components/InputComponent";

function App() {
  const todos = [
    { id: 1, title: "learn jest", completed: false },
    { id: 2, title: "learn context", completed: true },
  ];
  const [isLogged, setisLogged] = useState(false);
  return (
    <div data-testid="test-1">
      <div className="App">
        {isLogged ? (
          <div>Login Successfully</div>
        ) : (
          <Login data-testid="form-id" setisLogged={setisLogged} />
        )}
      </div>
      <div className="appButtonTest">
        {todos.map((todo) => {
          return <Todo todos={todo} />;
        })}
      </div>
      <div>
        <InputComponent />
      </div>
    </div>
  );
}

export default App;
