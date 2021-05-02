import React, { FunctionComponent } from "react";

interface IProps {}

const NotFoundView: FunctionComponent<IProps> = (props) => {
  return (
    <div>
      <h1>Ruta No Encontrada.</h1>
    </div>
  );
};

export default NotFoundView;
