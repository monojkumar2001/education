import React from 'react'
import { Link } from "react-router-dom";
function Order() {
  return (
   <>
   <div className="order">
    <div className="container">
        <div className="order-wrapper">
         <Link to='/'>
         <div className="back-wrapper">
                <img src="./images/back-icon.svg" alt="" />
                <h5>Back</h5>
            </div>
         </Link>
            <div className="order-complete-img">
                <img src="./images/order-complete-img.svg" alt="" />
            </div>
            <div className="oder-title">
                <h1>THANKS FOR ORDER</h1>
                <p>Learn how to create unique and valuable NFTs that will stand out in the marketplace and attract buyers. </p>
            </div>

            <div className="social-area">
                <h3>Follow Us</h3>
                <div className="social-links">
                    <div className="social-link">
                        <a href="https://linkedin.com/">
                            <img src="./images/discord-img.svg" alt="" />
                        </a>
                    </div>
                    <div className="social-link">
                        <a href="https://linkedin.com/">
                            <img src="./images/instragram.svg" alt="" />
                        </a>
                    </div>
                    <div className="social-link">
                        <a href="https://linkedin.com/">
                            <img src="./images/opensea.svg" alt="" />
                        </a>
                    </div>
                    <div className="social-link">
                        <a href="https://linkedin.com/">
                            <img src="./images/linkedin.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Order