import React from "react";
import { Menu } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useCallback } from "react";

const NavbarComponent = () => {
  const location = useLocation();
  const history = useHistory();

  const scrollToContactForm = useCallback(() => {
    new Promise((resolve) => {
      if (location.pathname !== "/") {
        history.replace("/");
      }

      resolve(null);
    }).then(() => {
      document.getElementById("contact")?.scrollIntoView();
    });
  }, []);

  return (
    <Menu theme="dark" selectedKeys={[location.pathname]} mode="horizontal">
      <Menu.Item key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/#contact" onClick={scrollToContactForm}>
        Contact
      </Menu.Item>
      <Menu.Item key="/login">
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavbarComponent;
