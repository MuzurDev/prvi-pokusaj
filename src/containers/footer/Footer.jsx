import React from 'react';
import "./footer.css";
import kamarijalogobijeli from "../../assets/kamarijalogobijeli.svg"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div>
  <div className="footer-container">
    {/* end footer-news */}
    <div className="footer-box pad-top-70">
      <div className="container">
        <div className="row">
          <div className="footer-in-main">
            <div className="footer-logo">
              <div className="logo-footer-center">
                <img src={kamarijalogobijeli} sx={{width:"100%"}}/>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="footer-box-a">
                <h3>About Us</h3>
                <p>A cozy café nestled among trees, offering a panoramic view of the cityscape. The café's wooden decor adds a natural charm to the relaxing ambiance.</p>
                <ul className="socials-box footer-socials pull-left">
                  <li>
                  <Link to="https://www.facebook.com/caffeKamarija/?locale=hr_HR" target="_blank">
                    
                      <div className="social-circle-border"><i className="fa  fa-facebook" /></div>
                   
                  </Link>
                  </li>
                  <li>
                  <Link to="https://www.tripadvisor.com/Restaurant_Review-g294450-d8524558-Reviews-Caffe_Kamarija_Point_of_view-Sarajevo_Sarajevo_Canton_Federation_of_Bosnia_and_He.html" target="_blank">
                    
                      <div className="social-circle-border"><i className="fa fa-tripadvisor" /></div>
                   
                  </Link>
                  </li>
                  <li>
                  <Link to="https://g.co/kgs/zL8TsMz" target="_blank">
                    
                      <div className="social-circle-border"><i className="fa fa-google-plus" /></div>
                   
                  </Link>
                  </li>
                  <li>
                  <Link to="https://www.instagram.com/caffe.kamarija/?hl=en" target="_blank">
                    
                      <div className="social-circle-border"><i className="fa fa-instagram" /></div>
                   
                  </Link>
                  </li>
                  <li>
                  <Link to="https://ba.linkedin.com/in/anur-muharemovic-6b8998a7" target="_blank">
                    
                      <div className="social-circle-border"><i className="fa fa-linkedin" /></div>
                   
                    </Link>
                  </li>
                </ul>
              </div>
              {/* end footer-box-a */}
            </div>
            {/* end col */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="footer-box-b">
                <h3>Locate Us</h3>
                <ul>
                  <li>
                  <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11507.01019733588!2d18.4385882!3d43.8609573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8b43308f211%3A0x955a7c0706949d80!2sKamarija!5e0!3m2!1sen!2sba!4v1711536830331!5m2!1sen!2sba"
                    width="170"
                    height="140"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  </li>
                </ul>
              </div>
              {/* end footer-box-b */}
            </div>
            {/* end col */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="footer-box-c">
                <h3>Contact Us</h3>
                <p>
                  <i className="fa fa-map-signs" aria-hidden="true" />
                  <span>Pod bedemom, Sarajevo 71000</span>
                </p>
                <p>
                  <i className="fa fa-mobile" aria-hidden="true" />
                  <span>
                    +387 62 546 496
                  </span>
                </p>
                <p>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span><a href="#">caffe.kamarija@gmail.com</a></span>
                </p>
              </div>
              {/* end footer-box-c */}
            </div>
            {/* end col */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="footer-box-d">
                <h3>Opening Hours</h3>
                <ul>
                  <li>
                    <p>Monday - Thursday </p>
                    <span> 08:00 AM - 12:00 PM</span>
                  </li>
                  <li>
                    <p>Friday - Saturday </p>
                    <span>  08:00 AM - 12:00 PM</span>
                  </li>
                </ul>
              </div>
              {/* end footer-box-d */}
            </div>
            {/* end col */}
          </div>
          {/* end footer-in-main */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
      <div id="copyright" className="copyright-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h6 className="copy-title"> Copyright © 2024 Kamarija Point of View is powered by  <Link to="https://ba.linkedin.com/in/anur-muharemovic-6b8998a7" target="_blank" style={{color:"burlywood"}}>muzur dev</Link> </h6>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end copyright-main */}
    </div>
    {/* end footer-box */}
  </div>
  {/* end footer-main */}
  <a href="#" className="scrollup" style={{display: 'none'}}>Scroll</a>
</div>

    </>
  )
}

export default Footer