import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState("/");
  const [isDark, setIsDark] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <header className="header">
      <nav className="header__nav" ref={navRef}>
        <div className="header__logo">
          <img src={logo} alt="Logo" className="header__logo-img" />
        </div>

        <ul className="header__menu">
          {menus.map((menu) => (
            <li
              key={menu.path}
              className={`header__menu-item ${
                active === menu.path ? "header__menu-item--active" : ""
              }`}
            >
              {active === menu.path && (
                <span className="header__menu-indicator"></span>
              )}
              <Link to={menu.path} className="header__menu-link">
                <span className="rolling-text">
                  <span className="rolling-text__inner">{menu.name}</span>
                  <span className="rolling-text__inner">{menu.name}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={toggleTheme} className="header__theme-toggle">
          <FontAwesomeIcon
            icon={isDark ? faMoon : faSun}
            className="header__theme-icon"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;