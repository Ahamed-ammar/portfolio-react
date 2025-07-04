import React from "react";
import stop from "../../assets/stop1.jpg";
import "./dash.css";

export const Stop = () => {
  return (
    <>
      <div className="project_content">
        <div>
          <span className="section_subtitle">Stop Watch</span>
          <img src={stop}></img>
          <a
            href="/mini-project/javascript/Stop Watch/stop.html"
            target="_blank"
            rel="noopener noreferrer"
            className="button dash_btn"
          >
            Try it
            <i className="uil uil-arrow-up-right button_icon"></i>
          </a>
        </div>
      </div>
    </>
  );
};
