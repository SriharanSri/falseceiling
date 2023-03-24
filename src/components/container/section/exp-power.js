import React from "react";

export default function ExpPower() {
  const nftmobile = require('../assets/nft-mobile.png')
  return (
    <div className="section-123">
      <div className="new_container">
        <div className="allign_items">
          <div className="text_container">
            <div className="content-block">
              <h2 className="text-h2" >
                Experience the power of code. <br />
                Without writing it.
              </h2>
              <p className="text-p">
                Take control of your idea and let GuardianLink translate your
                vision into your own branded NFT LaunchPad, ready to scale up to
                serve Millions of collectors with high velocity trades.
              </p>
              <div className="features-image">
                <img src={nftmobile} width='100%' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
