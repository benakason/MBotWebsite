import React, { useContext, useState } from "react";
import Card from "./Card";
import "./App.css";

const About = () => {
  return (
    <div className="about-background">
      <div className="yellow-title-div">
        <p className="yellow-title">Meet our team!</p>
      </div>
      <div className="cards">
        <Card
          imagePath={process.env.PUBLIC_URL + "./BenHeadshot.png"}
          title={"Ben Akason"}
          paragraph={
            "Ben began by designing the servo rack using AutoCAD 2024. He then went on to design the simple webpage using React and utilized WebSockets as well as the node.js server it connected to before sending data to the robot. Finally, Ben contributed heavily to setting up the servo motor attachment, debugging the letter-writing algorithm, debugging the 1D motion controller, and preparation of presentation materials."
          }
        ></Card>
        <Card
          imagePath={process.env.PUBLIC_URL + "./DonovanPicture.jpg"}
          title={"Donovan Below"}
          paragraph={
            "Donovan wrote the first iteration of the block letter library while also creating the first iteration of the main program to execute path planning via user input. He then wrote the back end client server on the robot to receive user inputs from Ben's implementation of the website. Finally he helped devise a task specific motion controller, diverging from the original RTR PID logic. He also assisted in debugging the letter-writing algorithm along the way."
          }
        ></Card>

        <Card
          imagePath={process.env.PUBLIC_URL + "NikithaHeadshot2.jpg"}
          title={"Nikitha M. V."}
          paragraph={
            "Nikitha pioneered our 1D motion controller algorithm. She thoroughly tested and debugged the algorithm and utilized GPIO pins to implement the complex servo Raspberry Pi connection. Nikitha helped combine the server code into the existing motion controller architecture. Finally, Nikitha contributed immensely in the ideation phase as well as during the creation of presentation and demo materials."
          }
        ></Card>

        <Card
          imagePath={process.env.PUBLIC_URL + "./TheoHeadshot.jpg"}
          title={"Theo Cruz"}
          paragraph={
            "Theo contributed during the project ideation phase by offering creative solutions during our group brainstorm session. He also researched a 2D motion controller."
          }
        ></Card>
      </div>
    </div>
  );
};

// He regularly attended group meetings where he worked on developing the 2D motion controller. Unfortunately, we were never able to fully implement this controller, however, Theo's work helped us to debug our 1D controller throughout. Lastly, Theo helped develop presentation and demo resources.

export default About;
