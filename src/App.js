import React from 'react';
import './index.css';
import profilePic from './images/profile-pic.jpg'; 

const App = () => {
  return (
    <div className="resume-container">
      <div className="sidebar">
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-picture" /> 
          <h1 className="name">Cedric James G. Lumawig</h1>
          <p className="title">Indie Game Developer</p>
        </div>
        
        <div className="contact">
          <h2>Contact</h2>
          <p>Email: cjglumawig.student@ua.edu.ph</p>
          <p>Phone: (123) 456-7890</p>
          <p>Arayat Pampanga, Philippines</p>
          <p>GitHub: <a href="#">github.com/TinapayNaMainit</a></p>
        </div>

        <div className="education">
          <h2>Education</h2>
          <p>Arayat Holy Child Educational Foundation Inc.</p>
          <p>Elementary to Senior High School</p>
          <p>2011-2021</p>
          <p>Arayat, Pampanga</p>
          <p>University of Assumption</p>
          <p>Bachelor of Science in Information Technology</p>
          <p>2021-Present</p>
          <p>San Fernando, Pampanga</p>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>Python</li>
            <li>CSS</li>
            <li>Game Engine</li>
            <li>Figma</li>
            <li>Wireframing </li>
            <li>Level Design and Game Mechanics</li>
            <li>Storyboarding and Narrative Design</li>
            <li>User Experience in Games</li>
            <li>Prototyping and Playtesting</li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <h2>Work Experience</h2>
        <div className="work-item">
          <h3>Game Developer</h3>
          <p> | 2021 - Present | San Fernando, Pampanga</p>
          <ul>
            <li>Made a Visual Novel Game as a Project on 1st Year College</li>
            <li>Created a prototype of a basic RPG game.</li>
            <li>Knowledgeable in creating basic games, but more experienced in creating visual novels.</li>
            <li><strong>Experience with Renpy Engine.</strong> Alongside it, I have picked up UI/UX design and Narrative Design.</li>
          </ul>
        </div>

        <div className="work-item">
          <h3>Freelance Web Designer</h3>
          <p> | 2019 - 2020 | Arayat, Pampanga</p>
          <ul>
            <li>Created various prototypes for a website.</li>
            <li>Made it appealing with simple interactive design.</li>
            <li>Maintained it and received feedback for user satisfaction.</li>
          </ul>
        </div>

        <div className="work-item">
          <h3>Front-end Developer</h3>
          <p> | 2020 - 2021 | Clark Global City, Pampanga</p>
          <ul>
            <li>Created a website with responsiveness for both desktop and mobile.</li>
            <li>Fixed numerous CSS and HTML issues on a website.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
