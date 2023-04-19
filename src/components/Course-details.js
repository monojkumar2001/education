import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, SystemProgram, Transaction } from "@solana/web3.js";
import React from "react";
import { DEST_SOL_ADDRESS } from "../config";
function CourseDetails() {
  const wallet = useWallet();
  const { connection } = useConnection();

  const buyCourse = async () => {
    const amount = 1;
    let tx = new Transaction().add(SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      lamports: amount * LAMPORTS_PER_SOL,
      toPubkey: DEST_SOL_ADDRESS,
    }));

    let txid = await wallet.sendTransaction(tx, connection);
    window.location = "/order"
  }

  return (
    <>
      {/* ============ Course Details Start ============= */}
      <div className="course-details">
        <div className="container">
          <div className="course-details-wrapper">
            <div
              className="course-details-title"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>THE ROAD TO WEB3</h1>
              <p>
                From buying, selling, and trading to creating and minting your
                own collections, we offer
              </p>
            </div>
            <div
              className="course-details-img"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="./images/course-details-img.svg" alt="" />
            </div>
            <div className="course-learn-content">
              <div
                className="course-details-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1>WHAT YOUR WILL LEARN</h1>
                <p>
                  Here are some persuasive points you can use for an ebook or
                  eproduct box cover for your NFT mint and sell project:
                </p>
              </div>
              <div className="course-learn-items">
                <div className="row g-4">
                  <div className="col-lg-6 col-md-12">
                    <div
                      className="course-learn-item"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="course-check-icon">
                        <img src="./images/check-icon.svg" alt="" />
                      </div>
                      <p>
                        Get a step-by-step roadmap to successfully mint and sell
                        your NFT project, from start to finish.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div
                      className="course-learn-item"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="course-check-icon">
                        <img src="./images/check-icon.svg" alt="" />
                      </div>
                      <p>
                        Learn how to create unique and valuable NFTs that will
                        stand out in the marketplace and attract buyers.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div
                      className="course-learn-item"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="course-check-icon">
                        <img src="./images/check-icon.svg" alt="" />
                      </div>
                      <p>
                        Discover the latest trends and best practices in the NFT
                        space to help you make informed decisions and maximize
                        your profits.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div
                      className="course-learn-item"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="course-check-icon">
                        <img src="./images/check-icon.svg" alt="" />
                      </div>
                      <p>
                        Gain insights into the psychology of NFT buyers and
                        sellers, and learn how to position your project for
                        success.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div
                      className="course-learn-item"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="course-check-icon">
                        <img src="./images/check-icon.svg" alt="" />
                      </div>
                      <p>
                        Find out how to market your NFT project effectively,
                        using proven strategies and techniques that will drive
                        traffic and generate sales.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div
                      className="course-learn-item"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="course-check-icon">
                        <img src="./images/check-icon.svg" alt="" />
                      </div>
                      <p>
                        Get access to expert tips and advice from successful NFT
                        creators and sellers, so you can learn from their
                        experiences and avoid common pitfalls.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div
                      className="course-learn-item"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="course-check-icon">
                        <img src="./images/check-icon.svg" alt="" />
                      </div>
                      <p>
                        Learn how to price your NFTs appropriately, based on
                        their unique characteristics and market demand, to
                        ensure you get the best return on your investment.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div
                      className="course-learn-item"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="course-check-icon">
                        <img src="./images/check-icon.svg" alt="" />
                      </div>
                      <p>
                        Get a complete checklist of everything you need to do to
                        launch your NFT project successfully, including legal
                        and technical considerations.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div
                      className="course-learn-item"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="course-check-icon">
                        <img src="./images/check-icon.svg" alt="" />
                      </div>
                      <p>
                        Find out how to leverage social media and other online
                        platforms to build a loyal fan base and increase your
                        visibility in the NFT community.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div
                      className="course-learn-item"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="course-check-icon">
                        <img src="./images/check-icon.svg" alt="" />
                      </div>
                      <p>
                        With this ebook or eproduct box, you'll have all the
                        information and resources you need to turn your NFT
                        project into a successful venture that will generate
                        income and build your reputation in the exciting and
                        rapidly growing world of NFTs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="course-description-content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="course-details-title">
                <h1>DESCRIPTION</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div
              className="course-submit-email"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="course-details-title">
                <h1>COURSE PRICE <span>1</span> Sol</h1>
              </div>
              <div
                className="course-input-email"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                            <div className="course-input-items">
             <div className="course-input-item">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                  <div className="course-input-item">
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
             </div>
                <button className="course-buy-now-btn" onClick={buyCourse}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Course Details End ============= */}
    </>
  );
}

export default CourseDetails;
