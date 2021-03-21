import React from 'react'
import "./professional.css";

function Professional()
{
  return(
    <div className="content">
      <div className="Jobs">
        <h3>React Intern</h3>
        <h5>Interns Pakistan -- Jan 2021 - Feb 2021</h5>
        <ul>
          <li>Complete daily challenges about react</li>
          <li>Develop mini projects</li>
        </ul>
        <h3>PHP Intern</h3>
        <h5>Social Komb -- Nov 2020 - Present</h5>
        <ul>
          <li>Solve development queries</li>
          <li>Site maintenance</li>
          <li>Bug fixing</li>
        </ul>
        <h3>Web Development Intern</h3>
        <h5>Interns Pakistan -- Nov 2020 - Dec 2020</h5>
        <ul>
          <li>Complete daily challenges about HTML/CSS/JS</li>
          <li>Practice libraries ES6/jQuery/Bootstrap</li>
          <li>Develop mini projects</li>
        </ul>
      </div>
    </div>
  );
}

export default Professional;
