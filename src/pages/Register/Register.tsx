import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { Link } from "react-router-dom";

function Register() {
  const [value, setValue] = useState();
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [confirmPassword, setConfirmPassword] = useState<String>("");
  const [firstName, setFirstName] = useState<String>("");
  const [lastName, setLastName] = useState<String>("");
  const [companyName, setCompanyName] = useState<String>("");
  const [phoneNumber, setPhoneNumber] = useState<String>("");

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const onChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onChangeCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };

  const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const RegisterMe = () => {
    if (password === confirmPassword) {
      const RegisterOject = {
        type: value,
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        phoneNumber: phoneNumber,
      };
      console.log(RegisterOject);
    } else {
      console.log("Passwords don't match");
    }
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
          <Input onChange={onChangeUsername} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={onChangePassword} />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="Confirm Password"
          rules={[
            { required: true, message: "Please input password confirmation!" },
          ]}
        >
          <Input.Password onChange={onChangeConfirmPassword} />
        </Form.Item>
        <Form.Item label="Role">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value="Employee">Employee</Radio>
            <Radio value="Company">Company</Radio>
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
              <Input onChange={onChangeFirstName} />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="Last Name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input onChange={onChangeLastName} />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input type="phone" onChange={onChangePhoneNumber} />
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
              <Input onChange={onChangeCompanyName} />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input onChange={onChangePhoneNumber} />
            </Form.Item>
          </>
        )}

        <div className="flex flex-row">
          <Button className="flex mb-8 mx-2" onClick={RegisterMe}>
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

export default Register;
