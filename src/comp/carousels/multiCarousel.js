import '../../App.css';
import React from 'react';

import Carousel from '@brainhubeu/react-carousel';
import '../style.css';

import useWindowDimensions from "../../dimensions"

import multi0 from "../../assets/multicobertura/0.png"
import multi1 from "../../assets/multicobertura/1.png"
import multi2 from "../../assets/multicobertura/2.png"
import multi3 from "../../assets/multicobertura/3.png"
import multi4 from "../../assets/multicobertura/4.png"
import multi5 from "../../assets/multicobertura/5.png"
import multi6 from "../../assets/multicobertura/6.png"


export default function MultiCarousel(a) {
  const { width } = useWindowDimensions();
  let mobile = false
  if(width < 770){ mobile = false} else {mobile = true}
  return(
  <div>
    {mobile ? (    
    <Carousel arrows > 
    <a href="https://github.com/cratag"><img src={multi0} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
    <a href="https://github.com/cratag"><img src={multi1} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
    <a href="https://github.com/cratag"><img src={multi2} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
    <a href="https://github.com/cratag"><img src={multi3} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
    <a href="https://github.com/cratag"><img src={multi4} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
    <a href="https://github.com/cratag"><img src={multi5} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
    <a href="https://github.com/cratag"><img src={multi6} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
  </Carousel>) 
  : //mobile
  (<Carousel> 
    <a href="https://github.com/cratag"><img src={multi0} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
    <a href="https://github.com/cratag"><img src={multi1} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
    <a href="https://github.com/cratag"><img src={multi2} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
    <a href="https://github.com/cratag"><img src={multi3} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
    <a href="https://github.com/cratag"><img src={multi4} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
    <a href="https://github.com/cratag"><img src={multi5} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
    <a href="https://github.com/cratag"><img src={multi6} style={{width: "100%"}} alt="Multicobertura carousel"/></a>
  </Carousel>)}

  </div>
  )};
