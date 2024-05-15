import React, { useEffect, useRef, useContext } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./home.css";
import Specials from "./Specials";
import Reviews from "./Reviews";
import kamarijalogobijeli from "../../assets/kamarijalogobijeli.svg";
import image9 from "../../assets/image9.jpg";
import aboutus1 from "../../assets/aboutus1.jpg"
import video from "../../assets/video.mp4";
import ThemeContext from '../../ThemeContext';




gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        gsap.to(".blur-section", {
            scrollTrigger: {
                trigger: ".scroll-trigger",
                start: "top center",
                end: "bottom top",
                scrub: true,
                onUpdate: self => {
                    const blurValue = self.direction === -1 ? "blur(30px)" : "blur(0px)";
                    gsap.set(".blur-section", { filter: blurValue });
                },
                
            },
            opacity: 1,
        });
    }, []);
    
    

    const container = useRef();

    useGSAP(() => {
        gsap.to(".slika1", { opacity: 1, y: 20, duration: 2 });
    }, { scope: container });

    return (
        <>
            <div className='header-container' id="home">
                <div ref={container} className="novi-pokusaj">
                    <img src={kamarijalogobijeli} className="slika1" style={{ opacity: "0.3" }} alt="" />
                </div> 
            </div>

            <div  style={{ width: "100%" }} className={`about-main pad-top-100 ${theme}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                                <h2 className="block-title "> About Us </h2>
                                <h3 className=''>Simply the best coffee view, if you're in love with this city!</h3>
                                <p className=''> Kamarija Point of View is a unique spot in the old part of town where you can enjoy a panoramic view of Sarajevo.</p>
                                <p className=''>Regardless of the season, the view of Sarajevo is always fascinating, and the fact that you can enjoy your favorite drink while spending some nice and relaxing moments with loved ones, friends or family, makes this vantage point a must-see place.</p>
                                <p className=''>Kamarija offers a choice of seating on two levels, with outdoor and indoor sections. Both the interior furnishings and surrounding features make use of wood and stone elements, a combination which complements the natural setting with its many trees.</p>
                                <p className=''>Kamarija Point of View is not far from Žuta Tabija, a city attraction that is located on the street that passes below the well-known Jajce Barracks, which were featured in the cult film, Valter Brani Sarajevo (Walter Defends Sarajevo).</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="about-images">
                                    <img className="about-main"  src={aboutus1} alt="About Main Image" />
                                    <img className="about-inset" src={image9} alt="About Inset Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`blur-section ${theme}`}>
                 <div className="blur-background scroll-trigger">
                 
                    <div className="video-container"> 
                        <video src={video} autoPlay loop muted></video>
                    </div>
                    </div>
                
            </div>
            <Specials />
            <Reviews />
        </>
    );
}

export default Home;
