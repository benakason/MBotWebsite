import React, { useState } from "react";
import LanguageButton from "./LanguageButton";

const Card = ({ imagePath, title, paragraph }) => {
  const [transformStyle, setTransformStyle] = useState("translate(10, 10)");

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    height: "75vh",
    border: "0px solid #ddd",
    borderRadius: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    backgroundColor: "white",
    margin: 20,
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
    transform: transformStyle,
    oveflow: "scroll",
  };

  const cardImageStyle = {
    height: "408px",
    objectFit: "cover",
  };

  const cardTextStyle = {
    padding: "16px",
  };

  const cardTextTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
    display: "flex",
  };

  const cardTextParagraphStyle = {
    fontSize: "12px",
    color: "#555",
  };

  const handleCardHover = () => {
    // Apply the pop-up effect on hover
    setTransformStyle("translate(-10px, -10px)");
  };

  const handleCardLeave = () => {
    // Reset the transform on hover leave
    setTransformStyle("translate(10px, 10px)");
  };

  return (
    <div
      style={cardStyle}
      onMouseOver={handleCardHover}
      onMouseLeave={handleCardLeave}
    >
      <img src={imagePath} style={cardImageStyle} alt="Card Image" />
      <div style={cardTextStyle}>
        <div style={cardTextTitleStyle}>{title}</div>
        <div style={cardTextParagraphStyle}>{paragraph}</div>
      </div>
    </div>
  );
};

export default Card;
