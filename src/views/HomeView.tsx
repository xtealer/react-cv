import React, { FunctionComponent } from "react";
import CardComponent from "../components/CardComponent";
import ContactFormComponent from "../components/ContactFormComponent";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

interface IProps {}

const NAME: string = "ENRIQUE SHUNNAR";
const POSITION: string = "Fullstack Developer";

const HomeView: FunctionComponent<IProps> = () => {
  return (
    <div className="home-component">
      <NavbarComponent />

      <div className="content">
        <div className="profile">
          <div>
            <img
              src="assets/images/me.jpg"
              alt="profile"
              width="auto"
              height="auto"
            />

            <h1>{NAME}</h1>
            <p>{POSITION}</p>
          </div>
        </div>

        <div className="description">
          <h1>INTRO</h1>
          <p>
            Proin in erat malesuada, auctor leo id, volutpat libero. In
            consequat, ex ac tristique aliquet, purus neque maximus est, vel
            aliquam eros ex at lorem. Cras elit sapien, mollis sit amet rhoncus
            in, mollis ac nunc. Pellentesque iaculis est non commodo aliquet.
            Phasellus maximus id lacus in mattis.
          </p>
        </div>

        <div className="row-boxes">
          <CardComponent title="VALUES" subTitle="Must Have @ Work">
            <li>Respect</li>
            <li>Adaptability</li>
            <li>Humble</li>
            <li>Help Others</li>
          </CardComponent>

          <CardComponent title="SKILLS" subTitle="Complements 2 Have">
            <li>Teamwork</li>
            <li>Have Fun</li>
            <li>Act Pro</li>
            <li>Be More</li>
          </CardComponent>

          <CardComponent title="Follow Me">
            <li>twitter: @xtealer00</li>
            <li>instagram: @xtealer</li>
            <li>github: https://github.com/xtealer</li>
          </CardComponent>

          <CardComponent title="Contact">
            <li>+507 6997-4711</li>
            <li>xtealer00@gmail.com</li>
          </CardComponent>
        </div>

        <ContactFormComponent />
      </div>

      <FooterComponent />
    </div>
  );
};

export default HomeView;
