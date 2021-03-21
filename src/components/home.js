import React from 'react'
import './Home.css';
import { Router } from 'react-router-dom'

function Home()
{
  return(
    <div className="content">
      <div className="Achievements">
        <h3>Certifications</h3>
        <ul>
          <li>Certified Digital Marketing expert </li>
          <li>Certified Game Developer</li>
          <li>Certified Web developer</li>
        </ul>
      </div>
      <div className="Goals">
        <h3>Objectives</h3>
        <ul>
          <li>Be a top-noth front end web develoepr</li>
          <li>Be a game UI designer</li>
          <li>Lead juniors in the world of UI/UX</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
