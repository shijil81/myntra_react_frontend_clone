import React from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faUser,faHeart,faBagShopping } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <>
    <div className='row nav_main'>
      <div className='col-12'>
          <div className="navbar">
          <div className="navbar-logo ms-4">
            <img src="/logos/logo.png" alt="Logo" width={'100%'}/>
          </div>
          <div className="navbar-links ">
            <a href="#men">MEN</a>
            <a href="#women">WOMEN</a>
            <a href="#kids">KIDS</a>
            <a href="#home-living">HOME & LIVING</a>
            <a href="#beauty">BEAUTY</a>
            <a href="#studio">STUDIO<sup className="new-badge">NEW</sup></a>
          </div>
          <div className="navbar-search">
          <button className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} style={{color:'gray'}}/></button>
            <input type="text" placeholder="Search for products, brands and more" />
           
          </div>
          <div className='d-flex align-items-center justify-content-center mt-2'>
            <div className='text-center me-3 icon'>
              <FontAwesomeIcon icon={faUser} />
              <p>Profile</p>
            </div>
            <div className='text-center me-3 icon'>
            <FontAwesomeIcon icon={faHeart} />
              <p>Wishlist
              </p>
            </div>
            <div className='text-center me-3 icon'>
            <FontAwesomeIcon icon={faBagShopping} />
              <p>Bag</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
