
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
  let heightAsMargin = height * 0.13
  let heightAsMarginBottom = height * 0.05
return <div>
{Header()}
{/* CONTAINER */}
<center>
  <div style={{marginTop: heightAsMargin, marginBottom: heightAsMarginBottom}} className="CenterBodyOuter">
      <center>
    <div className="CenterBody">
        <Link to="/work"><img className="CenterBodyImage" style={{width: imageWidth}} src={contact}  alt="Contact"/></Link>
        <Link to="/work"><img className="CenterBodyImage" style={{width: imageWidth}} src={projects}  alt="Projects"/></Link>
        <Link to="/about"><img className="CenterBodyImage" style={{width: imageWidth}} src={aboutme}  alt="About Me"/></Link>
    </div>
      </center>
  </div>
</center>
{/* CONTAINER END*/}
{quoteOfTheDay()}
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
