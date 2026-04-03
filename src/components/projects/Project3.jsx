// src/components/projects/Project3.jsx
import React from "react";
import { Link } from "react-router-dom";

export const Project3 = () => {
  return (
    <div className="project_content">
      <div>
        <h1 className="project_title">Project 3</h1>
        <span className="project_subtitle">
          Movie-Mate - Social Media Platform
        </span>
        {/* <span className="project_subtitle warning">Process....</span> */}
        <ul className="project_description">
          <li>
            Movie-Mate is a full-stack MERN application that allows users to
            track movies, manage watchlists, rate films, and share reviews. It
            integrates the TMDb API for real-time movie data and uses JWT-based
            authentication with an optimized MongoDB backend for efficient
            performance.
          </li>
        </ul>
      </div>
      <div className="btn_wrapper">
        <a href="https://movie-mate-3.vercel.app/" className="button">
          {" "}
          Visit App <i class="uil uil-arrow-up-right button_icon"></i>
        </a>
        <a
          href="https://github.com/Ahamed-ammar/CuratorAi-SkillTracker"
          target="blank"
          className="white-btn"
        >
          src code <i class="uil uil-arrow-up-right button_icon"></i>
        </a>
      </div>
    </div>
  );
};
