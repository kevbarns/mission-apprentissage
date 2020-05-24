import React from "react";

import routes from "../../routes";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footerNav">
      <section className="name ml-3">Mission Apprentissage</section>
      <section className="sitemap">
        <div>
          <h5>Navigation</h5>
          {routes.map(({ title, path }, key) => (
            <a key={key} href={!path ? "/" : path}>
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
