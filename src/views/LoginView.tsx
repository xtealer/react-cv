import Button from "antd/lib/button";
import Checkbox from "antd/lib/checkbox";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import React from "react";
import { FunctionComponent } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { ILoginForm } from "../types/AuthTypes";
import { message } from "antd";
import { useCallback } from "react";
import { useHistory } from "react-router";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

interface IProps {}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginView: FunctionComponent<IProps> = () => {
  const history = useHistory();

  const onFinish = useCallback(async ({ username, password }: ILoginForm) => {
    if (typeof username !== "string" || typeof password !== "string") {
      message.error("Username And Password Are Required To Continue.");
      return;
    }

    if (!username.includes("@")) {
      message.error("Username Is Invalid.");
      return;
    }

    const auth = firebase.auth();

    try {
      await auth.signInWithEmailAndPassword(username, password);

      message.success("You Have Been Logged In!");

      setTimeout(() => {
        history.replace("/");
      }, 2000);
    } catch (e) {
      message.error(e?.message ?? "Something Has Failed.");
    }
  }, []);

  return (
    <div className="login-component">
      <NavbarComponent />

      <div className="form-wrapper">
        <Form
          {...layout}
          name="basic"
          className="form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>

      <FooterComponent />
    </div>
  );
};

export default LoginView;
