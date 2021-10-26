import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoute from "./components/AppliedRoute"
// import AuthenticatedRoute from "./components/AuthenticatedRoute";
// import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Home from "./containers/Home";
import UnderConstruction from "./containers/UnderConstruction";
import NotFound from "./containers/NotFound";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/index.html" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/products" exact component={UnderConstruction} appProps={appProps} />
      <AppliedRoute path="/support" exact component={UnderConstruction} appProps={appProps} />
      <AppliedRoute path="/news" exact component={UnderConstruction} appProps={appProps} />
      <Route component={NotFound} />
    </Switch>
  );
}