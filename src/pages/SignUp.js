import React from "react";

function SignUp() {
  return (
    <div>
      <p>Enter your username: </p>
      <input type="text" id="username" />
      <p>Enter your password: </p>
      <input type="text" id="password" />
      <button id="signin">Sign In</button>
    </div>
  );
}

export default SignUp;
