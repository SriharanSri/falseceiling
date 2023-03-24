import React, { useEffect, useState } from "react";
import Container from "components/container";
import Footer from "components/footer";
import Header from "components/header";
import HeroBanner from "components/hero-banner";
import "library/styles/index.scss";
import Lottie from "react-lottie";
import animationData from "./components/container/assets/loader.json";

function Load() {
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
          <HeroBanner />
          <Container />
          <Footer />
        </>
      ) : (
        <div className="frontloader">
          <Lottie options={defaultOptions} height={150} width={150} />
        </div>
      )}
    </>
  );
}

export default Load;
