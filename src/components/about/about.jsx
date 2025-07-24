import React from 'react';
import "./About.css";
import profileImg from '../../assets/profile.jpg';
import { Info } from './Info';
import CV from '../../assets/Resume 2.0.pdf'

const About = () => {
  return (
    <section className="about section" id='about'>
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My introduction</span>
      <div className="about_container container grid">
      <img src={profileImg}className='about_img'></img>
        <div className="about_data">
            <Info/>
          <p className='about_description'>
          I’m Ahamed Ammar, Computer Science & Business System student passionate about software Engineering and problem-solving. 
          I enjoy learning new technologies and building real-world projects and also intrested in Fitness and Sports 
          like Calisthenics.
          </p>
          <a download=""href={CV} className="button button--flex">
            Download CV <i className="uil uil-file-alt button_icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
