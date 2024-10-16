// HomePage.js
import React from 'react';
import './HomePage.css';
import image from "../images/page.jpg";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content-section">
        <div className="left-section">
          <div className="typing-animation">
            <h1>NAVSGRAM</h1>
            <span >
            <p style={{width:'350px',textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tenetur qui iusto, modi accusamus obcaecati minus. Sint modi dolore exercitationem!</p>
            </span>
            {/* You can add more text or customize as needed */}
          </div>
        </div>
        <div className="right-section">
          <img src={image} alt="Homepage Image" className="responsive-image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
