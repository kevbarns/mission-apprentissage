import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import {
  Landing,
  NotFound,
  Services
} from "./pages";

import routes from "./routes.json";

import "./App.css";

const App = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path={routes.SERVICES} component={Services} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default withRouter(App);
