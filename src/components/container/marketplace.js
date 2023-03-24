import React from "react";

export default function Marketplace() {
  const mobilemark = require('./assets/mobile-mark.png')
  return (
    <div className="section section-7">
      <div className="container-7">
        <div className="align-items-center">
          <div className="textarea">
            <div className="features-content">
              <h2 className="h-7">
                MINT.
                <br />
                Launch across Marketplaces & Blockchains
              </h2>
              <p className="p-7">
                Mint NFTs, enable royalties, and list in any open marketplace or
                blockchain, all of that with absolutely no coding.
              </p>
              <p className="p-7">
                Your collectors can port NFTs you minted to any other
                marketplace or Blockchain, we have built-in features that will
                help prove provenance and keep your royalty percentages intact.
              </p>
              <p className="p-7">
                Right now NFT project list the author wallet address in the
                original published blockchain alone so that collectors can be
                mindful. But what happens when your collector wants to take it
                elsewhere. Your brandable LaunchPad has this challenge solved
                already.
              </p>
            </div>
          </div>
          <div className="image-field">
            <div className="image-area">
              <img className="img-7"
                src={mobilemark}
                alt=""
                width="100%"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
