import React, {useState} from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import useWindowDimensions from "./dimensions"

import './App.css';
import mail from "./assets/mail.png"
import git from "./assets/git2.png"
import contact from "./assets/contact.png"
import projects from "./assets/projects.png"
import aboutme from "./assets/aboutme.png"



export default function App() {     

return (
<Router>
      <div>
        <Switch>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>


        </Switch>
      </div>
    </Router>
);}

// HEADER
function Header(){
  const [gitGlow, setGitGlow] = useState(false);
  const [mailGlow, setMailGlow] = useState(false);
  return <div className="Header">
{/* HEADER */}
  <div style={{padding: "0.5%"}}>
  <Link to="/" style={{ color: '#FFF', textDecoration: "none" }}><p className="HeaderTitle">crat<p style={{display: 'inline', fontFamily: 'Calibri'}}>λ</p>g</p></Link>
  {/* <Link to="/about">Yeah</Link> */}
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
{/* HEADER END */}
</div>
}
// HEADER END

// FOOTER
function Footer(){
  return <div className="Footer">
<p> Copyright (c) 2020 Copyright <a style={{ color: '#FFF', textDecoration: "none" }} href="http://www.cratag.com/">cratag.com</a> All Rights Reserved.</p>
</div>
}
// FOOTER END


function Home() {
  const { width, height } = useWindowDimensions();
  let imageWidth = width * 0.15
  let heightAsMargin = height * 0.13
return <div>
{Header()}
{/* CONTAINER */}
  <div className="CenterBodyOuter" style={{marginTop: heightAsMargin}}>
      <center>
    <div className="CenterBody">
        <Link to="/contact"><img className="CenterBodyImage" style={{width: imageWidth}} src={contact}  alt="Contact"/></Link>
        <Link to="/projects"><img className="CenterBodyImage" style={{width: imageWidth}} src={projects}  alt="Projects"/></Link>
        <Link to="/about"><img className="CenterBodyImage" style={{width: imageWidth}} src={aboutme}  alt="About Me"/></Link>
    </div>
      </center>
  </div>
{/* CONTAINER END*/}

{Footer()}
</div>;};


function Projects() {
  return <div>
{Header()}
<h1 style={{margin: "20%", color: 'white'}}>PROJECTS</h1>
{Footer()}
</div>;}

function About() {
  return <div>
{Header()}
<h1 style={{margin: "20%", color: 'white'}}>About</h1>
{Footer()}
</div>;}

function Contact() {
  return <div>
{Header()}
<h1 style={{margin: "20%", color: 'white'}}>About</h1>
{Footer()}
</div>;}