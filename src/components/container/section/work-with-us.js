import React, { useState } from "react";
import { Button, Modal } from "antd";
import ContactForm from "./contact-form";
import { CloseCircleOutlined} from '@ant-design/icons';

export default function WorkWithUs() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="section-2">
      <div className="new_container-2">
        <div className="content-block-2">
          <h2 className="text-h2-2">Join the fastest growing ecosystem</h2>
          <p className="text-p-2">
            GuardianLink is the one of the fastest growing NFT ecosystem
            providers, with over 45 projects spanning DeFi, NFTs, Web3 and more.
          </p>
          <div
            //  onClick={showModal}
            className="work-contain"
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Modal
              title="Contact Us"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              closeIcon={<CloseCircleOutlined style={{ fontSize: '23px' }} />}
            >
              <ContactForm border={"red"}  closeModal={handleCancel} />
            </Modal>
            <a onClick={showModal} className="learnmore">
              <span className="span-1">Work with us</span>
            </a>
          </div>
        </div>
      </div> 
    </div>
  );
}
