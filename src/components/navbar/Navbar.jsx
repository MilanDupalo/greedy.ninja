import React from "react";
import { RiManu3Line, RiCloseLine } from "react-icons/ri";
// import logo from "../../assets/logo.png";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="gn__navbar">
      <div className="gn__navbar-links">
        <div className="gn__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
          <h1>LOGO</h1>
        </div>

        <ul className="gn__navbar-links_container">
          <li className="navbar-item">
            <a className="navbar-links" href="#home">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-links" href="#about-us">
              About us
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-links" href="#possibility">
              Open ui
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-links" href="#features">
              Case Studies
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-links" href="#blog">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
