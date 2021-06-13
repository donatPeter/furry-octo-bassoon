import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Repos } from "./pages/Repos";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Repos />
        </Route>
      </Switch>
    </Router>
  );
};
