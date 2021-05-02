import { Menu } from "antd";
import React from "react";
import { useRouteMatch } from "react-router-dom";

const NavbarComponent = () => {
  const match = useRouteMatch();

  return (
    <Menu theme="dark" selectedKeys={[match.path]} mode="horizontal">
      <Menu.Item key="/">Home</Menu.Item>
      <Menu.Item key="#contact">Contact</Menu.Item>
    </Menu>
  );
};

export default NavbarComponent;
