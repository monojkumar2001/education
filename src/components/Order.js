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

        </div>
    </div>
   </div>
   </>
  )
}

export default Order