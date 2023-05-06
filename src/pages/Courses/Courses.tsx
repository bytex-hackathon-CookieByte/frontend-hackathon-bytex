import React from "react";
import Course, { CourseType } from "./components/Course";
import { Row } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const courses: CourseType[] = [
  // {
  //   title: "React",
  //   content: "Bdlisabdfiuabsfuioewbifubeiab weufeiubfiu;awe fubeiqufbea",
  //   price: 200,
  //   prize: 100,
  // },
  // {
  //   title: "Node.js",
  //   content: "Bdlisabdfiuabsfuioewbifubeiab weufeiubfiu;awe fubeiqufbea",
  //   price: 300,
  //   prize: 200,
  // },
  // {
  //   title: "Springboot",
  //   content: "Bdlisabdfiuabsfuioewbifubeiab weufeiubfiu;awe fubeiqufbea",
  //   price: 200,
  //   prize: 100,
  // },
];

function Courses() {
  return (
    <div className={"w-100 h-100 flex-1 pb-10"}>
      {courses.length ? (
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          justify={"center"}
          className={"max-w-full"}
        >
          {courses.map((course) => (
            <Course {...course} />
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
