import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import AbilitiesPage from "./components/AbilitiesPage/AbilitiesPage";

import styles from "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/:detailId/:ability">
          <AbilitiesPage />
        </Route>
        <Route exact path="/:detailId">
          <DetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
