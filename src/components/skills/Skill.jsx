import React from "react";
import "./skill.css";
import { Frontend } from "./Frontend";
import { Backend } from "./Backend";
export const Skill = () => {
  return (
    <section className="skill section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};
