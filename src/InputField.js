import React, { useContext, useState } from "react";
import { SocketContext } from "./SocketContext";
import { useSocketIO, ReadyState } from "react-use-websocket";
import ExplanationCard from "./ExplanationCard";
import "./App.css";

const InputField = () => {
  const [message, setMessage] = useState(""); // State to hold the input value
  const { sendJsonMessage, readyState } = useSocketIO("ws://localhost:5050");
  const socket = useContext(SocketContext);

  const sendMessage = () => {
    console.log("Sending message...");
    if (readyState === ReadyState.OPEN && message.trim() !== "") {
      sendJsonMessage({ message }); // Sending the input message as JSON
      setMessage(""); // Clearing the input after sending
    }
  };

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default InputField;
