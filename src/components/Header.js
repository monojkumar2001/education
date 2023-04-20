import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const _toggleSidebar = () => {
    setMenuActive(!menuActive);
  };
  AOS.init();

  const wallet = useWallet();

  return (
    <>
      <header className="header-mobile" id="home">
        <div className="nav-left">
          <Link to="/">
            <div className="nav-logo">
              <img src="/images/logo.svg" alt="" />
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
          <HashLink to="/" onClick={_toggleSidebar}>
            Home
          </HashLink>
          <HashLink to="/#class" onClick={_toggleSidebar}>
            Master Class
          </HashLink>
          <HashLink to="/#about" onClick={_toggleSidebar}>
            About
          </HashLink>
          <HashLink to="/#course" onClick={_toggleSidebar}>
            Course
          </HashLink>
          <HashLink to="/#customer" onClick={_toggleSidebar}>
            Testimonial
          </HashLink>
          {/* <div className="nav-right-btn-moblie">
            <Link to="/">
              <img src="/images/join-now-btn-bg.png" alt="" />
              <div className="join-btn-text">
                <span>Join Now</span>
              </div>
            </Link>
          </div> */}
          {wallet.connected ? <WalletDisconnectButton /> : <WalletMultiButton />}
        </nav>

      </header>

      <header >
        <nav>
          <div className="nav-left-logo">
            <Link to="/">
              {" "}
              <div className="nav-logos">
                <img src="/images/logo.svg" alt="" />
              </div>{" "}
            </Link>
          </div>
          <div className="nav-right-site">
            <div className="nav-item">
              <HashLink to="/">
                <a
                  onClick={_toggleSidebar}
                  href="/"
                  className="active-nav nav-link mobile-link"
                >
                  Home{" "}
                </a>
              </HashLink>
              <HashLink to="/#class">
                <a
                  onClick={_toggleSidebar}
                  href="#class"
                  className="nav-link mobile-link"
                >
                  Master Class
                </a>
              </HashLink>
              <HashLink to="/#about">
                <a
                  onClick={_toggleSidebar}
                  href="#about"
                  className="nav-link mobile-link"
                >
                  About
                </a>
              </HashLink>
              <HashLink to="/#course">
                <a
                  onClick={_toggleSidebar}
                  href="#course"
                  className="nav-link mobile-link"
                >
                  Course
                </a>
              </HashLink>
              <HashLink to="/#customer">
                <a
                  onClick={_toggleSidebar}
                  href="#customer"
                  className="nav-link mobile-link"
                >
                  Testimonial
                </a>
              </HashLink>
            </div>

          </div>
          {/* <div className="nav-right-btn">

            <Link to="/">
              <img src="/images/join-now-btn-bg.png" alt="" />
              <div className="join-btn-text">
                <span>Join Now</span>
              </div>
            </Link>
          </div> */}
          {wallet.connected ? <WalletDisconnectButton /> : <WalletMultiButton />}
        </nav>
      </header>
    </>
  );
}

export default Header;
