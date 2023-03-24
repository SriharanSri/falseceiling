import React from "react";

export default function VideoBackground() {
  return (
    <div className="video-section">
      <div className="video-container">
        <video className="desk_vid" playsInline autoPlay muted loop type>
          {" "}
          <source
            src="https://cdn.guardianlink.io/product-hotspot/video/product_2.mp4"
            type="video/mp4"
          />{" "}
        </video>
        <video className="mob_vid" playsInline autoPlay muted loop type>
          {" "}
          <source
            src="https://cdn.guardianlink.io/product-hotspot/video/product_2.mp4"
            type="video/mp4"
          />{" "}
        </video>

        <div className="carousel-container" id="carousel">
            <div className="carousel-text">
                <h1 className="carousel-h1">
                Elegantly Simple. Furiously Fast.<br/> A White label NFT Launchpad in the cloud. 
                </h1>
                <h1 className="mobile-text">

                </h1>
                <p className="carousel-p1">For Designers, Artists, Brands and Content Creators</p>
            </div>
        </div>
      </div>
    </div>
  );
}
