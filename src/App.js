import React, {useState} from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import useWindowDimensions from "./dimensions"

import './App.css';
import mail from "./assets/mail.png"
import git from "./assets/git.png"
// import fb from "./assets/fb.png"

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

// HEADER
function Header(){
  const [gitGlow, setGitGlow] = useState(false);
  const [mailGlow, setMailGlow] = useState(false);
  // const [fbGlow, setFbGlow] = useState(false);
  return <div className="Header">
{/* HEADER */}
  <div style={{padding: "0.5%"}}>
  <Link to="/" style={{ color: '#FFF', textDecoration: "none" }}><p className="HeaderTitle">crat<p style={{display: 'inline', fontFamily: 'Calibri'}}>λ</p>g</p></Link>
  {/* <Link to="/about">Yeah</Link> */}
      {/* SPACE */}<div style={{marginRight: "2%", display: "inline", float: "right", color: "black"}}> - </div>

      {/* FB */}
      {/* <a href="https://www.facebook.com/Cratag-dev-100739675279023"><img 
      className="HeaderButton" src={fb} 
      alt="Fb" style={{height: fbGlow ? "30px" : "25px"}} 
      onMouseEnter={() => setFbGlow(true)} 
      onMouseLeave={() => setFbGlow(false)} />
      </a> */}

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
<center>
  <div style={{margin: heightAsMargin}} className="CenterBodyOuter">
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

function Projects() {
  return <div>
{Header()}
<h1 style={{margin: "20%", color: 'white'}}>PROJECTS</h1>
{Footer()}
</div>;}

function About() {
  function age() {
    var ageDifMs = Date.now() - (new Date("1996-02-17").getTime());
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

  const { height, width } = useWindowDimensions();
  let aboutHeight = height * 0.10
  let aboutBodyWidth = width * 0.25

  return <div style={{flexDirection: 'row'}} >
{Header()}
<div style={{marginTop: aboutHeight}}>
<center>
  <div style={{width: aboutBodyWidth}} 
  className="AboutBodyOff">
Mi nombre es Manuel y tengo {age()} años. Nací y vivo en Argentina al día de hoy.<br/><br/>
Desde pequeño me ha fascinado la PC. Recuerdo usarla desde niño, jugando juegos como Doom, Commandos o Half Life. Con el paso del tiempo y la llegada de la Internet (por lo menos a mi casa) encontré un mundo nuevo, no solo permitiendo relacionarme con otras personas por rudimentario chat al principio y luego chat de voz, sino también acceso casi ilimitado a información.<br/><br/>
Esto sentó las bases de lo que me compone hoy: me considero una persona con mucha determinación. Creo que tenemos a mano las herramientas para cumplir lo que queramos, en tanto nos esforcemos lo suficiente para conseguirlo. Poco de lo que he aprendido a lo largo de mi vida ha sido por educación de calidad, en cambio mi voluntad de aprender y la disposición de esta maravillosa herramienta, que me ha permitido alcanzar muchas de las cosas que quise.<br/><br/>
Es por esta misma razón que me disculpo de antemano cuando encuentren errores dentro del contenido de mi autoría, pero estoy constantemente escarmentando.<br/>

              <div style={{float: 'right'}}><br/><br/>- cratag</div>
</div>

  <div style={{width: aboutBodyWidth}} className="AboutBody">
  My name is Manuel, and I'm {age()} years old. I was born in Argentina, and it is where I live up to day.<br/><br/>

Ever since I was little I have loved the PC. I remember playing with it as a child, playing games like Doom, Commandos or Half Life. Time went by and Internet arrived, bringing me a new world, which not only allowed me to communicate with other people with rudimentary text chat at first and voice chat now, but it also gave me the opportunity to access (almost) unlimited information.<br/><br/>
This sat down the foundations to what makes me be me: I'm a completely determined person. I believe we have near us the tools to achieve everything we want, as long as we make enough efforts for it. I've learned too few from my formal education in comparison to what I've learned from simply willing to, and having at my disposal this beautiful tool that has given me the opportunity to reach many of my goals.<br/><br/>

This is the reason why I apologize in advance for any error you may find within my content, but it is because I am constantly learning from my mistakes.<br/>
              <div style={{float: 'right'}}><br/><br/>- cratag</div>
  </div>

  <div style={{width: aboutBodyWidth}} 
  className="AboutBodyOff">
    Je m’appelle Manuel et j'ai {age()} ans. Je suis née et j'habite à l'Argentine aujourd'hui.<br/><br/>
    Dès que j'ai été très petit j'ai aimé le PC. Je me souviens avoir joué à Doom, Commandos ou Half Life. Avec le temps, Internet était arrivé (chez moi au moins), en apportant avec lui un nouveau monde. Ça m'a permis de me communiquer avec d'autres personnes par texte chat au début et voix chat plus tard, mais pas seulement ça, il m'a permis aussi d'avoir accès illimité à l'information.<br/><br/>
    Cela a jeté les bases de ma personne aujourd'hui: je suis une personne déterminé. Je crois que nous avons près de nous les outils pour obtenir tout ce que nous voulons, si nous faisons des efforts. J'ai appris très peu de l’éducation formelle comparé à ce que j'ai appris par simplement vouloir l'apprendre, en avaient près moi cette outil formidable qui m'a permis d'atteindre plusieurs de mes objectifs.<br/><br/>
    Ceci est la raison pour laquelle je m'excuse d'avance je m'excuse d'avance pour quelques erreurs que vous pouvez trouver dans mes projets, mais c'est parce que j'apprends tout le temps.<br/>
              <div style={{float: 'right'}}><br/><br/>- cratag</div>
  </div>
</center>
</div>
{Footer()}
</div>;}

function Contact() {
  return <div>
{Header()}
<h1 style={{margin: "20%", color: 'white'}}>Contact</h1>
{Footer()}
</div>;}



