import FormInput from "components/shared-ui/form-input";
import LinkBtn from "components/shared-ui/link-btn";
import React from "react";

export const Invite = () => {
  return (
    <section className="section orange__gradient--dark_">
      <div className="section__heading">
        <h2>
         
         Exclusive Invite 
          
        </h2>
      </div>

      <p className="section__text_">
        The decentralization movement is what will propel our world to a Type-1
        Civilization. Just as the internet boom changed the world putting
        progress on steroids, this decentralized revolution through Smart
        Contracts will usher in a new age of thinking across national borders
        and ethnicities. An emerging population looking to join this crypto
        revolution has to navigate various challenges. This is where
        GuardianLink serves as a reliability protocol and enables
        indivisibility, recoverability, and theft-proofs NFTs and Smart
        Contracts. If you are interested in being part of the biggest paradigm
        shift in decentralized space, drop us a line.
      </p>
      {/* <div className="section__heading2">
        <h4>Build your NFT Marketplace in minutes with GuardianLink.</h4>
        <p>No Mess. No Clutter. Only You.</p>
      </div> */}
      {/* <LinkBtn href='https://www.guardianlink.io/' className='section__black-btn'>Join the Revolution!</LinkBtn> */}

      <div className="sub_form white_color">
        {/* <h3>I’m interested </h3>
                    <p>Be the first to hear about GuardianLink’s Updates</p> */}

        <FormInput className="nft_rule-form" subscribeBtn={true} />
      </div>
    </section>
  );
};
