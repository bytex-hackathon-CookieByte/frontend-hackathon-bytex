import React, { useContext, useEffect, useState } from "react";
import Course, { CourseType } from "./components/Course";
import { Button, Input, Modal, Row, Space } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import TextArea from "antd/es/input/TextArea";

function Courses() {
  const { type, id } = useContext(UserContext);
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [courseName, setCourseName] = useState("");
  const [courseContent, setCourseContet] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [coursePrize, setCoursePrize] = useState(0);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const onAddCourse = () => {
    axios
      .post("http://localhost:8080/courses", {
        title: courseName,
        price: coursePrice,
        prize: coursePrize,
        content: courseContent,
        companyId: id,
      })
      .then((res) => console.log(res.data))
      .catch((err) => toast.error(err.message));
    setCourseContet("");
    setCourseName("");
    setCoursePrice(0);
    setCoursePrize(0);
    setIsAddOpen(false);
  };

  const getCourses = () => {
    axios({
      url: "http://localhost:8080/courses",
      method: "GET",
    })
      .then((res) => {
        setCourses(res.data);
        console.log("courses: ", res.data);
      })
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => getCourses(), []);

  return (
    <div className={"w-100 h-100 flex-1 pb-10"}>
      {type === "company" && (
        <Button onClick={() => setIsAddOpen(true)}>Add Course</Button>
      )}
      {courses.length ? (
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          justify={"center"}
          className={"max-w-full"}
        >
          {courses.map((course, i) => (
            <Course {...course} key={i} />
          ))}
        </Row>
      ) : (
        <div
          className={
            "h-full flex my-auto justify-center items-center text-2xl font-bold"
          }
        >
          <div>
            You have no courses, go to the{" "}
            <Link to={"/shop"} className={"underline"}>
              Shop <FontAwesomeIcon icon={faLink} />
            </Link>{" "}
            to buy some...
          </div>
        </div>
      )}
      <Modal
        title={"Add course"}
        open={isAddOpen}
        onOk={onAddCourse}
        onCancel={() => {
          setIsAddOpen(false);
          setCourseName("");
          setCourseContet("");
          setCoursePrice(0);
          setCoursePrize(0);
        }}
      >
        <Space direction={"vertical"}>
          <Space>
            <div>Title: </div>
            <Input
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </Space>
          <Space>
            <div>Content: </div>
            <TextArea
              value={courseContent}
              onChange={(e) => setCourseContet(e.target.value)}
            />
          </Space>
          <Space>
            <div>Price: </div>
            <Input
              value={
                typeof coursePrice === "number"
                  ? coursePrice
                  : (() => {
                      setCoursePrice(0);
                      return 0;
                    })()
              }
              onChange={(e) => setCoursePrice(parseInt(e.target.value))}
            />
          </Space>
          <Space>
            <div>Prize: </div>
            <Input
              value={
                typeof coursePrize === "number"
                  ? coursePrize
                  : (() => {
                      setCoursePrize(0);
                      return 0;
                    })()
              }
              onChange={(e) => setCoursePrize(parseInt(e.target.value))}
            />
          </Space>
        </Space>
      </Modal>
    </div>
  );
}

export default Courses;
