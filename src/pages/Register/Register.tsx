import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { Link } from "react-router-dom";

function Login() {
  const [value, setValue] = useState();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", value);
    setValue(e.target.value);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-cyan-300 to-blue-600 opacity-90">
      <Form
        className="px-10 pt-10 bg-gray-100 rounded shadow-md"
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 900 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item>
          <h3 className="text-2xl font-bold opacity-90">Sign up to Jobify</h3>
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="password"
          rules={[
            { required: true, message: "Please input password confirmation!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="Role">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value="Employee"> Employee </Radio>
            <Radio value="Company"> Company </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <h3 className="text-2xl font-bold opacity-90">Personal Details</h3>
        </Form.Item>

        {value === "Employee" && (
          <>
            <Form.Item
              label="First Name"
              name="First Name"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="Last Name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input />
            </Form.Item>
          </>
        )}
        {value === "Company" && (
          <>
            <Form.Item
              label="Company Name"
              name="Company Name"
              rules={[
                { required: true, message: "Please input your company name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input />
            </Form.Item>
          </>
        )}

        <div className="flex flex-row">
          <Button className="flex mb-8 mx-2">
            <Link to="/home">Register</Link>
          </Button>
          <Button className="flex mb-8">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
