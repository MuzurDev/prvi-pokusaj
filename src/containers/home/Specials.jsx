
import React, { useEffect, useRef } from 'react';
import "./specials.css";


// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

//SLIKE
import menu6 from "../../assets/menu/menu6.png"
import menu1 from "../../assets/menu/menu1.jpg"
import menu2 from "../../assets/menu/menu2.jpg"
import menu3 from "../../assets/menu/menu3.png"
import menu4 from "../../assets/menu/menu4.png"
import menu5 from "../../assets/menu/menu5.png"
import zitoslag from "../../assets/menu/zitoslag.jpg"
import Teafor2 from "../../assets/menu/Teafor2.jpg"

const Specials = () => {
  return (
    <>
    
    <div className="special-menu pad-top-150 parallax">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                <h2 className="block-title color-white text-center"> Today's Special </h2>
                <h5 className="title-caption text-center h5responsive">Discover Today's Specials at Our Café </h5>
                </div>
                {/* bgn special-box */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
            <SwiperSlide>
                        <div className="item item-type-zoom">
                        <a href="#" className="item-hover">
                            <div className="item-info">
                            <div className="headline">
                                    CHEESE MIX  
                                <div className="line" />
                                <div className="dit-line">Different types of cheese, such as cream cheese, cottage cheese and cheese powder, together with sugar, eggs, flour, crushed biscuits and butter</div>
                            </div>
                            </div>
                        </a>
                        <div className="item-img">
                            <img src={menu1} />
                        </div>
                        </div>
            </SwiperSlide>
                        <SwiperSlide>
                        <div className="item item-type-zoom">
                        <a href="#" className="item-hover">
                                <div className="item-info">
                                <div className="headline">
                                CEREAL WITH WHIPPED CREAM
                                    <div className="line" />
                                    <div className="dit-line">Wheat flour, sugar, honey</div>
                                </div>
                            </div>
                         </a>
                        <div className="item-img">
                        <div className="direct-img">
                            <img src={zitoslag} className="img-direct"/>
                        </div>

                        </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide><div className="item item-type-zoom">
                        <a href="#" className="item-hover">
                            <div className="item-info">
                            <div className="headline">
                                MACCHIATO
                                <div className="line" />
                                <div className="dit-line">Always a lovely and tasty choice</div>
                            </div>
                            </div>
                        </a>
                        <div className="item-img">
                            <img src={menu3}/>
                        </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="item item-type-zoom">
                        <a href="#" className="item-hover">
                            <div className="item-info">
                            <div className="headline">
                            TEA FOR TWO 600ml
                                <div className="line" />
                                <div className="dit-line">With subtle notes of premium sweeteners - Organic date, palm, coconut sugar, candy sugar, candy sticks</div>
                            </div>
                            </div>
                        </a>
                        <div className="item-img">
                            <img src={Teafor2}/>
                        </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="item item-type-zoom">
                        <a href="#" className="item-hover">
                            <div className="item-info">
                            <div className="headline">
                            Vanilla/Chocolate Cake
                                <div className="line" />
                                <div className="dit-line">Vanilla, Chocolate, Cream, Nuts</div>
                            </div>
                            </div>
                        </a>
                        <div className="item-img">
                            <img src={menu5}/>
                        </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="item item-type-zoom">
                        <a href="#" className="item-hover">
                            <div className="item-info">
                            <div className="headline">
                            BOSNIAN COFFEE
                                <div className="line" />
                                <div className="dit-line">It is prepared from roasted coffee beans, which are then ground into a powder and cooked in a coffee pot.</div>
                            </div>
                            </div>
                        </a>
                        <div className="item-img">
                            <img src={menu6}/>
                        </div>
                        </div></SwiperSlide>
                    </Swiper>
                {/* end special-box */}
            </div>
            {/* end col */}
            </div>
            {/* end row */}
        </div>
        {/* end container */}
        </div>
        {/* end special-menu */}

    </>
  )
}

export default Specials;