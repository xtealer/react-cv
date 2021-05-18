import React, { useCallback } from "react";
import { Menu, message } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import useCurrentUserHook from "../hooks/useCurrentUserHook";

import firebase from "firebase/app";
import "firebase/auth";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";

const logoutIconStyle = { color: "red" };

const NavbarComponent = () => {
  const user = useCurrentUserHook();
  const location = useLocation();
  const history = useHistory();

  const doLogout = useCallback(async () => {
    try {
      await firebase.auth().signOut();
      message.info("Session Closed.");
    } catch (e) {
      console.log(e);
      message.error("Something failed");
    }

    if (location.pathname !== "/") {
      setTimeout(() => {
        history.replace("/");
      }, 1500);
    }
  }, []);

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

      {!user ? (
        <Menu.Item key="/login">
          <Link to="/login">Login</Link>
        </Menu.Item>
      ) : (
        <Menu.Item key="logout" onClick={doLogout}>
          <LogoutOutlined style={logoutIconStyle} />
        </Menu.Item>
      )}
    </Menu>
  );
};

export default NavbarComponent;
