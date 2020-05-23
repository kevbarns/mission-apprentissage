import React from "react";
import { Link } from "react-router-dom";

import routes from "../../routes.json";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footerNav">
      <section className="name ml-3">Mission Apprentissage</section>
      <section className="sitemap">
        <div>
          <h5>Navigation</h5>
          <Link to={routes.SERVICES}>Catalogue des Services</Link>
        </div>
        <div>
          <h5>Support</h5>
          <a href="mailto:h@ck.com">h@ck.com</a>
        </div>
      </section>
      <section className="copyright">Copyright © 2020</section>
    </footer>
  );
};

export default Footer;
