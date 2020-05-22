import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import useBreadcrumbs from "use-react-router-breadcrumbs";
import routes from "../../route";

import "./breadcrumb.css";

export default () => {
  const breadcrumbs = useBreadcrumbs(routes);
  const current = window.location.pathname;

  return (
    <Breadcrumb tag="nav" listTag="div">
      {breadcrumbs.map(({ match, breadcrumb }, key) => (
        <BreadcrumbItem key={key} tag={match.url !== current ? "a" : "div"} href={match.url}>
          {breadcrumb}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
