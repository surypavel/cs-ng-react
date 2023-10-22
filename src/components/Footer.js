import * as React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import { useNavigation } from "../hooks/useNavigation";

const Footer = ({ language }) => {
  const { navigation } = useNavigation(language);
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="container">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  {navigation.map((link) => (
                    <li>
                      <Link className="navbar-item" to={link.link}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4 social">
              <a title="facebook" href="https://facebook.com">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
              <a title="twitter" href="https://twitter.com">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
              <a title="instagram" href="https://instagram.com">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
              <a title="vimeo" href="https://vimeo.com">
                <img
                  src={vimeo}
                  alt="Vimeo"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
