import React, { useState } from "react";
import { Link } from "gatsby";
import gb from "../img/gb.svg";
import cz from "../img/cz.svg";
import logo from "../img/logo.svg";
import { useNavigation } from "../hooks/useNavigation";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { navigation } = useNavigation("cs");

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Čeština v pohodě" style={{ width: "118px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul
          id="navMenu"
          className={` navbar-start has-text-centered navbar-menu ${
            isActive && "is-active"
          }`}
        >
          {navigation.map((link) => (
            <li className="navbar-item" style={{ padding: "0px" }}>
              <Link className="navbar-item" to={link.link}>
                {link.title}
              </Link>
            </li>
          ))}
          <li className="navbar-item" style={{ padding: "0px" }}></li>
          <li className="navbar-end has-text-centered">
            <a className="navbar-item">
              <span className="icon">
                <img src={cz} alt="Česky" />
              </span>
            </a>
            <a className="navbar-item">
              <span className="icon">
                <img src={gb} alt="English" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
