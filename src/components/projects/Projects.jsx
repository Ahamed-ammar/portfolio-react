import React from "react";
import "./projects.css";
import { Project1 } from "./project1";
import { Project2 } from "./project2";
import { Project3 } from "./Project3";
export const Projects = () => {
  return (
    <section className="skill section" id="projects">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">My Projects</span>
      <div className="project_container container grid">
        <Project1 />
        <Project2 />
        <Project3/>
      </div>
    </section>
  );
};
