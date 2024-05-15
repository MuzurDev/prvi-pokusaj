
import React, { Component } from 'react'
import { useContext } from 'react'


import ThemeContext from '../../ThemeContext';

/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import locomotiveScroll from 'locomotive-scroll'; */
import "./gallery.css"
import udarna1 from "../../assets/udarna1.jpg"
import changeyourpointofview4 from "../../assets/changeyourpointofview4.jpg"
import udarna3 from "../../assets/udarna3.png"

import { Navbar } from '../../components'
import Footer from '../footer/Footer'

import gallery0 from "../../assets/gallery0.jpg"
import front3 from "../../assets/front3.jpg"
import gallery2 from "../../assets/gallery2.jpg"
import gallery3 from "../../assets/gallery3.jpg"
import gallery4 from "../../assets/gallery4.jpg"
import gallery5 from "../../assets/gallery5.jpg"
import gallery6 from "../../assets/gallery6.jpg"
import gallery7 from "../../assets/gallery7.jpg"
import gallery8 from "../../assets/gallery8.jpg"
import gallery9 from "../../assets/gallery9.jpg"
import gallery10 from "../../assets/gallery10.jpg"




const Gallery = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar/>

      <div className={`container-gallery ${theme}`}>
        <div className="gallery">
          <img src={front3} alt="front3"/>
          <img src={changeyourpointofview4} alt="cypov4"/>
          <img src={gallery3} alt="gallery3"/>
          <img src={gallery0} alt="gallery0"/>
        </div>
        <div className="gallery">
          <img src={udarna1} alt="udarna1"/>
          <img src={gallery2} alt="gallery2"/>
          <img src={udarna3} alt="udarna3"/>
          <img src={gallery4} alt="gallery4"/>
        </div>
        <div className="gallery">
          <img src={gallery5} alt="gallery5"/>
          <img src={gallery6} alt="gallery6"/>
          <img src={gallery7} alt="gallery7"/>
          <img src={gallery8} alt="gallery8"/>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Gallery;


{/* 
      <div className='main bg1'>
        <div className="image-container">
           <img src={udarna1} style={{}} />
        </div>
        <div className="block-title">
            Join us for a best coffee view
        </div>
      </div>
      <div className='main bg2'>
      <div className="image-container">
           <img src={udarna2} style={{}} />
        </div>
        <div className="block-title">
            Elevate Your Experience
        </div>
      </div>
      <div className='main bg3'>
      <div className="image-container">
           <img src={udarna3} style={{}} />
        </div>
        <div className="block-title">
            Rise above with a Cup
        </div>
      </div>
      <div className='main bg4'>
      <div className="image-container">
           <img src={udarna4} style={{}} />
        </div>
        <div className="block-title">
            Soak in the Skyline
        </div>
      </div> */}