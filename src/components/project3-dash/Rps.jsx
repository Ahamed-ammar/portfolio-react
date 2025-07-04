import React from "react";
import rps from '../../assets/rps.jpg';
import './dash.css';

export const Rps = () => {
  return (
    <>
      <div className="project_content">
        <div>
          <span className="section_subtitle">Rock - Paper - Scissors</span>
          <img src= {rps}></img>
          <a
            href="/mini-project/javascript/rock-paper-scissors/game1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="dash_btn"
          >
            Play
            <i className="uil uil-arrow-up-right button_icon"></i>
          </a>
        </div>
      </div>
    </>
  );
};
