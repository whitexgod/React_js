import React, {useState} from "react";


function App() {
const [Time, setTime] = useState("Time");

function currentTime () {
    let time = new Date().toLocaleTimeString('it-IT');
    setTime(time);
    setInterval(currentTime, 1000);
}

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
