import React from "react";
import { SignOut } from "./SignOut";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  limit,
  query,
  orderBy,
} from "firebase/firestore";
import SendMessage from "./SendMessage";

export const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy('TimeStamp'), limit(40));

    const useME = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
    return useME;
  }, []);

  return (
    <div>
      <SignOut />
      {messages.map(({ id, text, photoURL }) => (
        <div key={id}>
          <img src={photoURL}/>
          <p>{text}</p>
        </div>
      ))}
      <SendMessage/>
    </div>
  );
};
