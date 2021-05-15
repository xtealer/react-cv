import React from "react";
import { Menu } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import { useCallback } from "react";
import { useEffect } from "react";

const NavbarComponent = () => {
  const match = useRouteMatch();

  const scrollToContactForm = useCallback(() => {
    const contactFormRef = document.getElementById("contact");

    contactFormRef?.scrollIntoView();
  }, []);

  useEffect(() => {
    console.log(match);
  }, [match]);

  return (
    <Menu theme="dark" selectedKeys={[match.path]} mode="horizontal">
      <Menu.Item key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="#contact" onClick={scrollToContactForm}>
        Contact
      </Menu.Item>
      <Menu.Item key="/login">
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavbarComponent;
