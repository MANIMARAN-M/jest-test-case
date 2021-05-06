import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";

function App() {
  const [isLogged, setisLogged] = useState(false);
  return (
    <div data-testid="test-1" className="App">
      {isLogged ? (
        <div>Login Successfully</div>
      ) : (
        <Login data-testid="form-id" setisLogged={setisLogged} />
      )}
    </div>
  );
}

export default App;
