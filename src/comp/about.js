import '../App.css';

import React from 'react';
import Header from "../comp/header.js"
import Footer from "../comp/footer.js"
import useWindowDimensions from "../dimensions"

import mailendg from "../assets/mailendg.png"
export default function About() {
function age() {
    var ageDifMs = Date.now() - (new Date("1996-02-17").getTime());
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const { height, width } = useWindowDimensions();
let aboutHeight = height * 0.15
let aboutBodyWidth = width * 0.25
let mobile = false
if(width < 770){ mobile = false} else {mobile = true}

return <div style={{flexDirection: 'row'}} >
{Header()}
<div>
    <center>
        {mobile ? (<div>
            <div style={{width: aboutBodyWidth, marginTop: aboutHeight, verticalAlign: "top"}} 
            className="AboutBodyOff">
            Mi nombre es Manuel y tengo {age()} años. Nací y vivo en Argentina al día de hoy.<br/><br/>
            Desde pequeño me ha fascinado la PC. Recuerdo usarla desde niño, jugando juegos como Doom, Commandos o Half Life. Con el paso del tiempo y la llegada de la Internet (por lo menos a mi casa) encontré un mundo nuevo, no solo me permitió comunicarme con todo el mundo, sino también acceso casi ilimitado a información.<br/><br/>
            Esto sentó las bases de lo que me compone hoy: me considero una persona con mucha determinación. Creo que tenemos a mano las herramientas para cumplir lo que queramos, en tanto nos esforcemos lo suficiente para conseguirlo. Poco de lo que he aprendido a lo largo de mi vida ha sido por educación de calidad, en cambio mi voluntad de aprender y la disposición de esta maravillosa herramienta, que me ha permitido alcanzar muchas de las cosas que quise.<br/><br/>
            Es por esta misma razón que me disculpo de antemano cuando encuentren errores dentro de mi contenido, pero estoy constantemente escarmentando.<br/>

            <div style={{float: 'right'}}><br/><br/>- cratag</div>
            </div>

            <div style={{width: aboutBodyWidth, marginTop: aboutHeight}} className="AboutBody">
            My name is Manuel, and I'm {age()} years old. I was born in Argentina, and it is where I live up to day.<br/><br/>

            Ever since I was little I have loved the PC. I remember playing with it as a child, playing games like Doom, Commandos or Half Life. Time went by and Internet arrived, bringing me a new world. Not only allowed me to communicate with people all around the world, but it also gave me the opportunity to access (almost) unlimited information.<br/><br/>
            This sat down the foundations to what makes me be me: I'm a completely determined person. I believe we have near us the tools to achieve everything we want, as long as we make enough efforts for it. I've learned too few from my formal education in comparison to what I've learned from simply willing to, and having at my disposal this beautiful tool that has given me the opportunity to reach many of my goals.<br/><br/>

            This is the reason why I apologize in advance for any error you may find within my content, but it is because I am constantly learning from my mistakes.<br/>
                        <div style={{float: 'right'}}><br/><br/>- cratag</div>
            </div>

            <div style={{width: aboutBodyWidth, marginTop: aboutHeight,  verticalAlign: "top"}} 
            className="AboutBodyOff">
                Je m’appelle Manuel et j'ai {age()} ans. Je suis née et j'habite à l'Argentine aujourd'hui.<br/><br/>
                Dès que j'ai été très petit j'ai aimé le PC. Je me souviens avoir joué à Doom, Commandos ou Half Life. Avec le temps, Internet était arrivé (chez moi au moins), en apportant avec lui un nouveau monde. Ça m'a permis de me communiquer avec tout le monde, mais pas seulement ça, il m'a permis aussi d'avoir accès illimité à l'information.<br/><br/>
                Cela a jeté les bases de ma personne aujourd'hui: je suis une personne déterminé. Je crois que nous avons près de nous les outils pour obtenir tout ce que nous voulons, si nous faisons des efforts. J'ai appris très peu de l’éducation formelle comparé à ce que j'ai appris par simplement vouloir l'apprendre, en avaient près moi cette outil formidable qui m'a permis d'atteindre plusieurs de mes objectifs.<br/><br/>
                Ceci est la raison pour laquelle je m'excuse d'avance je m'excuse d'avance pour quelques erreurs que vous pouvez trouver dans mes projets, mais c'est parce que j'apprends tout le temps.<br/>
                        <div style={{float: 'right'}}><br/><br/>- cratag</div>
            </div>
        </div>) 
        : ///////////////////////////////////////MOBILE↓
        (<div>
            <div style={{width: "80%", marginTop: "20%"}} className="AboutBodyMobile">
            My name is Manuel, and I'm {age()} years old. I was born in Argentina, and it is where I live up to day.<br/><br/>

            Ever since I was little I have loved the PC. I remember playing with it as a child, playing games like Doom, Commandos or Half Life. Time went by and Internet arrived, bringing me a new world. Not only allowed me to communicate with people all around the world, but it also gave me the opportunity to access (almost) unlimited information.<br/><br/>
            This sat down the foundations to what makes me be me: I'm a completely determined person. I believe we have near us the tools to achieve everything we want, as long as we make enough efforts for it. I've learned too few from my formal education in comparison to what I've learned from simply willing to, and having at my disposal this beautiful tool that has given me the opportunity to reach many of my goals.<br/><br/>

            This is the reason why I apologize in advance for any error you may find within my content, but it is because I am constantly learning from my mistakes.<br/>
            </div>

            <div style={{width: "80%", marginTop: "5%",}} 
            className="AboutBodyOffMobile">
            Mi nombre es Manuel y tengo {age()} años. Nací y vivo en Argentina al día de hoy.<br/><br/>
            Desde pequeño me ha fascinado la PC. Recuerdo usarla desde niño, jugando juegos como Doom, Commandos o Half Life. Con el paso del tiempo y la llegada de la Internet (por lo menos a mi casa) encontré un mundo nuevo, no solo me permitió comunicarme con todo el mundo, sino también acceso casi ilimitado a información.<br/><br/>
            Esto sentó las bases de lo que me compone hoy: me considero una persona con mucha determinación. Creo que tenemos a mano las herramientas para cumplir lo que queramos, en tanto nos esforcemos lo suficiente para conseguirlo. Poco de lo que he aprendido a lo largo de mi vida ha sido por educación de calidad, en cambio mi voluntad de aprender y la disposición de esta maravillosa herramienta, que me ha permitido alcanzar muchas de las cosas que quise.<br/><br/>
            Es por esta misma razón que me disculpo de antemano cuando encuentren errores dentro de mi contenido, pero estoy constantemente escarmentando.<br/>
            </div>

            <div style={{width: "80%", marginTop: "5%", }} 
            className="AboutBodyOffMobile">
                Je m’appelle Manuel et j'ai {age()} ans. Je suis née et j'habite à l'Argentine aujourd'hui.<br/><br/>
                Dès que j'ai été très petit j'ai aimé le PC. Je me souviens avoir joué à Doom, Commandos ou Half Life. Avec le temps, Internet était arrivé (chez moi au moins), en apportant avec lui un nouveau monde. Ça m'a permis de me communiquer avec tout le monde, mais pas seulement ça, il m'a permis aussi d'avoir accès illimité à l'information.<br/><br/>
                Cela a jeté les bases de ma personne aujourd'hui: je suis une personne déterminé. Je crois que nous avons près de nous les outils pour obtenir tout ce que nous voulons, si nous faisons des efforts. J'ai appris très peu de l’éducation formelle comparé à ce que j'ai appris par simplement vouloir l'apprendre, en avaient près moi cette outil formidable qui m'a permis d'atteindre plusieurs de mes objectifs.<br/><br/>
                Ceci est la raison pour laquelle je m'excuse d'avance je m'excuse d'avance pour quelques erreurs que vous pouvez trouver dans mes projets, mais c'est parce que j'apprends tout le temps.<br/>
            </div>
        </div>)}
    </center>
    <center>
        {mobile ? 
        (
            <div className="AboutBody" style={{marginBottom: "5%"}}>
                <a style={{ color: '#FFF', textDecoration: "none", display: 'inline-block', }} 
                href="https://www.instagram.com/mailendg/">Special thanks to my Graphic Designer and my special one, <div style={{fontWeight: "bold", display: 'inline-block', }}>mailendg</div>
                <img src={mailendg}  style={{display: 'inline-block'}}alt="IG mailendg"/>
                </a>
            </div>)
        :
        (
            <div className="AboutBody" style={{margin: "5%", marginBottom: "15%"}}>
                <a style={{ color: '#FFF', textDecoration: "none", display: 'inline-block'}} 
                href="https://www.instagram.com/mailendg/">Special thanks to my Graphic Designer and my special one, <div style={{fontWeight: "bold", display: 'inline-block', }}>mailendg</div>
                <img src={mailendg}  style={{display: 'inline-block'}}alt="IG mailendg"/>
                </a>
            </div>)
        }

    </center>
    <div style={{marginBottom: "1%"}}/>
</div>
{Footer()}
</div>;}
