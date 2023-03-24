import Footer from "components/footer";
import Header from "components/header";
import React, { useEffect, useState } from "react";
import { StickySocial } from "../sticky-social";
import Privacytext from "./privacy-text";
import Lottie from "react-lottie";
import animationData from "../assets/loader.json";

export default function Privacypolicy() {
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
          <Privacytext />
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
