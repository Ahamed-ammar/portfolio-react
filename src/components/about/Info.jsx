import React from "react";

export const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="fa-solid fa-laptop-code about_icon"></i>
        <a href="https://codolio.com/profile/ahamed-ammar07" target="_blank">
          <h3 className="about_title">DSA & CP</h3>
        </a>
        <span className="about_subtitle">600+ Problems Solved</span>
      </div>

      <div className="about_box">
        <i class="uil uil-briefcase about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">2 + Projects</span>
      </div>

      <div className="about_box">
        <i class="fa-solid fa-headset about_icon"></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  );
};
