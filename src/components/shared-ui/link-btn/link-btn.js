import React, { useState } from "react";
import { Button, Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { bool, string, node, oneOfType } from "prop-types";
import ContactForm from "components/container/section/contact-form";

export const LinkBtn = ({ className, children,closeModal, href, ...rest }) => {
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
    <>
      <Modal
        title="Contact Us"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closeIcon={<CloseCircleOutlined style={{ fontSize: "23px" }} />}
      >
        <ContactForm border={"red"} closeModal={handleCancel} />
      </Modal>
      <a className={className} href={href} {...rest} onClick={showModal}>
        {children}
      </a>
    </>
  );
};

LinkBtn.propTypes = {
  className: string,
  children: node.isRequired,
  href: oneOfType([bool, string]),
};

export default LinkBtn;
