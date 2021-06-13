import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RepoList } from "./pages/RepoList";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <RepoList />
        </Route>
      </Switch>
    </Router>
  );
};
