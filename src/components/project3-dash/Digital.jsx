import React from "react";
import digital from '../../assets/digital.jpg';
import './dash.css';
export const Digital = () => {
  return (
    <>
      <div className="project_content">
        <div>
          <span className="section_subtitle">Digital Clock</span>
          <img src={digital}></img>
          <a
            href="/mini-project/javascript/digtal clock/digital.html"
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
