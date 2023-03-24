import React, { useState } from "react";
import { useWindowSize } from "components/utils/useWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faRightLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { emailApi } from "api/axios-newsletter";
import { Modal } from "antd";

export const FormInput = ({ className, subscribeBtn }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setError('')
    setEmail("")
  };

  const { width } = useWindowSize();

  const isMobile = width <= 1024;

  function handleChange(e) {
    const { value } = e.target;
    setEmail(value);
  }
  const sendData = async () => {
    try {
      // setLoading(true);
      // console.log("nemail", email);

      const formData = new FormData();
      formData.append("Nemail", email);
      const result = await emailApi(formData);
      console.log("result", result.data.status);
      if (result.data.status == true) {
        showModal();
      }
      else{
        setError('This E-Mail is already taken')
      }
      // if (result.data.status) {
      //   setValidationEmail(
      //     "We will buzz you when the NFT Drop is ready to launch. Thank you for being a part of BeyondLife.club #beyondLife.club #nft"
      //   );
      // } else {
      //   setValidationEmail(
      //     "We got it again!, We are excited to have you as part of our NFT club. Details have been noted already. So, worry not! We will return to you once we are all set with the NFT drops. See you soon!"
      //   );
      // }
      // setLoading(false);
      //   setEmail("");
    } catch (error) {
      // setLoading(false);

      console.log(" error", error);
    }
  };
  function handleOnsubmit(e) {
    e.preventDefault();
    let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!reg.test(email)) {
      setError("Please enter a valid email address");
    } else {
      //   alert("Success");
      //   setEmail("");
      //   setError(false);
      sendData();
    }
    // setIsModalVisible(true);
  }
  return (
    <div className="resp_text">
      <form className={`one-line-form ${className}`} onSubmit={handleOnsubmit}>
        <div className="form--control">
          <input
            type="text"
            name="email"
            placeholder="name@domain.com"
            value={email}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className={`${subscribeBtn && !isMobile ? "subscribe" : ""}`}
        >
          {subscribeBtn && !isMobile && <span>Subscribe</span>}{" "}
          <span className="arrow_icon">
            <FontAwesomeIcon icon={faRightLong} />
          </span>
        </button>
      </form>
      <Modal
        // title="Contact Us"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered
        closable={false}
      >
        <div>
          <div className="swal-title">We got it!</div>
        </div>
        <div className="swal-text">Thank you for Contacting us!</div>
        <div className="swal-footer">
          <div className="swal-button-container">
            <button
              onClick={
                ()=>{ handleCancel()}
               }
              className="swal-button swal-button--confirm"
            >
              OK
            </button>

            <div className="swal-button__loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </Modal>
      {<p className="error-msg">{error}</p>}
    </div>
  );
};
