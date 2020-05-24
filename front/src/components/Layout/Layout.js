import React from "react";

import Footer from "../Footer";
import Cookie from "../Cookie";
import Navbar from "../SideNav";

import "./layout.css";

export default ({ children }) => (
  <Navbar>
    <div className="App">{children}</div>
    <Cookie />
    <Footer />
  </Navbar>
);
