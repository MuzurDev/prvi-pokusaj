import React from 'react'
import "./reserve.css";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../footer/Footer';
import { Link } from "react-router-dom";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



import rezervacija from "../../assets/rezervacija/rezervacija.png"
import rezervacijajedan from "../../assets/rezervacija/rezervacijajedan.jpg"
import rezervacijadva from "../../assets/rezervacija/rezervacijadva.png"
import rezervacijatri from "../../assets/rezervacija/rezervacijatri.png"
import rezervacije4 from "../../assets/rezervacija/rezervacije4.jpg"
import rezervacije5 from "../../assets/rezervacija/rezervacije5.jpg"
import locatetabla from "../../assets/locatetabla.jpg"

import { useContext } from 'react';
import ThemeContext from '../../ThemeContext';

export default function Reserve(){
  const { theme } = useContext(ThemeContext);

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
  return (
  <>
    <Navbar/>

<section className={`ftco-section ${theme}`}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center mb-5">
        <h2 className="heading-section block-title">Reservation</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="wrapper">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="contact-wrap w-100 p-md-5 p-4 text-center white-text-color">
                <h3 className='white-text-color'>Contact us</h3>
                <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                <div id="form-message-warning" className="mb-4" /> 
                <div id="form-message-success" className="mb-4">
                  Your message was sent, thank you!
                </div>
                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="text">
                        <p style={{whiteSpace:"nowrap"}}><span>Address:</span> Pod bedemom bb</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="text">
                        <p><span>Email:</span> <a href="mailto:caffe.kamarija@gmail.com">caffe.kamarija@gmail.com</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="text">
                        <p><span>Phone:</span> <a href="tel://38762546496">+387 62 546 496</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <form method="POST" id="contactForm" name="contactForm" className="contactForm" action="https://formsubmit.co/muzurovicmustafa@gmail.com">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-12"> 
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Create a message here" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="submit" defaultValue="Send Message" className="btn-send btn" />
                        <div className="submitting" />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="w-100 social-media mt-5">
                  <h3>Follow us here</h3>

                    <div  className='flex-reserve'>
                  <div className='flex-reserve'>
                  <div>
                  <Link to="https://www.facebook.com/caffeKamarija/?locale=hr_HR" target="_blank">
                  
                      <div className="social-circle-border"><i className="fa  fa-facebook" /></div>
                    
                  </Link>
                  </div>
                  <div>
                  <Link to="https://www.tripadvisor.com/Restaurant_Review-g294450-d8524558-Reviews-Caffe_Kamarija_Point_of_view-Sarajevo_Sarajevo_Canton_Federation_of_Bosnia_and_He.html" target="_blank">
                  
                      <div className="social-circle-border"><i className="fa fa-tripadvisor" /></div>
                    
                  </Link>
                  </div>
                  <div>
                  <Link to="https://g.co/kgs/zL8TsMz" target="_blank">
                  
                      <div className="social-circle-border"><i className="fa fa-google-plus" /></div>
                    
                  </Link>
                  </div>
                  <div>
                  <Link to="https://www.instagram.com/caffe.kamarija/?hl=en" target="_blank">
                  
                      <div className="social-circle-border"><i className="fa fa-instagram" /></div>
                    
                  </Link>
                  </div>
                  <div>
                  <Link to="https://ba.linkedin.com/in/anur-muharemovic-6b8998a7" target="_blank">
                  
                      <div className="social-circle-border"><i className="fa fa-linkedin" /></div>
                    
                    </Link>
                  </div>
                </div>
                                      
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-stretch">
              <div className="reservation-slider-container">

              <Slider {...settings}>
                <div className='slider-img-container'>

                  <img src={rezervacijadva} alt="" />
                </div>
                <div className='slider-img-container'>

                <img src={locatetabla} alt="" />
                </div>
                <div className='slider-img-container'>

                   <img src={rezervacija} alt="" />
                </div>
                <div className='slider-img-container'>

                  <img src={rezervacijajedan} alt="" />
                </div>
                <div className='slider-img-container'>

                  <img src={rezervacijatri} alt="" />
                </div>
                <div className='slider-img-container'>

                <img src={rezervacije4} alt="" />
                </div>
                <div className='slider-img-container'>

                <img src={rezervacije5} alt="" />
                </div>
              </Slider>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <Footer/>
  </>
  )
}

