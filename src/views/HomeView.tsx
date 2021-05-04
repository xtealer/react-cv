import React, { FunctionComponent } from "react";
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
        {/* row 1 */}
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

        {/* row 2 */}
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
      </div>

      <FooterComponent />
    </div>
  );
};

export default HomeView;
