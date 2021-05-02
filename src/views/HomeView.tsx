import React, { FunctionComponent } from "react";
import { useRouteMatch } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

interface IProps {}

const HomeView: FunctionComponent<IProps> = () => {
  const match = useRouteMatch();

  return (
    <div className="home-component">
      <NavbarComponent />

      <div className="content">
        <div className="profile">
          <img />
          <p></p>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default HomeView;
