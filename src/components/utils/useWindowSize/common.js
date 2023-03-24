import React from "react";
import { CameraOutlined } from "@ant-design/icons";

export const FrontLoader = () => {
  <div className="frontloader">
    {/* <Lottie options={defaultOptions} height={150} width={150} /> */}
    <CameraOutlined spin={true} style={{ fontSize: "46px" }} />
    {/* <FontAwesomeIcon icon="fa-solid fa-camera" /> */}
    <p className="logo_text">Red Media</p>
  </div>;
};
