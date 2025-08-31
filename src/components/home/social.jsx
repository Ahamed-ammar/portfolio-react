import React from 'react';
import { SiLeetcode } from 'react-icons/si'; // LeetCode icon

const Social = () => {
  return (
    <div className='home_social'>
      <a
        href='https://www.linkedin.com/in/ahamed-ammar-954433322/'
        className='home_social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a
        href='https://github.com/Ahamed-ammar'
        className='home_social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        href='https://codolio.com/profile/ahamed-ammar07'
        className='home_social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <SiLeetcode size={22} color="black" /> {/* LeetCode icon */}
      </a>
    </div>
  );
}

export default Social;
