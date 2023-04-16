import React from 'react';

function Footer() {

    return (

        <>
           {/* =========== Footer start ======================= */}
             <section className='footer'>
                 <div className="footer-warrper">
              <div className="footer-con">
                <div className="socials">
                  <div className="social-list">
                    <a href="https://linkedin.com/" >
                      <div className="social-content">
                        <img src="./images/twitter.svg" alt="" />
                        <p>Twitter</p>
                      </div>
                    </a>
                  </div>
                  <div className="social-list">
                    <a href="https://linkedin.com/" >
                      <div className="social-content">
                      <img src="./images/discord.svg" alt="" />
                        <p>Discord</p>
                      </div>
                    </a>
                  </div>
                  <div className="social-list">
                    <a href="https://linkedin.com/" >
                      <div className="social-content">
                        <img src="./images/telegram.svg" alt="" />
                        <p>Telegram</p>
                      </div>
                    </a>
                  </div>
                  <div className="social-list">
                    <a href="https://linkedin.com/">
                      <div className="social-content">
                        <img src="./images/medium.svg" alt="" />
                        <p>Medium</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="copy-right-text">
                  <p>
                    © 2023 nft constructer All Rights Reserved. All names,
                    logos, images,and brands are property of their respective
                    owners. Non-Affiliation and Disclaimer
                  </p>
                </div>
              </div>
            </div>     
            </section> 
           {/* =========== Footer  ======================= */}
        </>

    )

}

export default Footer;



