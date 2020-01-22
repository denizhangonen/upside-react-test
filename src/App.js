import React from "react";

import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Orders from "./containers/Orders/Orders";
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";

function App() {
  const routes = (
    <Switch>
      <Route path="/orders" component={Orders} />
      <Route path="/" exact component={PizzaBuilder} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default withRouter(App);
