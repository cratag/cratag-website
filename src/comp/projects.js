import '../App.css';
import React from 'react';
import Header from "../comp/header.js"
import Footer from "../comp/footer.js"
import useWindowDimensions from "../dimensions"

import Carousel from '@brainhubeu/react-carousel';
import './style.css';

import flip1 from "../assets/flipacoin/1.png"
import flip2 from "../assets/flipacoin/2.png"
import flip3 from "../assets/flipacoin/3.png"
import flip4 from "../assets/flipacoin/4.png"

export default function Projects() {
const { height, width } = useWindowDimensions();
let heightAsMargin = height * 0.13
let widthSize = width / 1.65
  return <div>
{Header()}
<center style={{marginTop: heightAsMargin}}>
  <div style={{width: widthSize}}>{FlipCarousel()}</div>
</center>
{Footer()}
</div>; }

function FlipCarousel() {
const {width } = useWindowDimensions();
let widthSize = width / 1.77777777
  return(
    <Carousel itemWidth={widthSize} arrows>
    <img src={flip1}  alt="Flip a coin carousel"/>
    <img src={flip2}  alt="Flip a coin carousel"/>
    <img src={flip3}  alt="Flip a coin carousel" />
    <img src={flip4}  alt="Flip a coin carousel" />
  </Carousel>
  )};
