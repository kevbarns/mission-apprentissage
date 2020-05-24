import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

import routes from "./routes";

import "./App.css";

const App = () => (
  <Layout>
    <ScrollToTop />
    <Switch>
      {routes.map(({ path, component }, key) => (
        <Route exact path={path} key={key} component={component} />
      ))}
    </Switch>
  </Layout>
);

export default withRouter(App);
