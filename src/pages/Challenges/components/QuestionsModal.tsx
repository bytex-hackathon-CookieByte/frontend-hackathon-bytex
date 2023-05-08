import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Modal, Radio, Input } from "antd";
import type { RadioChangeEvent } from "antd";
import axios from "axios";
import Leaderboard from "./Leaderboard";

export default function QuestionsModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions, setQuestions] = useState<any>([]);
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  //http://localhost:8080/challenges/stages/questions/search?stageId=f9d46346-7e27-40de-a1a2-e9fdc60b653a
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const fetchAllQuestions = () => {
    axios({
      url: "http://localhost:8080/challenges/stages/questions",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchAllQuestions();
  }, []);

  return (
    <>
      <Button onClick={showModal}>Questions</Button>
      <Modal
        title="Questions"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
        footer={false}
      >
        {questions.map((question: any) => (
          <>
            <h1 className="my-4">{question.text}</h1>
            {question.quiz1 === undefined ? (
              <Input placeholder="Write your answer"></Input>
            ) : (
              <Radio.Group
                onChange={onChange}
                value={value}
                className={"flex flex-col"}
              >
                <Radio className={"my-2"} value={1}>
                  {question.quiz1}
                </Radio>
                <Radio className={"my-1"} value={2}>
                  {question.quiz2}
                </Radio>
                <Radio className={"my-1"} value={3}>
                  {question.quiz3}
                </Radio>
                <Radio className={"my-1"} value={4}>
                  {question.quiz4}
                </Radio>
              </Radio.Group>
            )}
          </>
        ))}
        <div className={"mt-3"}>
          <Button
            className={"mr-2"}
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Submit
          </Button>
          <Leaderboard />
        </div>
      </Modal>
    </>
  );
}
