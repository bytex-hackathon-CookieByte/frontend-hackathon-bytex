import React, { useEffect, useState } from "react";
import Course, { CourseType } from "./components/Course";
import { Row } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

// const courses: CourseType[] = [
//   {
//     title: "React",
//     content: "Bdlisabdfiuabsfuioewbifubeiab weufeiubfiu;awe fubeiqufbea",
//     price: 200,
//     prize: 100,
//   },
//   {
//     title: "Node.js",
//     content: "Bdlisabdfiuabsfuioewbifubeiab weufeiubfiu;awe fubeiqufbea",
//     price: 300,
//     prize: 200,
//   },
//   {
//     title: "Springboot",
//     content: "Bdlisabdfiuabsfuioewbifubeiab weufeiubfiu;awe fubeiqufbea",
//     price: 200,
//     prize: 100,
//   },
// ];

function Courses() {
  const [courses, setCourses] = useState<CourseType[]>([]);

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
    </div>
  );
}

export default Courses;
