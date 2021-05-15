import React, { FunctionComponent, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UpCircleOutlined } from "@ant-design/icons";
import { BackTop } from "antd";

// imported views
import NotFoundView from "./views/NotFoundView";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";

interface IProps {}

const App: FunctionComponent<IProps> = (props) => {
  const scrollToTop = useCallback(() => {
    const rootNodeRef = document.getElementById("root");

    rootNodeRef?.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/" component={LoginView} />
          <Route path="/" component={NotFoundView} />
        </Switch>
      </Router>

      <BackTop visible onClick={scrollToTop}>
        <UpCircleOutlined color="#000" />
      </BackTop>
    </>
  );
};

export default App;
