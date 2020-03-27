import React from "react";
import { ConnectedRouter, routerActions } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import FormPage from "../FormPage"
import CreateTripPage from "../CreateTripPage";
import ListTripsPage from '../ListTripsPage';
import TripDetailsPage from "../TripDetailsPage";


export const routes = {
  root: "/",
  home:  "/home",
  inscrition: "/form",
  createtrip: "/createtrip",
  listtrip: "/listtrip",
  detailtrip: "/detailtrip"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.inscrition} component={FormPage} />
        <Route exact path={routes.createtrip} component={CreateTripPage} />
        <Route exact path={routes.listtrip} component={ListTripsPage} />
        <Route exact path={routes.detailtrip} component={TripDetailsPage}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
