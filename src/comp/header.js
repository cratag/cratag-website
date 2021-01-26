import '../App.css';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import Home from "../App"
import mail from "../assets/mail.png"
import git from "../assets/git.png"
import fb from "../assets/fb.png"
import ig from "../assets/ig.png"
import logo from "../assets/1.png"

import useWindowDimensions from "../dimensions"

// HEADER
export default function Header(){
<Router>
    <div>
    <Switch>
        <Route path="/">
        <Home />
        </Route>
    </Switch>
    </div>
</Router>
  const { width } = useWindowDimensions();
  let mobile = false
  if(width < 400){ mobile = false} else {mobile = true}


return <div className="Header">
{/* HEADER */}
{mobile ? (<div>
{/* <Link to="/" style={{ color: '#FFF', textDecoration: "none" }}><p className="HeaderTitle">crat<p style={{display: 'inline', fontFamily: 'Calibri'}}>λ</p>g</p></Link> */}
<Link to="/"><img style={{ marginTop: 10, height: 50}} src={logo} alt="Logo"></img></Link>
    {/* MAIL */}
    <a href="mailto:devcratag@gmail.com"><img 
    className="HeaderButton" style={{marginRight: "2%"}}src={mail} 
    alt="Mail"/></a>

    {/* FB */}
    <a href="https://www.facebook.com/Cratag-dev-100739675279023"><img 
    className="HeaderButton" src={fb} 
    alt="Fb" /></a>

    {/* IG */}
    <a href="https://www.instagram.com/devcratag/"><img 
    className="HeaderButton" src={ig} 
    alt="Instagram" /></a>

    {/* GIT */}
    <a href="https://www.github.com/cratag"><img 
    className="HeaderButton" src={git} 
    alt="Git"/></a>
</div>) 
: //////////////////////////////////MOBILE↓
(<div>
    {/* <Link to="/" style={{ color: '#FFF', textDecoration: "none" }}><p className="HeaderTitle">crat<p style={{display: 'inline', fontFamily: 'Calibri'}}>λ</p>g</p></Link> */}
    <Link to="/"><img style={{ marginTop: 10, height: 40}} src={logo} alt="Logo"></img></Link>
        {/* MAIL */}
        <a href="mailto:devcratag@gmail.com">
            <img className="HeaderButton" 
            style={{marginRight: "2%", height: 30}}src={mail} 
            alt="Mail"/>
        </a>
    
        {/* FB */}
        <a href="https://www.facebook.com/Cratag-dev-100739675279023">
        <img className="HeaderButton" src={fb} 
        style={{height: 30}}
        alt="Fb" />
        </a>
    
        {/* IG */}
        <a href="https://www.instagram.com/devcratag/">
        <img className="HeaderButton" src={ig} 
        style={{height: 30}}
        alt="Instagram" />
        </a>
    
        {/* GIT */}
        <a href="https://www.github.com/cratag">
        <img className="HeaderButton" src={git}
        style={{height: 30}}
        alt="Git"/>
        </a>
    </div>)}
{/* HEADER END */}
</div>
}
// HEADER END
