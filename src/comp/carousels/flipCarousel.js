import '../../App.css';
import React from 'react';

import Carousel from '@brainhubeu/react-carousel';
import '../style.css';

import useWindowDimensions from "../../dimensions"

import flip1 from "../../assets/flipacoin/1.png"
import flip2 from "../../assets/flipacoin/2.png"
import flip3 from "../../assets/flipacoin/3.png"
import flip4 from "../../assets/flipacoin/4.png"


export default function FlipCarousel(a) {
  const { width } = useWindowDimensions();
  let mobile = false
  if(width < 770){ mobile = false} else {mobile = true}
  return(
  <div>
  {mobile ? (    
    <Carousel arrows > 
    <a href="https://play.google.com/store/apps/details?id=com.cratag.FlipACoin&hl=es_419&gl=US"><img src={flip1} style={{width: "100%"}} alt="Flip a coin carousel"/></a>
    <a href="https://play.google.com/store/apps/details?id=com.cratag.FlipACoin&hl=es_419&gl=US"><img src={flip2} style={{width: "100%"}} alt="Flip a coin carousel"/></a>
    <a href="https://play.google.com/store/apps/details?id=com.cratag.FlipACoin&hl=es_419&gl=US"><img src={flip3} style={{width: "100%"}} alt="Flip a coin carousel"/></a>
    <a href="https://play.google.com/store/apps/details?id=com.cratag.FlipACoin&hl=es_419&gl=US"><img src={flip4} style={{width: "100%"}} alt="Flip a coin carousel"/></a>
  </Carousel>
  ) 
: //mobile
(<Carousel> 
    <Carousel> 
    <a href="https://play.google.com/store/apps/details?id=com.cratag.FlipACoin&hl=es_419&gl=US"><img src={flip1} style={{width: "100%"}} alt="Flip a coin carousel"/></a>
    <a href="https://play.google.com/store/apps/details?id=com.cratag.FlipACoin&hl=es_419&gl=US"><img src={flip2} style={{width: "100%"}} alt="Flip a coin carousel"/></a>
    <a href="https://play.google.com/store/apps/details?id=com.cratag.FlipACoin&hl=es_419&gl=US"><img src={flip3} style={{width: "100%"}} alt="Flip a coin carousel"/></a>
    <a href="https://play.google.com/store/apps/details?id=com.cratag.FlipACoin&hl=es_419&gl=US"><img src={flip4} style={{width: "100%"}} alt="Flip a coin carousel"/></a>
  </Carousel>
</Carousel>)}

</div>
  )};
