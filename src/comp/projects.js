import '../App.css';
import React from 'react';
import Header from "../comp/header.js"
import Footer from "../comp/footer.js"
import useWindowDimensions from "../dimensions"

import Carousel from '@brainhubeu/react-carousel';
import './style.css';

import brbad from "../assets/brbad.png"

export default function Projects() {
const { height } = useWindowDimensions();
let heightAsMargin = height * 0.13
  return <div>
{Header()}
<div style={{marginTop: heightAsMargin}}>
{flipCarousel()}
</div>
{Footer()}
</div>; }

const flipCarousel = () => (
  <Carousel arrows>
    <img src={brbad} alt="alt"/>
    <img src={brbad} alt="alt"/>
    <img src={brbad} alt="alt" />
  </Carousel>
);
