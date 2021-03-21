import React from 'react'
import "./me.css";
import login from "./login.png";
import signin from "./signin.png";
import landing from "./landing.png";

function Me()
{
  return(
    <div className="content">
      <div className="about">
        <h3>About me</h3>
        <h5>Ambitions should vary from your personal preferences!</h5>
        <h6>I am an enthusiast front end developer with an aspiring dream of becoming a top-notch prohgrammer in this field. I like working with new technologies and be a part of the inpirational UI society. </h6>
      </div>
      <div className="portfolio">
        <h3>My projects</h3>
        <h5>Login page for Social Komb</h5>
        <img src={login} alt="login page for Social Komb" width="600px" height="auto"/>
        <h5>Sign in page for Social Komb</h5>
        <img src={signin} alt="signin page for Social Komb" width="600px" height="auto"/>
        <h5>Landing page page for Elegance</h5>
        <img src={landing} alt="landing page for Elegance" width="600px" height="auto"/>
      </div>
    </div>
  );
}

export default Me;
