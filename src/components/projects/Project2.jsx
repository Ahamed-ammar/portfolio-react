import React, { useState } from "react";
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
          <span className="project_subtitle">Chat App</span>
          <span className="project_subtitle warning">Process....</span>
          <p className="project_description project2_description">
            The chat app, it's used to chat with others like whatsapp. You can
            live chat with others , also you can create groups and also it has
            some AI chat bot.
          </p>
        </div>
        <a onClick={handleShowAlert} className="button">
          {" "}
          Visit Chat App <i class="uil uil-arrow-up-right button_icon"></i>
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
