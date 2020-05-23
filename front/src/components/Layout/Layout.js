import React from "react";

import TopBar from "../TopBar";
import Footer from "../Footer";
import Cookie from "../Cookie";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <div className="App">{children}</div>
      <Cookie/>
      <Footer />
    </>
  );
};

export default Layout;
