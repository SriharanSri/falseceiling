import Footer from "components/footer";
import Header from "components/header";
import React, { useEffect, useState } from "react";
import Marketplace from "./marketplace";
import AboutApi from "./section/about-api";
import ExpPower from "./section/exp-power";
import StrategicPartners from "./section/strategicPartners";
import VideoBackground from "./section/video-background";

import WorkWithUs from "./section/work-with-us";
import { StickySocial } from "./sticky-social";
import Lottie from "react-lottie";
import animationData from "./assets/loader.json";
function NoCodePlatform() {
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
          <VideoBackground />
          <ExpPower />
          <WorkWithUs />
          <AboutApi />
          <StrategicPartners />
          <Marketplace />
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

export default NoCodePlatform;
