import '../../App.css';
import React from 'react';

import Carousel from '@brainhubeu/react-carousel';
import '../style.css';

import useWindowDimensions from "../../dimensions"

import gen1 from "../../assets/generadordeseries/0.png"
import gen2 from "../../assets/generadordeseries/1.png"
import gen3 from "../../assets/generadordeseries/2.png"

export default function GeneradorCarousel() {
  const { width } = useWindowDimensions();
  let mobile = false
  if(width < 770){ mobile = false} else {mobile = true}
  return(
  <div>
  {mobile ? (    
    <Carousel arrows > 
    <a href="https://github.com/cratag/GeneradorDeSeries"><img src={gen1} style={{width: "100%"}} alt="Generador de Series carousel"/></a>
    <a href="https://github.com/cratag/GeneradorDeSeries"><img src={gen2} style={{width: "100%"}} alt="Generador de Series carousel"/></a>
    <a href="https://github.com/cratag/GeneradorDeSeries"><img src={gen3} style={{width: "100%"}} alt="Generador de Series carousel"/></a>
  </Carousel>
  ) 
: //mobile
(<div style={{marginBottom: "15%"}}> 
    <Carousel> 
    <a href="https://github.com/cratag/GeneradorDeSeries"><img src={gen1} style={{width: "100%"}} alt="Generador de Series carousel"/></a>
    <a href="https://github.com/cratag/GeneradorDeSeries"><img src={gen2} style={{width: "100%"}} alt="Generador de Series carousel"/></a>
    <a href="https://github.com/cratag/GeneradorDeSeries"><img src={gen3} style={{width: "100%"}} alt="Generador de Series carousel"/></a>
  </Carousel>
</div>)}

</div>
  )};
