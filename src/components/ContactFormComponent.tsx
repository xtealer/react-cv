import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React, { FunctionComponent, useCallback } from "react";
import { ContactRequestProps } from "../types/IEmail";

interface IProps {}

const ContactFormComponent: FunctionComponent<IProps> = (props) => {
  const [formRef] = Form.useForm();

  const onFinish = useCallback(async (values: ContactRequestProps) => {
    try {
      const response = await axios.post(
        "https://us-central1-react-cv-b16cf.cloudfunctions.net/contactRequest",
        values ?? {}
      );

      message.success("your message has been received.");
    } catch (err) {
      message.error("something has failed.");
      console.log(err);
    }
  }, []);

  return (
    <div id="contact" className="contact-form-component">
      <Form form={formRef} onFinish={onFinish} layout="vertical">
        <h1>Get In Touch</h1>

        <Form.Item
          name="name"
          noStyle
          rules={[{ required: true, message: "name is required." }]}
        >
          <Input placeholder="name" />
        </Form.Item>

        <Form.Item
          name="email"
          noStyle
          rules={[{ required: true, message: "email is required." }]}
        >
          <Input placeholder="email" type="email" />
        </Form.Item>

        <Form.Item
          name="message"
          noStyle
          rules={[{ required: true, message: "message is required." }]}
        >
          <Input.TextArea placeholder="message" />
        </Form.Item>

        <Button htmlType="submit">Send</Button>
      </Form>
    </div>
  );
};

export default ContactFormComponent;
