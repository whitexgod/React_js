import "./App.css";
import { Chat } from "./My_Components/Chat";
import { SignIn } from "./My_Components/SignIn/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useState } from "react";


function App() {
  const default_style = {
    backgroundColor: "white",
    backgroundImage:
      "repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1))",
    backgroundSize: "80px 120px",
  };
  const dark_mode_style = {
    backgroundColor: "#6d695c",
    backgroundImage:
      "repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1))",
    backgroundSize: "80px 120px",
  };
  const [styleBody, setStyleBody] = useState(default_style);

  const [user] = useAuthState(auth); //if signed in user will return true

  return (
    <div className="App " style={styleBody}>
      <div className="dark-mode">
        <button
          onClick={() => {
            setStyleBody(dark_mode_style);
          }}
          type="button"
          className="btn btn-dark btn-sm"
        >
          🌙
        </button>

        <button
          onClick={() => {
            setStyleBody(default_style);
          }}
          type="button"
          className="btn btn-light btn-sm"
        >
          🌞
        </button>
      </div>
      {user ? <Chat /> : <SignIn />}
      
    </div>
  );
}

export default App;
