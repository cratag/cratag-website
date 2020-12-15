import React, {useState} from 'react';
import './App.css';
import mail from "./assets/mail.png"
import git from "./assets/git2.png"



export default class App extends React.Component{
  render(){
    
return (
<div>

<div className="Header">
  <div><p className="HeaderTitle">crat<p style={{display: 'inline', fontFamily: 'Calibri'}}>λ</p>g</p><img className="HeaderButton" src={mail} alt="Mail" /><img className="HeaderButton" src={git} alt="git" /></div> 
  
</div>

<div className="Container">
  


  <div className="CenterBody">
  <text className="test"> Hello w2orld</text>
  </div>

</div>
</div>
  );
}
}