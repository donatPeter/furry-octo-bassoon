import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Repos } from "./pages/Repos";
import { Repo } from "./pages/Repo";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Repos} />
        <Route exact path="/repo/:id" component={Repo} />
      </Switch>
    </Router>
  );
};
