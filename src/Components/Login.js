import React, { useState } from "react";

const Login = ({ setisLogged }) => {
  const [LoginFrom, setLoginFrom] = useState({
    MailId: "maran@gmail.com",
    Password: "maran001",
  });
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  //   const [LoginUser, setLoginUser] = useState({
  //     MailId: "",
  //     Password: "",
  //   });
  const SumbmitHandler = (e) => {
    e.preventDefault();
    if (LoginFrom.MailId === email && LoginFrom.Password === password) {
      setLoginFrom({
        ...LoginFrom,
      });
      setisLogged(true);
      setemail("");
      setpassword("");
    } else {
      alert("You Email or Password was wrong!");
      setemail("");
      setpassword("");
    }
  };
  return (
    <form className="LoginForm" id="Form" onSubmit={(e) => SumbmitHandler(e)}>
      <h1>signIn Form</h1>
      <div className="LoginInoutGroup">
        <label htmlFor="">Email Id</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>
      <div className="LoginInoutGroup">
        <label htmlFor="">Password ID</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <button type="submit">LOGIN</button>
    </form>
  );
};

export default Login;
