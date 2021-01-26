import '../App.css';
import React from 'react';
import Header from "../comp/header.js"
import Footer from "../comp/footer.js"
import useWindowDimensions from "../dimensions"

import styled, { keyframes } from 'styled-components';
import { shake } from 'react-animations';
import swipe from '../assets/swipe.png'

import './style.css';

import FlipCarousel from "./carousels/flipCarousel"
import MultiCarousel from "./carousels/multiCarousel"

 


export default function Projects() {
const { height, width } = useWindowDimensions();
let heightAsMargin = height * 0.13
let mobile = false
if(width < 770){ mobile = false} else {mobile = true}
// Is the screen big?
// if (width > 1200) {bigScreen = true} else {bigScreen = false}
const Bounce = styled.div`animation: 5s ${keyframes`${shake}`} infinite`;
return <div>
{Header()}
<center style={{marginTop: heightAsMargin}}>
  {/* <p style={{color: "white", fontSize: 50}}>Width: {width}</p> */}
 <div className="Carousel">{MultiCarousel()}</div>
 {mobile ? ("") : (<Bounce><img src={swipe} alt="Swipe"/></Bounce>)}
 <div className="Carousel">{FlipCarousel()}</div>
</center>
{Footer()}
</div>; }

