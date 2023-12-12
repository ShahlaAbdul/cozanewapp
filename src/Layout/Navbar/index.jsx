import React from 'react';
import './style.scss'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="headContainer">
          <div className="head">
            <div className="headleft">
              <p>Free shipping for standard order over $100</p>
            </div>
            <div className="headRightContainer">
              <div className="headRight">
                <Link className={"headLink1"} to={"/"}>
                  Helps&FAGS
                </Link>
                <Link className={"headLink"} to={"/"}>
                  MyAccount
                </Link>
                <Link className={"headLink"} to={"/"}>
                  En
                </Link>
                <Link className={"headLink"} to={"/"}>
                  USD
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="navbarContainer">
          <div className="navbar">
            <div className="navbarLeftContainer">
              <div className="navbarleftimg">
                <img
                  src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png"
                  alt=""
                />
              </div>
              <div className="navbarLeftAllPages">
                <NavLink to={"/"} className={"page"}>
                  Home
                </NavLink>
                <NavLink to={"/"} className={"page"}>
                  Shop
                </NavLink>
                <NavLink to={"/"} className={"page"}>
                  Features <sup>hot</sup>
                </NavLink>
                <NavLink to={"/"} className={"page"}>
                  Blog
                </NavLink>
                <NavLink to={"/"} className={"page"}>
                  About
                </NavLink>
                <NavLink to={"/"} className={"page"}>
                  Contact
                </NavLink>
              </div>
            </div>

            <div className="navbarRight">
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-magnifying-glass"></i>
              <NavLink
                to={"/wishlist"}><i class="fa-regular fa-heart"></i></NavLink>
                
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
