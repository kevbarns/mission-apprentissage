import React from "react";
import { NavLink } from "react-router-dom";

import menu from "../../menu";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footerNav">
      <section className="name ml-3">Mission Apprentissage</section>
      <section className="sitemap">
        <div>
          <h5>Navigation</h5>
          {menu.map(({ title, link }, key) => (
            <a key={key} href={!link ? "/" : link}>
              {title}
            </a>
            /**
             * SCROLL TO TOP NOT WORKING
                <NavLink key={key} to={!link ? "/" : link}>
                  {title}
                </NavLink>
             */
          ))}
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
