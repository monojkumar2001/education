import React from "react";
import { Link } from "react-router-dom";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/modules/pagination/pagination.min.css";
import { Mousewheel, Pagination } from "swiper";

function Home() {
  // States
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      const texts = ["Home", "Course", "Master Class", "About", "Testimonial"];
      return `<span class="${className}">${texts[index]}</span>`;
    },
  };

  return (
    <React.Fragment>
      {/* =================== Desktop start ==================== */}
      <section className="pc">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          speed={1000}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
          pagination={pagination}
        >
          <SwiperSlide>
            {/* ==================== Intro Start =============== */}
            <section className="intro section-padding">
              <div className="section-bg-img">
                <img src="./images/hero-img.png" alt="" />
              </div>
              <div className="page-bg-1 page-bg"></div>
              <div className="container">
                <div className="hero-warrper">
                  <div className="hero-left">
                    <h1 className="section-title">
                      {/* <Typed
                      strings={[`Future infrastructure for workforce`]}
                      typeSpeed={120}
                      backSpeed={40}
                    ></Typed> */}
                      WELCOME TO KRYPTONERDS THE ULTIMATE <span>PLATFORM</span>{" "}
                      FOR NFT EDUCATION
                    </h1>
                    <p className="discription">
                      From buying, selling, and trading to creating and minting
                      your own collections, we offer comprehensive and in-depth
                      knowledge to help you thrive in the world of NFTs. Join us
                      now and discover the world of possibilities! 
                    </p>
                    <div className="join-btn">
                      <a href="">
                        <img src="./images/join-now-btn-bg.png" alt="" />
                        <div className="join-btn-text">
                          <span>Join Now</span>
                        </div>
                      </a>
                      {/* <a href="" className="play-show-btn">
                    Play show Reel
                    </a> */}
                    </div>
                  </div>
                </div>

                <div className="hero-img-2">
                  <img src="./images/hero-2.svg" alt="" />
                </div>
                <div className="hero-img-3 hero-imgs-3">
                  <img src="./images/hero-3.svg" alt="" />
                </div>
              </div>
            </section>
            {/* ==================== Intro End =============== */}
          </SwiperSlide>
          <SwiperSlide>
            {/* ================== Courses End ========================== */}

            <section className="courses section-padding">
              <div className="section-bg-img">
                <img src="./images/hero-img.png" alt="" />
              </div>
              <div className="page-bg-2 page-bg"></div>
              <div className="courses-wrapper">
                <div className="course-title">
                  <h1 className="section-title">COURSES</h1>
                  <p className="discription">
                    From buying, selling, and trading to creating and minting
                    your own collections, we offer
                  </p>
                </div>
                <div className="courses-con">
                  <div className="course-item section-item-slider section-item-slider-item-1">
                    <div className="course-item-img">
                      <img src="./images/course-bg-img-1.svg" alt="" />
                    </div>
                    <div className="course-content">
                      <h4>The Road To Web3</h4>
                      <p>lorem and trading to creating and minting
                    your own collections, we offer</p>
                      <Link to="/course-details">
                        <button className="custom-btn">Get Started</button>
                      </Link>
                    </div>
                  </div>
                  <div className="course-item section-item-slider section-item-slider-item-2">
                    <div className="course-item-img">
                      <img src="./images/course-bg-img-2.svg" alt="" />
                    </div>
                    <div className="course-content">
                      <h4>The Road To Web3</h4>
                      <p>lorem and trading to creating and minting
                    your own collections, we offer</p>
                      <Link to="/course-details">
                        <button className="custom-btn">Get Started</button>
                      </Link>
                    </div>
                  </div>
                  <div className="course-item section-item-slider section-item-slider-item-3">
                    <div className="course-item-img">
                      <img src="./images/course-bg-img-3.svg" alt="" />
                    </div>
                    <div className="course-content">
                      <h4>The Road To Web3</h4>
                      <p>lorem and trading to creating and minting
                    your own collections, we offer</p>
                      <Link to="/course-details">
                        <button className="custom-btn">Get Started</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-img-1">
                <img src="./images/about-img-1.svg" alt="" />
              </div>
              <div className="about-img-2">
                <img src="./images/about-img-2.svg" alt="" />
              </div>
            </section>
            {/* ================== Courses End ========================== */}
          </SwiperSlide>
          <SwiperSlide>
            {/* ================== Courses End ========================== */}

            <section className="courses section-padding ">
              <div className="section-bg-img">
                <img src="./images/hero-img.png" alt="" />
              </div>
              <div className="page-bg-2 page-bg"></div>
              <div className="courses-wrapper course-2">
                <div className="course-title">
                  <h1 className="section-title">COURSES</h1>
                  <p className="discription">
                    From buying, selling, and trading to creating and minting
                    your own collections, we offer
                  </p>
                </div>
                <div className="courses-con">
                  <div className="course-item section-item-slider section-item-slider-item-1">
                    <div className="course-item-img">
                      <img src="./images/course-bg-img-1.svg" alt="" />
                    </div>
                    <div className="course-content">
                      <h4>The Road To Web3</h4>
                      <p>lorem and trading to creating and minting
                    your own collections, we offer</p>
                      <Link to="/course-details">
                        <button className="custom-btn">Get Started</button>
                      </Link>
                    </div>
                  </div>
                  <div className="course-item section-item-slider section-item-slider-item-2">
                    <div className="course-item-img">
                      <img src="./images/course-bg-img-2.svg" alt="" />
                    </div>
                    <div className="course-content">
                      <h4>The Road To Web3</h4>
                      <p>lorem and trading to creating and minting
                    your own collections, we offer</p>
                      <Link to="/course-details">
                        <button className="custom-btn">Get Started</button>
                      </Link>
                    </div>
                  </div>
                  <div className="course-item section-item-slider section-item-slider-item-3">
                    <div className="course-item-img">
                      <img src="./images/course-bg-img-3.svg" alt="" />
                    </div>
                    <div className="course-content">
                      <h4>The Road To Web3</h4>
                      <p>lorem and trading to creating and minting
                    your own collections, we offer</p>
                      <Link to="/course-details">
                        <button className="custom-btn">Get Started</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
         
              <div className="about-img-1">
                <img src="./images/about-img-1.svg" alt="" />
              </div>
              <div className="about-img-2">
                <img src="./images/about-img-2.svg" alt="" />
              </div>
            </section>
            {/* ================== Courses End ========================== */}
          </SwiperSlide>

    
          <SwiperSlide>
            {/* ================= About Start ==================== */}
            <section className="about section-padding">
              <div className="section-bg-img">
                <img src="./images/hero-img.png" alt="" />
              </div>
              <div className="page-bg-4 page-bg"></div>
              <div className="about-wrapper">
                <h1 className="section-title">ABOUT KRYPTONERDS</h1>
                <p className="discription">
                  Welcome to Kryptonerds, your one stop solution for all things
                  NFT. We are a dedicated NFT education platform that aims to
                  teach people how to buy, sell, mint, trade and create their
                  own NFT collection. Our mission is to empower individuals with
                  the knowledge and skills they need to succeed in the rapidly
                  growing world of NFTs. Our team of industry experts and NFT
                  influencers provide live classes and masterclasses that are
                  designed to educate and inspire. We cover everything from the
                  basics of NFTs and technology to advanced trading strategies
                  and market analysis. Whether you're a beginner or an
                  experienced trader, our classes will help you take your NFT
                  game to the next level. Our live classes are held by industry
                  experts who have years of experience in the NFT space. They
                  provide valuable insights and hands-on training that will help
                  you understand the ins and outs of NFTs. From buying and
                  selling NFTs on the open market to creating your own NFT
                  collection, our experts will guide you every step of the way.
                  In addition to our live classes, we also offer masterclasses
                  by NFT influencers. These classes are designed to provide an
                  in-depth look at the world of NFTs from the perspective of
                  some of the most successful and influential players in the
                  space. You'll learn from the best and gain valuable insights
                  into the latest trends and strategies that are driving the NFT
                  market. At Kryptonerds, we believe in the power of education
                  to change lives. We're passionate about helping people achieve
                  their goals and realize their dreams in the NFT space. Whether
                  you're looking to make a profit or simply want to create your
                  own unique NFT collection, we're here to help you succeed. 
                </p>
              </div>

              <div className="about-img-1">
                <img src="./images/about-img-1.svg" alt="" />
              </div>
              <div className="about-img-2">
                <img src="./images/about-img-2.svg" alt="" />
              </div>
            </section>
            {/* ================= About end ==================== */}
          </SwiperSlide>
          {/* <SwiperSlide>
            <section className="cummunity section-padding">
              <div className="section-bg-img">
                <img src="./images/hero-img.png" alt="" />
              </div>
              <div className="page-bg-5 page-bg"></div>
              <div className="container">
                <div className="community-wrapper">
                  <div className="community-title">
                    <h1 className="section-title">COMMUNITY</h1>
                  </div>
                  <div className="community-items">
                    <div className="community-item cummunity-item-1">
                      <div className="community-item-img">
                        <img
                          src="./images/community-item-1.png"
                          alt=""
                          className="com-1"
                        />
                        <img
                          src="./images/community-item-hover-1.png"
                          alt=""
                          className="com-2"
                        />
                      </div>
                      <div className="community-content">
                        <h3>community</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum hs been the
                          industry's standard dummy text ever since the 1500s,
                          whe
                        </p>
                      </div>
                    </div>
                    <div className="community-item cummunity-item-2">
                      <div className="community-item-img">
                        <img
                          src="./images/community-item-1.png"
                          alt=""
                          className="com-1"
                        />
                        <img
                          src="./images/community-item-hover-1.png"
                          alt=""
                          className="com-2"
                        />
                      </div>
                      <div className="community-content">
                        <h3>Events</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took{" "}
                        </p>
                      </div>
                    </div>
                    <div className="community-item cummunity-item-3">
                      <div className="community-item-img">
                        <img
                          src="./images/community-item-1.png"
                          alt=""
                          className="com-1"
                        />
                        <img
                          src="./images/community-item-hover-1.png"
                          alt=""
                          className="com-2"
                        />
                      </div>
                      <div className="community-content">
                        <h3>Learn</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took{" "}
                        </p>
                      </div>
                    </div>
                    <div className="community-item cummunity-item-4">
                      <div className="community-item-img">
                        <img
                          src="./images/community-item-1.png"
                          alt=""
                          className="com-1"
                        />
                        <img
                          src="./images/community-item-hover-1.png"
                          alt=""
                          className="com-2"
                        />
                      </div>
                      <div className="community-content">
                        <h3>Grow</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="footer-warrper">
                    <div className="footer-con">
                      <div className="socials">
                        <div className="social-list">
                          <a
                            href="https://twitter.com/pentonium_ptm"
                            target="_blank"
                          >
                            <img src="./images/social-bg.png" alt="" />
                            <div className="social-content">
                              <img src="./images/twitter.png" alt="" />
                              <p>Twitter</p>
                            </div>
                          </a>
                        </div>
                        <div className="social-list">
                          <a href="" target="_blank">
                            <img src="./images/social-bg.png" alt="" />
                            <div className="social-content">
                              <img src="./images/discord.png" alt="" />
                              <p>Discord</p>
                            </div>
                          </a>
                        </div>
                        <div className="social-list">
                          <a href="https://t.me/pentonium" target="_blank">
                            <img src="./images/social-bg.png" alt="" />
                            <div className="social-content">
                              <img src="./images/telegram.png" alt="" />
                              <p>Telegram</p>
                            </div>
                          </a>
                        </div>
                        <div className="social-list">
                          <a
                            href="https://pentonium.medium.com/"
                            target="_blank"
                          >
                            <img src="./images/social-bg.png" alt="" />
                            <div className="social-content">
                              <img src="./images/mediums.png" alt="" />
                              <p>Medium</p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="copyright">
                        <p>
                          © 2023 nft constructer All Rights Reserved. All names,
                          logos, images,and brands are property of their
                          respective owners. Non-Affiliation and Disclaimer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide> */}
      
          <SwiperSlide>
            {/* =================== Customer start ================== */}
            <section className="customer-office cpb-6 section-padding">
              <div className="section-bg-img">
                <img src="./images/hero-img.png" alt="" />
              </div>
              <div className="page-bg-3 page-bg"></div>
              <div className="customer-wrapper">
                <div className="customer-title">
                  <h1 className="section-title">
                    CHECK OUT OUR HAPPY CUSTOMERS
                  </h1>
                  <p className="discription">
                    From buying, selling, and trading to creating and minting
                    your own collections, we offer
                  </p>
                </div>

                <div className="customer-items">
                  <div className="customer-item  section-item-slider section-item-slider-item-1">
                    <div className="customer-profile">
                      <img src="./images/customer-1.jpg" alt="" />
                    </div>
                    <div className="customer-img-side">
                      <img src="./images/customer-img-side.png" alt="" />
                    </div>
                    <div className="customer-content">
                      <h3>Samuel Shicks</h3>
                      <span>(Customers)</span>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer
                      </p>
                      <div className="customer-review">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="customer-item section-item-slider section-item-slider-item-2">
                    <div className="customer-profile">
                      <img src="./images/customer-2.jpg" alt="" />
                    </div>
                    <div className="customer-img-side">
                      <img src="./images/customer-img-side.png" alt="" />
                    </div>
                    <div className="customer-content">
                      <h3>Samuel Shicks</h3>
                      <span>(Customers)</span>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer
                      </p>
                      <div className="customer-review">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="customer-item section-item-slider section-item-slider-item-3">
                    <div className="customer-profile">
                      <img src="./images/customer-3.jpg" alt="" />
                    </div>
                    <div className="customer-img-side">
                      <img src="./images/customer-img-side.png" alt="" />
                    </div>
                    <div className="customer-content">
                      <h3>Samuel Shicks</h3>
                      <span>(Customers)</span>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer
                      </p>
                      <div className="customer-review">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-warrper">
                    <div className="footer-con">
                      <div className="socials">
                        <div className="social-list">
                          <a
                            href="https://twitter.com/pentonium_ptm"
                            target="_blank"
                          >
                            <img src="./images/social-bg.png" alt="" />
                            <div className="social-content">
                              <img src="./images/twitter.png" alt="" />
                              <p>Twitter</p>
                            </div>
                          </a>
                        </div>
                        <div className="social-list">
                          <a href="" target="_blank">
                            <img src="./images/social-bg.png" alt="" />
                            <div className="social-content">
                              <img src="./images/discord.png" alt="" />
                              <p>Discord</p>
                            </div>
                          </a>
                        </div>
                        <div className="social-list">
                          <a href="https://t.me/pentonium" target="_blank">
                            <img src="./images/social-bg.png" alt="" />
                            <div className="social-content">
                              <img src="./images/telegram.png" alt="" />
                              <p>Telegram</p>
                            </div>
                          </a>
                        </div>
                        <div className="social-list">
                          <a
                            href="https://pentonium.medium.com/"
                            target="_blank"
                          >
                            <img src="./images/social-bg.png" alt="" />
                            <div className="social-content">
                              <img src="./images/mediums.png" alt="" />
                              <p>Medium</p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="copyright">
                        <p>
                          © 2023 nft constructer All Rights Reserved. All names,
                          logos, images,and brands are property of their
                          respective owners. Non-Affiliation and Disclaimer
                        </p>
                      </div>
                    </div>
                  </div>
            </section>
            {/* =================== Customer end ================== */}
          </SwiperSlide>
        </Swiper>
      </section>
      {/* =================== Desktop end ==================== */}

      {/* ================ Mobile device  start =============== */}
      <section className="mobile-home">
        {/* =============== Mobile Hero Section Start ===================== */}
        <section
          className="hero-mobile"
          id="hero"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="hero-mobile-warrper">
              <div className="hero-mobile-left">
                <h1
                  className="mobile-section-title"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  WELCOME TO KRYPTONERDS THE ULTIMATE <span>PLATFORM</span> FOR
                  NFT EDUCATION
                </h1>
                <p data-aos="fade-up" data-aos-duration="1000">
                  From buying, selling, and trading to creating and minting your
                  own collections, we offer comprehensive and in-depth knowledge
                  to help you thrive in the world of NFTs. Join us now and
                  discover the world of possibilities! 
                </p>
                <div className="join-btn-mobile">
                  <a href="">
                    <img src="./images/join-now-btn-bg.png" alt="" />
                    <div className="join-btn-text">
                      <span>Join Now</span>
                    </div>
                  </a>
                  {/* <a href="" className="play-show-btn">
                    Play show Reel
                    </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =============== Mobile Hero Section Start ===================== */}
        {/* ================ Mobile Course Start ================== */}
        <section
          className="mobile-courses"
          id="course"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="mobile-courses-wrapper">
              <div
                className="course-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1 className="mobile-section-title">COURSES</h1>
                <p>
                  From buying, selling, and trading to creating and minting your
                  own collections, we offer
                </p>
              </div>
              <div className="mobile-courses-con">
                <div
                  className="course-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="course-item-img">
                    <img src="./images/course-bg-img-1.svg" alt="" />
                  </div>
                  <div className="course-content">
                    <h4>The Road To Web3</h4>
                    <p>lorem and trading to creating and minting
                    your own collections, we offer</p>
                    <Link to="/course-details">
                      <button className="custom-btn">Get Started</button>
                    </Link>
                  </div>
                </div>
                <div
                  className="course-item "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="course-item-img">
                    <img src="./images/course-bg-img-2.svg" alt="" />
                  </div>
                  <div className="course-content">
                    <h4>The Road To Web3</h4>
                    <p>lorem and trading to creating and minting
                    your own collections, we offer</p>
                    <Link to="/course-details">
                      <button className="custom-btn">Get Started</button>
                    </Link>
                  </div>
                </div>
                <div
                  className="course-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="course-item-img">
                    <img src="./images/course-bg-img-3.svg" alt="" />
                  </div>
                  <div className="course-content">
                    <h4>The Road To Web3</h4>
                    <p>lorem and trading to creating and minting
                    your own collections, we offer</p>
                    <Link to="/course-details">
                      <button className="custom-btn">Get Started</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================ Mobile Course End ================== */}

     

        {/* ============= Mobile About Start ================= */}
        <div
          className="mobile-about"
          id="about"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="mobile-about-wrapper">
              <h1
                className="mobile-section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                ABOUT KRYPTONERDS
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000">
                Welcome to Kryptonerds, your one stop solution for all things
                NFT. We are a dedicated NFT education platform that aims to
                teach people how to buy, sell, mint, trade and create their own
                NFT collection. Our mission is to empower individuals with the
                knowledge and skills they need to succeed in the rapidly growing
                world of NFTs. Our team of industry experts and NFT influencers
                provide live classes and masterclasses that are designed to
                educate and inspire. We cover everything from the basics of NFTs
                and technology to advanced trading strategies and market
                analysis. Whether you're a beginner or an experienced trader,
                our classes will help you take your NFT game to the next level.
                Our live classes are held by industry experts who have years of
                experience in the NFT space. They provide valuable insights and
                hands-on training that will help you understand the ins and outs
                of NFTs. From buying and selling NFTs on the open market to
                creating your own NFT collection, our experts will guide you
                every step of the way. In addition to our live classes, we also
                offer masterclasses by NFT influencers. These classes are
                designed to provide an in-depth look at the world of NFTs from
                the perspective of some of the most successful and influential
                players in the space. You'll learn from the best and gain
                valuable insights into the latest trends and strategies that are
                driving the NFT market. At Kryptonerds, we believe in the power
                of education to change lives. We're passionate about helping
                people achieve their goals and realize their dreams in the NFT
                space. Whether you're looking to make a profit or simply want to
                create your own unique NFT collection, we're here to help you
                succeed. 
              </p>
            </div>
          </div>
        </div>
        {/* ============= Mobile About End ================= */}
           {/* ============= Mobile Customer Start ==================== */}
           <div
          className="mobile-customer"
          id="customer"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="mobile-customer-wrapper">
              <div
                className="customer-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1 className="mobile-section-title">
                  CHECK OUT OUR HAPPY CUSTOMERS
                </h1>
                <p>
                  From buying, selling, and trading to creating and minting your
                  own collections, we offer
                </p>
              </div>

              <div className="mobile-customer-items">
                <div
                  className="customer-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="customer-profile">
                    <img src="./images/customer-1.jpg" alt="" />
                  </div>
                  <div className="customer-img-side">
                    <img src="./images/customer-img-side.png" alt="" />
                  </div>
                  <div className="customer-content">
                    <h3>Samuel Shicks</h3>
                    <span>(Customers)</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer
                    </p>
                    <div className="customer-review">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="customer-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="customer-profile">
                    <img src="./images/customer-2.jpg" alt="" />
                  </div>
                  <div className="customer-img-side">
                    <img src="./images/customer-img-side.png" alt="" />
                  </div>
                  <div className="customer-content">
                    <h3>Samuel Shicks</h3>
                    <span>(Customers)</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer
                    </p>
                    <div className="customer-review">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="customer-item "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="customer-profile">
                    <img src="./images/customer-3.jpg" alt="" />
                  </div>
                  <div className="customer-img-side">
                    <img src="./images/customer-img-side.png" alt="" />
                  </div>
                  <div className="customer-content">
                    <h3>Samuel Shicks</h3>
                    <span>(Customers)</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer
                    </p>
                    <div className="customer-review">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.90905 0.81543L9.89644 5.94317L15.3874 6.24873L11.1247 9.72342L12.5309 15.04L7.90905 12.0597L3.28721 15.04L4.69338 9.72342L0.430748 6.24873L5.92166 5.94317L7.90905 0.81543Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============= Mobile Customer End ==================== */}

        {/* ==================== Mobile Community Start ============ */}
        <div
          className="mobile-community"
          id="community"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            {/* <div className="mobile-community-wrapper">
              <h1
                className="mobile-section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                COMMUNITY
              </h1>
              <div className="mobile-community-items">
                <div
                  className="mobile-community-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h4>COMMMUNITY</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer
                  </p>
                </div>
                <div
                  className="mobile-community-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h4>COMMMUNITY</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer
                  </p>
                </div>
                <div
                  className="mobile-community-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h4>COMMMUNITY</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer
                  </p>
                </div>
                <div
                  className="mobile-community-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h4>COMMMUNITY</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer
                  </p>
                </div>
              </div>
            </div> */}

            <div className="mobile-footer-warrper">
              <div className="mobile-footer-con">
                <div className="socials">
                  <div className="social-list">
                    <a href="" target="_blank">
                      <div className="social-content">
                        <img src="./images/twitter.png" alt="" />
                        <p>Twitter</p>
                      </div>
                    </a>
                  </div>
                  <div className="social-list">
                    <a href="" target="_blank">
                      <div className="social-content">
                        <img src="./images/discord.png" alt="" />
                        <p>Discord</p>
                      </div>
                    </a>
                  </div>
                  <div className="social-list">
                    <a href="" target="_blank">
                      <div className="social-content">
                        <img src="./images/telegram.png" alt="" />
                        <p>Telegram</p>
                      </div>
                    </a>
                  </div>
                  <div className="social-list">
                    <a href="" target="_blank">
                      <div className="social-content">
                        <img src="./images/mediums.png" alt="" />
                        <p>Medium</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="mobile-copy-right-text">
                  <p>
                    © 2023 nft constructer All Rights Reserved. All names,
                    logos, images,and brands are property of their respective
                    owners. Non-Affiliation and Disclaimer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==================== Mobile Community End ============ */}

        {/* ================ Mobile device  End =============== */}
      </section>
      {/*  */}
    </React.Fragment>
  );
}

export default Home;
