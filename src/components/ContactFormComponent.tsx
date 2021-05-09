import { Button, Form, Input } from "antd";
import React, { FunctionComponent } from "react";
import { useCallback } from "react";

interface IProps {}

const ContactFormComponent: FunctionComponent<IProps> = (props) => {
  const [formRef] = Form.useForm();

  const onFinish = useCallback((values) => {
    console.log(values);
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
