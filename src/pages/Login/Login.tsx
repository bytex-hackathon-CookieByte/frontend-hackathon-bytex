import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const LogMe = () => {
    const LogObject = {
      username: username,
      password: password,
    };
    console.log(LogObject);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-cyan-300 to-blue-600 opacity-90">
      <Form
        className="px-10 pt-10 bg-gray-100 rounded shadow-md"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 900 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item>
          <h3 className="text-2xl font-bold text-center opacity-90">
            Login to Jobify
          </h3>
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={onChangeUsername} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={onChangePassword} />
        </Form.Item>

        {/* <Form.Item
          label="Already have an account?"
          name="Already have an account?"
          // valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        ></Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit" className="mx-2">
            Login
          </Button>
          <Button onClick={LogMe}>
            <Link to="/register">Register</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
