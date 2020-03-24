import React from "react";
import { ConnectedRouter, routerActions } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import FormPage from "../FormPage"


export const routes = {
  root: "/",
  home:  "/home",
  inscrition: "/form"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.inscrition} component={FormPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
