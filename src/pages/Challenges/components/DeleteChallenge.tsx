import React, { useState, useEffect } from "react";
import { Button, Modal, Input, Form } from "antd";
import axios from "axios";

export default function AddChallenge() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteChallenge = () => {
    axios
      .delete("http://localhost:8080/challenges", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="m-4">
        <Button onClick={showModal}>Delete</Button>
      </div>
      <Modal
        title="Are you sure you want to delete this challenge?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose={true}
      >
        <Button danger={true} className="my-4" onClick={handleDeleteChallenge}>
          Delete
        </Button>
      </Modal>
    </>
  );
}
