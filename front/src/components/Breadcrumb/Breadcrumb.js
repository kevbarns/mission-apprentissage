import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import useBreadcrumbs from "use-react-router-breadcrumbs";
import routes from "../../route";

import "./breadcrumb.css";

export default () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <Breadcrumb tag="nav" listTag="div">
      {breadcrumbs.map(({ match, breadcrumb }, key) => (
        <BreadcrumbItem key={key}>
          <NavLink exact activeClassName="last" to={match.url}>
            {breadcrumb}
          </NavLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
