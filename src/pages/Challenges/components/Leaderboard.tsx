import React, { useState } from "react";
import { Modal, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";

export default function Leaderboard() {
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
  return (
    <>
      <Button className={"ml-2"} onClick={showModal}>
        Leaderboard
      </Button>
      <Modal
        title="Leaderboard"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1 className="text-3xl font-bold opacity-90">Winners</h1>
        <div className="flex flex-row">
          <h1 className="text-xl opacity-70">1.Alessandru</h1>
        </div>
        <div>
          <h1 className="text-xl opacity-70">2.Vitalie</h1>
        </div>
        <div>
          <h1 className="text-xl opacity-70">3.Denis</h1>
        </div>
      </Modal>
    </>
  );
}
