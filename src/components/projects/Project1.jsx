import React, { useState } from "react";
import "./projects.css";
import './alert.css'
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
          <span className="project_subtitle">Skill Tracker</span>
          <span className="project_subtitle warning">Process....</span>
          <p className="project_description">
            The skill tracker, it's helps to track your coding progress, how
            much questions you solve in coding practice platform like leetcode,
            codeforces, etc.. and also includes some famous DSA pattern sheets
            like striver sheet, babur sheet, neetcode 150.
          </p>
          <a onClick={handleShowAlert} className="button">
            {" "}
            Visit Skill Tracker{" "}
            <i class="uil uil-arrow-up-right button_icon"></i>
          </a>
          {showAlert && (
            <div className="custom-alert">🚀 This is Project will Deploy Soon..</div>
          )}
        </div>
      </div>
    </>
  );
};
