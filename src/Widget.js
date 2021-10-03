import "./Widget.css";

import React from "react";
import { InfoOutlined } from "@mui/icons-material";
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
// import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import CircleIcon from '@mui/icons-material/Circle';
function Widget() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__articles">
      <div className="widgets__articlesLeft">
        <CircleIcon />
      </div>
      <div className="widgets__articlesRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoOutlined />
      </div>
      {newArticle("Whats new in Flutter 2.5", "Flutter")}
      {newArticle("Future of the PHP", "Clark.k")}
      {newArticle("React native the future?","Max")}
      {newArticle("Top 10 VS code extensions", "VS code")}
      {newArticle("Amazon Today", "Jeff.B")}
      <div className="widgets__header">
        <h2>Linkedin Courses</h2>
        <CastForEducationIcon />
      </div>
      {newArticle("The secret of Javascript", "Seth Goth")}
      {newArticle("Go Vs Node", "Novice Dude")}
      {newArticle("What is Graphic Design","Kalabe.G")}
      {newArticle("PHP what the what", "Bot378")}
      {newArticle("Flutter made easy", "Max")}
    </div>
  );
}

export default Widget;
