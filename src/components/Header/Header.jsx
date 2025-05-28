import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState("/");
  
  // Initialize theme from localStorage or default to light
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  
  const navRef = useRef(null);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  // Apply theme ke document root dan save ke localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Load theme saat komponen pertama kali dimount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDarkMode = savedTheme === 'dark';
      setIsDark(isDarkMode);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.09 429.34" className="logo-icon">
            <g><g>
              <path d="m359.4 163.6a112.49 112.49 0 0 0-16.912-1.2714h-0.75321c-3.6859 0-7.3344 0.22436-10.924 0.60364a110.61 110.61 0 0 0-29.701 7.3291q-4.6475 1.8536-9.0812 4.1133a111.88 111.88 0 0 0-36.149 29.247q-2.2543-1.7521-4.3376-3.7073a74.204 74.204 0 0 0 0.77992-93.515c-0.25641-0.32586-0.53419-0.64637-0.77992-0.96688a75.652 75.652 0 0 0-6.6133-7.046 75.754 75.754 0 0 0-6.6186 7.046c-0.26175 0.32051-0.53419 0.64103-0.77992 0.96688a74.322 74.322 0 0 0 0.77992 93.515q-2.0833 1.9498-4.343 3.7073a111.8 111.8 0 0 0-36.143-29.242q-4.4338-2.2543-9.0812-4.1133a110.58 110.58 0 0 0-29.701-7.3291q-5.39-0.57158-10.93-0.60364h-0.74787a112.49 112.49 0 0 0-16.912 1.2714q-4.8077 0.73718-9.4819 1.875a73.82 73.82 0 0 0 14.231 32.415q2.1368 2.7724 4.5086 5.3419 1.9017 2.0353 3.9423 3.937c1.3301 1.234 2.7083 2.4252 4.1293 3.5577a74.343 74.343 0 0 0 83.948 6.0844 101.83 101.83 0 0 1 7.9114 13.937 111.87 111.87 0 0 0 0 86.106c0.35257 0.83868 0.71582 1.6667 1.0684 2.4947q1.9231 4.2735 4.1987 8.3921 2.2757-4.0919 4.1987-8.3921c0.37393-0.828 0.73184-1.656 1.0684-2.4947a111.81 111.81 0 0 0 0-86.106 101.83 101.83 0 0 1 7.9114-13.937 74.354 74.354 0 0 0 83.985-6.0951q2.1368-1.7041 4.1293-3.5577t3.9423-3.9423q2.3718-2.5534 4.5032-5.3419a73.766 73.766 0 0 0 14.236-32.415c-3.109-0.74787-6.2767-1.3729-9.4819-1.8643zm-165.25 53.724a64.466 64.466 0 0 1-44.477-17.74c-1.4423-1.3622-2.8205-2.7938-4.1186-4.2735a64.498 64.498 0 0 1-12.778-22.27 101.78 101.78 0 0 1 10.379-0.93483q2.0887-0.08547 4.2041-0.08547 3.2372 0 6.4103 0.20299a101.19 101.19 0 0 1 37.554 9.765 102.17 102.17 0 0 1 34.546 27.051 64.279 64.279 0 0 1-31.72 8.2853zm50.748 85.657a102.39 102.39 0 0 1 0-58.328 102.39 102.39 0 0 1 0 58.328zm0-110.24a64.637 64.637 0 0 1-2.3932-76.881c0.75855-1.1004 1.5598-2.1795 2.3932-3.2051 0.828 1.0684 1.6026 2.1368 2.3878 3.2051a64.637 64.637 0 0 1-2.3878 76.881zm106.68-7.5962a64.044 64.044 0 0 1-7.3077 10.15c-1.2981 1.4904-2.671 2.922-4.1186 4.2735a64.637 64.637 0 0 1-76.202 9.4285 101.5 101.5 0 0 1 72.116-36.816q3.2051-0.19765 6.4103-0.20299 2.1047 0 4.1987 0.08547a101.74 101.74 0 0 1 10.363 0.95086 63.734 63.734 0 0 1-5.4594 12.131z"
              fill="currentColor"/>
            </g></g>
          </svg>
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
            icon={isDark ? faSun : faMoon}
            className="header__theme-icon"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;