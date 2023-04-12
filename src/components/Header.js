import React from "react";
import { Link } from "react-router-dom";
import {useState } from "react";
import { HashLink } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const _toggleSidebar = () => {
    setMenuActive(!menuActive);
  };
  AOS.init();
  return (
    <>
      <header className="header-mobile" id="home">
        <div className="nav-left">
          <Link to="/">
            <div className="nav-logo">
              <img src="./images/logo.png" alt="" />
            </div>
          </Link>
        </div>
        <button className="hum-btn" onClick={_toggleSidebar} id="burger-menu">
          <img
            src={`images/${menuActive ? "x" : "burger-menu"}.svg`}
            alt="Menu"
          />{" "}
        </button>

        <nav id="mobile-nav" className={`${menuActive ? "hidden" : ""} `}>
          <HashLink to="/">
            <a
              onClick={_toggleSidebar}
              href="/"
              className="active-nav nav-link mobile-link"
            >
              Home{" "}
            </a>
          </HashLink>

          <HashLink to="/#course">
            <a
              onClick={_toggleSidebar}
              href=""
              className="nav-link mobile-link"
            >
             Course
            </a>
          </HashLink>
          <HashLink to="/#customer">
            <a
              onClick={_toggleSidebar}
              href="#virtual"
              className="nav-link mobile-link"
            >
           Customer
            </a>
          </HashLink>
          <HashLink to="/#about">
            <a
              onClick={_toggleSidebar}
              href="#remote"
              className="nav-link mobile-link"
            >
             About
            </a>
          </HashLink>
          <HashLink to="/#community">
            <a
              onClick={_toggleSidebar}
              href="#cummunity"
              className="nav-link mobile-link"
            >
           Community
            </a>
          </HashLink>
          {/* <div className="header-link-mobile">
            <div className="social-mob">
            <a href="https://pentonium.medium.com/" target={"_blank"}>
     
     <img src="./images/medium.png" alt="" />
   </a>
   <a href="https://twitter.com/pentonium_ptm" target={"_blank"}>

     <img src="./images/twitter-logo.png" alt="" />
   </a>
   <a href="" target={"_blank"}>
     <img src="./images/discord-logo.png" alt="" />
   </a>
            </div>
          </div> */}
             <div className="nav-right-btn-moblie">
          <Link to="/">
          <img src="./images/join-now-btn-bg.png" alt="" />
              <div className="join-btn-text">
              <span>Join Now</span>
              </div>
          </Link>
        </div>
        </nav>
      </header>

      <header>
        <div className="nav-left">
          <Link to="/">
            {" "}
            <div className="nav-logo">
              <img src="./images/logo.png" alt="" />
            </div>{" "}
          </Link>
        </div>
        <div className="nav-right-btn">
          <Link to="/">
          <img src="./images/join-now-btn-bg.png" alt="" />
              <div className="join-btn-text">
              <span>Join Now</span>
              </div>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
