import React from "react";
import Login from "./Login";
import Greeting from "./Greeting";

var login=false;

/**function checkLogin() {
  if(login===true){
    return (
      <h1>Hello</h1>
    )
  }
  else {
    return (
      <Login/>
    )
  }
}*/

function App() {
  return (
    <div className="container">
      {login? <Greeting/> : <Login/>}
    </div>
  );
}

export default App;
