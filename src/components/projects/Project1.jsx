import React, { useState } from "react";
import "./projects.css";
import "./alert.css";
export const Project1 = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  return (
      <>
        <div className="project_content">
          <div>
            <h1 className="project_title">Project 1</h1>
            <span className="project_subtitle">
              Curator.ai - Job Finder and Skill Tracker
            </span>
            {/* <span className="project_subtitle warning">Process....</span> */}
            <ul className="project_description">
              <li>
                Curator AI is an AI-powered job matching and skill gap analysis
                system that uses LLMs and embeddings to evaluate resumes,recommend
                jobs, and generate personalized learning plans.
              </li>
            </ul>
          </div>
          <a href="https://movie-mate-3.vercel.app/" className="button">
            {" "}
            Visit App <i class="uil uil-arrow-up-right button_icon"></i>
          </a>
          <a href="https://github.com/Ahamed-ammar/CuratorAi-SkillTracker" target="blank" className="white-btn">
            src code <i class="uil uil-arrow-up-right button_icon"></i>
          </a>
          {showAlert && (
            <div className="custom-alert">
              🚀 This is Project will Deploy Soon..
            </div>
          )}
        </div>
      </>
  );
};
