import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";

// import React from "react";
// import InputField from "./InputField";
// import { SocketProvider } from "./SocketContext";
// import ExplanationCard from "./ExplanationCard";
// import "./App.css";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
