import React from "react";
import "./App.css";

const ExplanationCard = () => {
  return (
    <div className="p-container">
      <p>
        Welcome to the Text and Drive Bot! Our bot creates block letters that
        when combined together can form words. We thought writing letters was an
        interesting application of autonomous robots that had not been explored
        before. This website utilizes WebSockets to send user input to our
        server and then our server tells the robot what to write. Please feel
        free to input a word of your choosing and watch it - very slowly -
        appear on the page!{" "}
      </p>
    </div>
  );
};

export default ExplanationCard;
