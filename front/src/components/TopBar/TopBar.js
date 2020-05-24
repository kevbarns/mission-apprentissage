import React from "react";
import { Link } from "react-router-dom";

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";

import "./topbar.css";
import logo from "./logo.png";

export default ({ handleChange, state }) => (
  <header className="header">
    <Navbar light expand="md" fixed="top" className="navBar pb-0 pt-0">
      <NavbarBrand href="/">
        <img src={logo} alt="Logo" className="logo md" />
      </NavbarBrand>
      <NavbarToggler onClick={handleChange} />
      {state ? null : (
        <Collapse isOpen={state} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem onClick={handleChange}>
              <Link to="#" className={"nav-link link"}>
                Menu
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      )}
    </Navbar>
  </header>
);
