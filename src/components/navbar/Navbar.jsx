import React, { useContext } from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";

//import logo from "../../assets/logo.svg"
import { useState } from 'react';
import DrawerNav from "./DrawerNav"
import kamarijalogobijeli from "../../assets/kamarijalogobijeli.svg"
import NightlightRoundSharpIcon from '@mui/icons-material/NightlightRoundSharp';
import WbSunnyIcon from '@mui/icons-material/WbSunny';




import ThemeContext from '../../ThemeContext';



//BEM -> Block Element Modifier, npr gpt3__navbar-links_logo

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
 
  return (
    <>

   <div className="navbar_container_block">
         <div className="gpt3__navbar">
      <div className="drawer_navbar">
      <DrawerNav
  PaperProps={{
    sx: {
      backgroundColor: "rgba(30, 139, 195, 0.8)"
    }
  }}
/>
      </div>
      
        <div className="gpt3__navbar-links_logo">
        <Link to="/home">
          <img style={{}}  src={kamarijalogobijeli} alt="kamarijalogobijeli" />
        </Link>
        </div>
      <div className="gpt3__navbar-links">

        <div className="gpt3__navbar-links_container">
          <p><Link to="/home">HOME</Link></p>
          <p><Link to="/menu">MENU</Link></p>
          <p><Link to="/gallery">GALLERY</Link></p>
          <p><Link to="/view">VIEW</Link></p>
          <p><Link to="/reserve">RESERVE</Link></p>
        </div>
      </div>
      <div className='dark_mode'>
          <input
            className='dark_mode_input'
            type='checkbox'
            id='darkmode-toggle'
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />
          <label className='dark_mode_label' htmlFor='darkmode-toggle'>
            <WbSunnyIcon />
          </label>
        </div>
{/*       <div className={`navbar ${theme}`}>
          <button onClick={toggleTheme}>
          <NightlightRoundSharpIcon/>
          </button>
       </div> */}
    
    </div>
   </div>
   </>
  );
};

export default Navbar;
