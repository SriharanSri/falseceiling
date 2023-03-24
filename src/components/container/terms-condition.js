import Footer from "components/footer";
import Header from "components/header";
import React, { useEffect, useState } from "react";
import TermsContent from "./section/terms-content";
import { StickySocial } from "./sticky-social";
import Lottie from "react-lottie";
import animationData from "./assets/loader.json";

export default function TermsConditon() {
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
          <TermsContent />
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
