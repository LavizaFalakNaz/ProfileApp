import React from "react";
import {
  BrowserRouter as Router, //a packet of complete app with <router> ......... </router>
  Switch, //pack the routes to different locations <switch> ......... </switch>
  Route, //individual modes of getting onto different parts /access different components <route> ........ </route>
  Link //link to the next component <li><link to="/">home</link></li>
} from "react-router-dom";
import './profile.css';
import Me from './Me';
import Home from './Home';
import Education from './Education';
import Professional from './Professional'
import Contact from './Contact';
import pic from "./profile.png";

export default function Profile() {
  return (
    <Router>
    <div id="container">

    <header>
        <div className="quoteoftheday">Profile</div>
        <div className="name">Niazi</div>
    </header>

    <article>

        <div className="quote">
            <h1>You can never be a coder if you aren't born to be one.</h1>
        </div>
        <div className="quoteby">
            <img src={pic} alt="Laviza Falak Naz" width="50px" height="50px" />
            <h4>Laviza Falak Naz</h4>
        </div>

    </article>

    <footer>

        <div className="skills">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/professional">Profession</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/"> {/*exact keyword helps to set priority of '/' as the route makes it a challenge for the routes to identify further routes which also have a '/'*/}
            <Home />
          </Route>
          <Route path="/about">
            <Me/>
          </Route>
          <Route path="/education">
            <Education/>
          </Route>
          <Route path="/professional">
            <Professional/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>

    </footer>
    </div>
    </Router>
  );
}
