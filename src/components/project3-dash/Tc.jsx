import React from "react";
import tc from '../../assets/tc.jpg';
import './dash.css';

export const Tc = () => {
  return (
    <>
      <div className="project_content">
        <div>
          <span className="section_subtitle">Tempareture Conversation</span>
          <img src={tc}></img>
          <a
            href="/mini-project/javascript/celsius and fahrenheit/index.html"
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
