// src/components/projects/Project3.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Project3 = () => {
  return (
    <div className="project_content">
      <h1 className="project_title">Project 3</h1>
      <span className="project_subtitle">Mini Projects</span>
      <p className="project_description">
      These mini projects all are builded by using HTML, CSS, JS and also
            it's helps to learn javascript deeply.After learn javascript through
            do these small projects it helps me to learn javascript oriended
            libraries and frameworks like React.js, Next.js and Express.js.
      </p>
      <a href="/dashboard" target="_blank" rel="noopener noreferrer" className="button">
        Visit My Mini Project{" "}
        <i className="uil uil-arrow-up-right button_icon"></i>
      </a>
    </div>
  ); 
};
