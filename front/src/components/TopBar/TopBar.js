import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import routes from "../../routes.json";

import "./topbar.css";
import logo from "./logo.png";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <Navbar light expand="md" fixed="top" className="navBar">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" className="logo md" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to={routes.SERVICES} className={"nav-link link"}>
                Services
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default TopBar;
