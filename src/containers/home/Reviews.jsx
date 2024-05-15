import React from 'react';
import "./reviews.css"
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

import { useContext } from 'react';
import ThemeContext from '../../ThemeContext';

import reviews from "../../assets/reviews.jpg"

const Reviews = () => {

  const { theme } = useContext(ThemeContext);
 
  return (
    <>
  <div className={`review-header ${theme}`}>
    
      <div className="review-container">
        <div className="review-container__left">
        <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="block-title">
          <h2>Discover why our customers love us!</h2>
          </div>
        </div>
        
        <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
            <div className="reviews-flex">
              <img src={reviews} style={{}} className="reviews-img" alt="" />
            </div>
        </div>

        </div>
        
        <div className="review-container__right">
        <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
          <div className="card">
          <FormatQuoteRoundedIcon/>
            <div className="card__content">
              <span><i className="ri-double-quotes-l" /></span>
              <div className="card__details">
                <p>
                We had an exceptional experience at this cafe! The panoramic view of Sarajevo is breathtaking, making it a perfect spot to unwind. Coffee & dessert were really tasty, and the elegant interiors added to the ambiance, making it a delightful place to spend time. Highly recommended for anyone looking for a memorable cafe experience!
                </p>
                <h4>- Neslihan K.</h4>
              </div>
            </div>
          </div>
          <div className="card">
          <FormatQuoteRoundedIcon/>
            <div className="card__content">
              <span><i className="ri-double-quotes-l" /></span>
              <div className="card__details">
                <p>
                Kamarija has a stunning view of the city and I  was thoroughly impressed. The staff was friendly and accommodating, creating a warm and inviting atmosphere. On top of that, the drinks were delicious and offered a refreshing escape from the bustling city below. Overall, I highly recommend this cafe for anyone looking for a nice break with great drinks and a fantastic view.
                </p>
                <h4>- Cemile B</h4>
              </div>
            </div>
          </div>
          <div className="card">
          <FormatQuoteRoundedIcon/>
            <div className="card__content">
              <span><i className="ri-double-quotes-l" /></span>
              <div className="card__details">
                <p>
                I love the atmosphere and view here! What a relaxing place in forest! You feel u are on top of mountain. And I ordered ice cafe late! It was so yummy! Strongly recommend this place as a tourist.
                </p>
                <h4>- Simplyatraveller</h4>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Reviews