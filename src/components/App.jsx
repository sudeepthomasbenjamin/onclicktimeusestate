import React, { useState } from "react";

function App() {
  
  let time = new Date().toLocaleTimeString();

var [init,initFn]=useState(time)
  
function clicked()
  {
    let time = new Date().toLocaleTimeString();
     initFn(time)
  }
  
  setInterval(clicked,10)
  
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={clicked}>Get Time</button>
    </div>
  );
}

export default App;
