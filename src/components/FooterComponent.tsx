import React from "react";
import { FunctionComponent } from "react";

interface IProps {}

const FooterComponent: FunctionComponent<IProps> = (props) => {
  return (
    <div className="footer-component">
      <p>{`COPYRIGHT ${new Date().getFullYear()} > XTEALER`}</p>
    </div>
  );
};

export default FooterComponent;
