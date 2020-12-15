import React, {useState} from 'react';
import './App.css';
import mail from "./assets/mail.png"
import git from "./assets/git2.png"

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


export default function App() {     

return (
<Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const [gitGlow, setGitGlow] = useState(false);
  const [mailGlow, setMailGlow] = useState(false);
  return <div>

  <div className="Header">
  <div style={{padding: "0.5%"}}>
  <p className="HeaderTitle">crat<p style={{display: 'inline', fontFamily: 'Calibri'}}>λ</p>g</p>
    <div style={{marginRight: "2%", display: "inline", float: "right", color: "black"}}> - </div>
    <a href="mailto:devcratag@gmail.com"><img className="HeaderButton" src={mail} alt="Mail" style={{height: mailGlow ? "30px" : "25px"}} onMouseEnter={() => setMailGlow(true)} onMouseLeave={() => setMailGlow(false)} /></a>
    <a href="https://www.github.com/cratag"><img className="HeaderButton" src={git} alt="Git" style={{height: gitGlow ? "30px" : "25px"}} onMouseEnter={() => setGitGlow(true)} onMouseLeave={() => setGitGlow(false)} /></a>
  </div> 
    
  </div>
  
  <div className="Container">
    <div className="CenterBody">
    <text className="test"> Hello w2orld</text>
    </div>
  
  </div>
  </div>
  ;};


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
















