import React, { useState } from "react";
import Singapore from "../assets/singapore.png";
import mapin from "../assets/map1.png";
import mapindia from "../assets/in.png";
import ContactForm from "./contact-form";
import {} from "@fortawesome/free-brands-svg-icons";

// import { Col, InputGroup } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-row">
          <div className="sub-container">
            <h1 className="contact-h1">Get in touch with us.</h1>
            <div className="address-content">
              <div className="contact-row">
                <div>
                  <div className="contact-2">
                    <img className="singapore" src={Singapore} alt />
                    <h4 className="contact-h4">
                      GUARDIAN BLOCKCHAIN LABS PTE. LTD
                    </h4>
                  </div>
                  <div className="contact-3">
                    <img className="mapin" src={mapin} alt />
                    <p className="contact-p">
                      160 Robinson Road, #20-03, Singapore, 068914 — Singapore
                    </p>
                  </div>
                </div>
                <div>
                  <div className="contact-2">
                    <img className="mapindia" src={mapindia} alt />
                    <h4 className="contact-h4">
                      APPSTARS APPLICATIONS PVT. LTD
                    </h4>
                  </div>
                  <div className="contact-3">
                    <img className="mapin" src={mapin} alt />
                    {/* <a href="https://goo.gl/maps/yTxtvw673tgPzXj49" target={"_blank"} > */}
                      <p className="contact-p">
                        8th floor, Prestige Polygon, No: 471, Anna Salai, Rathna
                        Nagar, Teynampet, Chennai, Tamil Nadu 600035
                      </p>
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-container-1">
            <div className="form-container">
              <h3 className="form-h3">Contact Us</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
