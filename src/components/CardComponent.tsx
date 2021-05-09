import React, { FunctionComponent } from "react";

interface IProps {
  title?: string;
  subTitle?: string;
}

const CardComponent: FunctionComponent<IProps> = ({
  children,
  title,
  subTitle,
}) => {
  return (
    <div className="card-component">
      <div className="card-component-content">
        {typeof title === "string" && <h1>{title}</h1>}
        {typeof subTitle === "string" && <p>{subTitle}</p>}

        <ul>{children}</ul>
      </div>
    </div>
  );
};

export default CardComponent;
