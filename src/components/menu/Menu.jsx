import React from 'react'
import "./menu.css";
import menu1 from "../../assets/menu/menu1.jpg"
import menu2 from "../../assets/menu/menu2.jpg"
import menu3 from "../../assets/menu/menu3.png"

import menu5 from "../../assets/menu/menu5.png"
import menu6 from "../../assets/menu/menu6.png"
import menu7 from "../../assets/menu/menu7.png"
import menu8 from "../../assets/menu/menu8.png"
import menu9 from "../../assets/menu/menu9.png"
import menu10 from "../../assets/menu/menu10.png"
import zitoslag from "../../assets/menu/zitoslag.jpg"
import Teafor2 from "../../assets/menu/Teafor2.jpg"

import nana from "../../assets/menu/nana.jpg"
import Navbar from '../navbar/Navbar';
import { Footer } from '../../containers';
import Specials from '../../containers/home/Specials';

import { useContext } from 'react'
import { Link } from "react-router-dom";

import ThemeContext from '../../ThemeContext';


const GalItem = ({ size, src, id, description }) => {
  const colSize = size === 'small' ? "col-md-4 col-sm-6 co-xs-12" : size === 'large' ? "col-md-8 col-sm-12 co-xs-12" : '';
  return (
    <div className={`${colSize} gal-item`}>
      <div className="box">
        <a href="#" data-toggle="modal" data-target={`#${id}`}>
          <img src={src} alt="" />
        </a>
        <div className="modal fade" id={id} tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
              <div className="modal-body">
                <img src={src} alt="" />
              </div>
              <div className="col-md-12 description">
                <h4>{description}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Menu = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <Specials />
      <div id="menu" style={{ width: "100%" }} className={`gallery-main pad-bottom-100 ${theme}`}>
        <div className="container wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                <h2 className="block-title text-center">
                  Our Menu
                </h2>
                <p className="title-caption text-center">Try the best of our products</p>
              </div>
              <div className="gal-container clearfix">
                <GalItem size='large' src={menu1} id={1} description="CHEESE MIX - Different types of cheese, such as cream cheese, cottage cheese and cheese powder, together with sugar, eggs, flour, crushed biscuits and butter"/>
                <GalItem size='small' src={zitoslag} id={2} description="CEREAL WITH WHIPPED CREAM"/>
                <GalItem size='small' src={menu3} id={3} description="Macchiato - Always a lovely and tasty choice"/>
                <GalItem size='small' src={menu2} id={4} description="CHEESE MIX - Different types of cheese, such as cream cheese, cottage cheese and cheese powder, together with sugar, eggs, flour, crushed biscuits and butter"/>
                <GalItem size='small' src={menu5} id={5} description="VANILLA CAKE - Vanilla, Chocolate, Cream, Nuts"/>
                <GalItem size='small' src={menu6} id={6} description="BOSNIAN COFFEE - It is prepared from roasted coffee beans, which are then ground into a powder and cooked in a coffee pot."/>
                <GalItem size='large' src={menu7} id={7} description="Tea for Two - With subtle notes of premium sweeteners - Organic date, palm, coconut sugar, candy sugar, candy sticks"/>
                <GalItem size='small' src={menu8} id={8} description="Refreshing taste of Cherry"/>
                <GalItem size='small' src={menu9} id={9} description="Latte - Creamy and visually appealing coffee drink with a mild espresso flavor"/>
                <GalItem size='small' src={menu10} id={10} description="Mix it up with Macchiato and Chocolate Cake"/>
                <GalItem size='large' src={Teafor2} id={11} description="Tea For Two"/>
                <GalItem size='small' src={nana} id={12} description="Made from freshly picked mint leaves"/>
              </div>
              {/* end gal-container */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
            <div className="full-menu-container">
            <Link to="https://qrmenu.podrska.ba/menu/59" target="_blank">
                  <button style={{padding:"10px", fontWeight:"bold"}} className="btn btn-send">VIEW FULL MENU</button>
            </Link>
            </div>
        </div>
        {/* end container */}

      </div>
      {/* end gallery-main */}

      <Footer />
    </>
  )
}

export default Menu;