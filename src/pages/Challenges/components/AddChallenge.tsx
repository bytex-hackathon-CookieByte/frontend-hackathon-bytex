import React, { useState, useEffect, useContext } from "react";
import { Button, Modal, Input, Form } from "antd";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
import { toast } from "react-toastify";

export default function AddChallenge(props: { fetchChallenges: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const { id, type } = useContext(UserContext);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddChallenge = () => {
    if (title && description) {
      const challengeData = {
        companyId: id,
        title: title,
        description: description,
        price: 700,
        adPrice: 400,
        startTime: "2023-05-07T00:29:12.685+03:00",
      };
      console.log(challengeData);
      axios
        .post("http://localhost:8080/challenges", challengeData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          setTitle("");
          setDescription("");
          setIsModalOpen(false);
          props.fetchChallenges();
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <>
      {type === "company" && (
        <div className="m-4">
          <Button onClick={showModal}>Add Challenge</Button>
        </div>
      )}
      <Modal
        title="Add Challenge"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose={true}
      >
        <Form>
          <Form.Item>
            <Input
              placeholder="Title"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);
                setTitle(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Description"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);
                setDescription(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={handleAddChallenge}>Add</Button>
          </Form.Item>
        </Form>
        {/* <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(e.target.value);
          }}
        /> */}
      </Modal>
    </>
  );
}
