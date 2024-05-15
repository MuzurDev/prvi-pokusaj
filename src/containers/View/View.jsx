import React, { useEffect, useRef } from 'react';
import "./view.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Uključivanje ScrollTrigger-a

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import changeyourpointofview1 from "../../assets/changeyourpointofview1.jpg";
import changeyourpointofview2 from "../../assets/changeyourpointofview2.jpg";
import changeyourpointofview3 from "../../assets/changeyourpointofview3.jpg";
import view1 from "../../assets/view1.jpg"
import { Navbar } from '../../components';
import Footer from '../footer/Footer';

import auto1 from "../../assets/auto1.jpg"
import auto2 from "../../assets/auto2.jpg"
import auto3 from "../../assets/auto3.png"
import auto4 from "../../assets/auto4.jpg"

import view2 from "../../assets/view2.jpg"
import view3 from "../../assets/view3.jpg"
import view4 from "../../assets/view4.jpg"
import view5 from "../../assets/view5.jpg"
import view6 from "../../assets/view6.jpg"
import view7 from "../../assets/view7.jpg"
import view8 from "../../assets/view8.jpg"

import grad from "../../assets/grad.png"
import grad2 from "../../assets/grad2.jpg"

import { useContext } from 'react';
import ThemeContext from '../../ThemeContext';

const View = () => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Registracija ScrollTrigger-a

    gsap.fromTo('.fadeInLeft1', {
      left: -500,
      opacity: 0,
      position: 'relative',
    }, {
      opacity: 1,
      left: 0,
      scrollTrigger: {
        trigger: '.fadeInLeft1',
        start: 'top 80%',
      },
    });

    gsap.fromTo('.fadeInLeft2', {
      left: -500,
      opacity: 0,
      position: 'relative',
    }, {
      opacity: 1,
      left: 0,
      scrollTrigger: {
        trigger: '.fadeInLeft2',
        start: 'top 80%',
      },
    });

    gsap.fromTo('.fadeInRight1', {
      right: -500,
      opacity: 0,
      position: 'relative',
    }, {
      opacity: 1,
      right: 0,
      scrollTrigger: {
        trigger: '.fadeInRight1',
        start: 'top 80%',
      },
    });

    gsap.fromTo('.fadeInRight2', {
      right: -500,
      opacity: 0,
      position: 'relative',
    }, {
      opacity: 1,
      right: 0,
      scrollTrigger: {
        trigger: '.fadeInRight2',
        start: 'top 80%',
      },
    });

  }, []);

  var settings = {
    dots: true,
    fade: true,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1, // Promijenjeno na 1
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000, // Prilagođeno za veći broj slajdova
    cssEase: "ease-in-out", // Promijenjeno
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1 // Promijenjeno na 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1 // Promijenjeno na 1
        }
      }
    ]
  };
  const settings3 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: -1, // Promijenjeno na 1
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000, // Prilagođeno za veći broj slajdova
    cssEase: "ease-in-out", // Promijenjeno
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1 // Promijenjeno na 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1 // Promijenjeno na 1
        }
      }
    ]
  };

  return (
    <div className={`view-container ${theme}`}>
      <Navbar />
      <div style={{ paddingBottom: "30px" }}>


        <Slider {...settings}>
          <div className='slider-img-container'>

            <img src={changeyourpointofview1} alt="" />
          </div>
          <div className='slider-img-container'>

            <img src={changeyourpointofview2} alt="" />
          </div>
          <div className='slider-img-container'>

            <img src={changeyourpointofview3} alt="" />
          </div>
          <div className='slider-img-container'>

            <img src={view1} alt="" />
          </div>
        </Slider>
      </div>
      <div className="second-view-container">
        <h3 className='block-title'>Change your point of view</h3>
        <Slider {...settings2}>
          <div className='slider-img-container'>

            <img src={auto1} alt="" />
          </div>
          <div className='slider-img-container'>

            <img src={auto2} alt="" />
          </div>
          <div className='slider-img-container'>

            <img src={auto3} alt="" />
          </div>
          <div className='slider-img-container'>

            <img src={auto4} alt="" />
          </div>

        </Slider>
      </div>

      <div className="third-view-container">
        <h3 className='block-title'>Soak in the Skyline</h3>
        <Slider {...settings3}>
          <div className='slider-img-container'>

            <img src={view2} alt="" />
          </div>
          <div className='slider-img-container'>

            <img src={view3} alt="" />
          </div>
          <div className='slider-img-container'>

            <img src={view4} alt="" />
          </div>
          <div className='slider-img-container'>

            <img src={view5} alt="" />
          </div>
          <div className='slider-img-container'>

            <img src={view6} alt="" />
          </div>
          <div className='slider-img-container'>

            <img src={view7} alt="" />
          </div>
          <div className='slider-img-container'>

            <img src={view8} alt="" />
          </div>

        </Slider>
      </div>

      <div className="fourth-view-container">

        <div className="fourth-flex">
          <div className='fourth-text-center fadeInLeft fadeInLeft1'>
            <h3 className="block-title pdl-15">Soak in the Skyline</h3>
          </div>
          <div className="fourth-flex-img fadeInRight fadeInRight1">
            <img src={grad} alt="" />
          </div>
        </div>

        <div className="fourth-flex">
          <div className="fourth-flex-img">
            <img src={grad2} alt="" className='fadeInLeft fadeInLeft2' />
          </div>
          <div className='fourth-text-center'>
            <h3 className="block-title  pdl-15 fadeInRight fadeInRight2">Elevate Your Experience</h3>
          </div>
        </div>

      </div>


      <Footer />
    </div>
  )
}

export default View;

/* Soak in the Skyline
Rise above with a Cup
Elevate Your Experience */