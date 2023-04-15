import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <React.Fragment>
        {/* =============== Intro Section Start ===================== */}

        <section
          className="intro"
          id="hero"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="hero-warrper">
              <div className="hero-left">
                <h1
                  className="section-title"
                >
                  WELCOME TO KRYPTONERDS THE ULTIMATE <span>PLATFORM</span> FOR
                  NFT EDUCATION
                </h1>
                <p>
                  From buying, selling, and trading to creating and minting your
                  own collections, we offer comprehensive and in-depth knowledge
                  to help you thrive in the world of NFTs. Join us now and
                  discover the world of possibilities! 
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
          </div>
          <div className="hero-img-1">
            <img src="./images/hero-2.svg" alt="" />
          </div>
          <div className="hero-img-2">
            <img src="./images/hero-3.svg" alt="" />
          </div>
        </section>
        
        {/* =============== Intro Section End ===================== */}

                {/* =============  About Start ================= */}
        <div
          className="about cpy-8"
          id="about"
          
        >
          <div className="container">
            <div className="about-wrapper">
              <h1
                className="section-title"
                data-aos="fade-up"
              data-aos-duration="1000"
              >
                ABOUT KRYPTONERDS
              </h1>
              <p data-aos="fade-up"
              data-aos-duration="1000">
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
        {/* =============  About End ================= */}

        {/* ================  Course Start ================== */}
        <section
          className="courses cpb-6"
          id="course"
     
        >
          <div className="container">
            <div className="courses-wrapper">
              <div
                className="course-title "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1 className="section-title" >COURSES</h1>
                <p>
                  From buying, selling, and trading to creating and minting your
                  own collections, we offer
                </p>
              </div>
              <div className="courses-con" data-aos="fade-up"
              data-aos-duration="1000">
                <div
                  className="course-item"
                
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
        {/* ================  Course End ================== */}
      
           {/* =============  Customer Start ==================== */}
           <div
          className="customer cpb-6"
          id="customer"
        >
          <div className="container">
            <div className="customer-wrapper">
              <div
                className="customer-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1 className="section-title">
                  CHECK OUT OUR HAPPY CUSTOMERS
                </h1>
                <p>
                  From buying, selling, and trading to creating and minting your
                  own collections, we offer
                </p>
              </div>

              <div className="customer-items" data-aos="fade-up"
              data-aos-duration="1000">
                <div
                  className="customer-item"
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
        {/* =============  Customer End ==================== */}

     

      {/*  */}
    </React.Fragment>
  );
}

export default Home;
