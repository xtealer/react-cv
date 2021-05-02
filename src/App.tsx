import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// imported views
import HomeView from "./views/HomeView";
import NotFoundView from "./views/NotFoundView";

// comment
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>

        <Route path="/">
          <NotFoundView />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
