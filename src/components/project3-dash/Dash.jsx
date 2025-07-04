import React from "react";
import './dash.css';
import { Rps } from "./Rps";
import { Tc } from "./Tc";
import { Digital } from "./Digital";
import { Calc } from "./Calc";
import { Stop } from "./stop";
import { useEffect } from "react";
const Dash = () => {
  useEffect(() => {
    document.title = "Dash Board | Mini Project";
  }, []);
  return (
    <section className="skill section" id="projects">
      <div style={{ padding: "2rem" }}>
        <h2 className="section_title">Mini Projects</h2>
        <span className="section_subtitle">My Projects</span>
        <div className="dash_container container grid">
          <Rps/>
          <Tc/>
          <Digital/>
        </div>
        <div  className="dash1_container container grid">
          <Calc/>
          <Stop/>
        </div>
      </div>
    </section>
  );
};

export default Dash;
