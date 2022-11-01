import React from "react";
import Login from "./Login";

var isloggedIn = false;

// function renderCondition() {
//   if (isloggedIn === true) {
//     return ;
//   } else {
//     return 
//   }
// }
var time = new Date().getHours()

function App() {
  return <div className="container">
    {
      isloggedIn ? time >12 && <h1>Why are you still working...</h1> : <Login />
      // time >12 ? <h1>Why are you still working...</h1> : null
      
    }
  </div>;
}

export default App;
