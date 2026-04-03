import React, { useState } from "react";
import "./projects.css";
import "./alert.css";
export const Project2 = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  return (
    <>
      <div className="project_content">
        <div>
          <h1 className="project_title">Project 2</h1>
          <span className="project_subtitle">Order Nest - ERP System</span>
          {/* <span className="project_subtitle warning">Process....</span> */}
          <ul className="project_description">
            <li>
              Built a MERN-based web app to digitize order and delivery
              management for a flour mill, featuring phone-based login, dynamic
              pricing, order tracking, and an admin dashboard for managing
              orders, products, and staff.
            </li>
          </ul>
        </div>
        <div className="btn_wrapper">
          <a
            href="https://os-erp-system.vercel.app/"
            className="button"
            target="blank"
          >
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
        {showAlert && (
          <div className="custom-alert">
            🚀 This is Project will Deploy Soon..
          </div>
        )}
      </div>
    </>
  );
};
