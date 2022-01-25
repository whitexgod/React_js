import {
  collection,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { db, auth } from "../firebase";

function SendMessage() {
  const [msg, setMsg] = useState("");
  async function MessageNow(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: msg,
      photoURL,
      uid,
      crteatedAt: serverTimestamp(),
    });
    setMsg("");
  }
  return (
    <div>
      <form onSubmit={MessageNow}>
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Message..."
        ></input>
        <button type="submit" >Send</button>
      </form>
      <div>
      </div>
    </div>
  );
}

export default SendMessage;
