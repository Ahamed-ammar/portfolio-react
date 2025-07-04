import React from "react";
import calc from '../../assets/calc.jpg';
import "./dash.css";

export const Calc = () => {
  return (
    <>
      <div className="project_content">
        <div>
          <span className="section_subtitle">Calculater</span>
          <img src={calc}></img>
          <a
            href="/mini-project/javascript/calculater/calc.html"
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
