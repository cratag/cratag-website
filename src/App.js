import React, {useState} from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import './App.css';
import mail from "./assets/mail.png"
import git from "./assets/git2.png"
import template from "./assets/template.png"



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

function Header(){
  const [gitGlow, setGitGlow] = useState(false);
  const [mailGlow, setMailGlow] = useState(false);
  return <div>
{/* HEADER */}
<div className="Header">
  <div style={{padding: "0.5%"}}>
  <Link to="/" style={{ color: '#FFF', textDecoration: "none" }}><p className="HeaderTitle">crat<p style={{display: 'inline', fontFamily: 'Calibri'}}>λ</p>g</p></Link>
  <Link to="/about">Yeah</Link>
      {/* SPACE */}<div style={{marginRight: "2%", display: "inline", float: "right", color: "black"}}> - </div>

      {/* MAIL */}
    <a href="mailto:devcratag@gmail.com"><img 
      className="HeaderButton" src={mail} 
      alt="Mail" style={{height: mailGlow ? "30px" : "25px"}} 
      onMouseEnter={() => setMailGlow(true)} 
      onMouseLeave={() => setMailGlow(false)} />
    </a>

      {/* GIT */}
    <a href="https://www.github.com/cratag"><img 
      className="HeaderButton" src={git} 
      alt="Git" style={{height: gitGlow ? "30px" : "25px"}} 
      onMouseEnter={() => setGitGlow(true)} 
      onMouseLeave={() => setGitGlow(false)} />
    </a>
  </div> 
</div>
{/* HEADER END */}

  </div>
}

function Home() {

return <div>
{Header()}

{/* CONTAINER */}
<div>
  <div className="CenterBody">
    <img  src={template} className="CenterBodyImage" alt="temp"/>
    <img  src={template} className="CenterBodyImage" alt="temp"/>
    <img  src={template} className="CenterBodyImage" alt="temp"/>
  </div>
</div>
{/* CONTAINER END*/}

</div>;};


function About() {
  return <div>
{Header()}
<h1>Voila it works</h1>
</div>;
}

function Users() {
  return <h2>Users</h2>;
}
















