import React from "react";

const LanguageButton = ({ text }) => {
  const lb = {
    backgroundColor: "lightgray",
    borderRadius: "50px",
    height: "20px",
    width: "40px",
    font: "Lucida Console",
    fontWeight: "800",
    fontSize: "16px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={lb}>
      <p>{text}</p>
    </div>
  );
};

export default LanguageButton;
