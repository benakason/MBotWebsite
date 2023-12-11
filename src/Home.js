import React from "react";
import InputField from "./InputField";
import { SocketProvider } from "./SocketContext";
import ExplanationCard from "./ExplanationCard";
import "./App.css";

function Home() {
  return (
    <div className="App">
      {/* Provide the socket value */}

      <div className="background">
        <ExplanationCard></ExplanationCard>
        <SocketProvider>
          <InputField />
        </SocketProvider>
      </div>
    </div>
  );
}

export default Home;
