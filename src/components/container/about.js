import Footer from "components/footer";
import Header from "components/header";
import React, { useEffect, useState } from "react";
import Info from "./info";
import { Invite } from "./invite";
import Roadmap from "./roadmap";
import { OurInvestors } from "./section/our-investors";
import { Ourteam } from "./section/our-team";
import { StickySocial } from "./sticky-social";
import Lottie from "react-lottie";
import animationData from "./assets/loader.json";

function About() {
  useEffect(() => {
    let timer = setTimeout(() => setShow(true), 2300);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const [show, setShow] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {show ? (
        <>
          <Header />
          <Info />
          {/* <Roadmap /> */}
          <Ourteam />
          <OurInvestors />
          <Invite />
          <Footer />
          <StickySocial />
        </>
      ) : (
        <div className="frontloader">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      )}
    </>
  );
}

export default About;
