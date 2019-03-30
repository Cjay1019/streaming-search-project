import React from "react";

function LogIn() {
  return (
    <div>
      <p>Enter your username: </p>
      <input type="text" id="username" />
      <p>Enter your password: </p>
      <input type="text" id="password" />
      <button id="login">Log In</button>
    </div>
  );
}

export default LogIn;
