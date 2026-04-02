import React, { useState } from "react";
export const Project4 = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  return (
    <>
      <div className="project_content">
        <div>
          <h1 className="project_title">Project 4</h1>
          <span className="project_subtitle">Expence Tracker</span>
          {/* <span className="project_subtitle warning">Process....</span> */}
          <ul className="project_description">
            <li>
              Developed a desktop application to manage personal finances,
              enabling users to track income and expenses, categorize
              transactions, and store data in MySQL with a user-friendly
              interface. Implemented input validation to ensure accurate and
              reliable data entry.
            </li>
          </ul>
        </div>
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
        {showAlert && (
          <div className="custom-alert">
            🚀 This is Project will Deploy Soon..
          </div>
        )}
      </div>
    </>
  );
};
