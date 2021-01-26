
import './App.css';
import React from 'react';
import useWindowDimensions from "./dimensions"
import Header from "./comp/header.js"
import Footer from "./comp/footer.js"

import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import Projects from "./comp/projects"
import About from "./comp/about"
import quoteOfTheDay from "./comp/quote.js"

import contact from "./assets/contact.png"
import projects from "./assets/projects.png"
import aboutme from "./assets/aboutme.png"
import construction from "./assets/construction.png"



export default function App() {     
return (
<Router>
      <div>
        <Switch>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/work">
            <Work />
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

function Home() {
  const { width, height } = useWindowDimensions();
  let imageWidth = width * 0.15
  let imageWidthMobile = width * 0.50
  let heightAsMargin = height * 0.13
  let heightAsMarginMobile = height * 0.10
  let heightAsMarginBottom = height * 0.02
  let mobile = false
  if(width < 770){ mobile = false} else {mobile = true}
return <div>
{Header()}
{/* CONTAINER */}
{mobile ? (
  //////////////////////////////////////////////PC ↓
<p><center>
  <div style={{marginTop: heightAsMargin, marginBottom: heightAsMarginBottom}} className="CenterBodyOuter">
      <center>
          <div className="CenterBody">
            <Link to="/work"><img className="CenterBodyImage" style={{width: imageWidth}} src={contact}  alt="Contact"/></Link>
            <Link to="/projects"><img className="CenterBodyImage" style={{width: imageWidth}} src={projects}  alt="Projects"/></Link>
            <Link to="/about"><img className="CenterBodyImage" style={{width: imageWidth}} src={aboutme}  alt="About Me"/></Link>
          </div>
      </center>
  </div>
</center></p>
)
: //////////////////////////////////////////////////Mobile ↓ 
(<p><center>
  <div style={{marginTop: heightAsMarginMobile, marginBottom: heightAsMarginBottom}} className="CenterBodyOuter">
      <center>
          <div className="CenterBody">
            <Link to="/work"><img src={contact}  style={{marginBottom: "2%", marginTop: "1%", width: imageWidthMobile}}alt="Contact"/></Link>
            <Link to="/projects"><img src={projects}  style={{marginBottom: "2%", marginTop: "1%", width: imageWidthMobile}}alt="Projects"/></Link>
            <Link to="/about"><img src={aboutme}  style={{marginBottom: "2%", marginTop: "1%", width: imageWidthMobile}}alt="About Me"/></Link>
          </div>
      </center>
  </div>
</center></p>)}
{/* CONTAINER END*/}
{mobile ? (quoteOfTheDay()) : (<div style={{marginBottom: "10%"}}>{quoteOfTheDay()}</div>)}


{Footer()}
</div>;};

function Work() {
  const { height } = useWindowDimensions();
  let top = height * 0.25
  return <div>
{Header()}
<center style={{marginTop: top}}>
  <div style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
  <div style={{fontSize: 60, fontWeight: 'bold', color: 'white', marginBottom: "2%"}}>Under Construction</div>
  <div><img src={construction} alt="Construction"/></div>
  </div>
</center>
{Footer()}
</div>;}



function Contact() {
  return <div>
{Header()}
<div style={{fontSize: 40, color: 'white', marginTop: "30%"}}>{quoteOfTheDay()}</div>
{Footer()}
</div>;}
