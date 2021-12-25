import React, { useState } from "react";
import {
  RiManu3Line,
  RiArrowDropRightLine,
  RiCloseLine,
  RiArrowRightCircleFill,
} from "react-icons/ri";
// import logo from "../../assets/logo.png";
import "./navbar.css";

const Manu = () => (
  <>
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
  </>
);

export const Navbar = () => {
  const [toggleManu, setToggleManu] = useState(false);
  return (
    <nav className="gn__navbar">
      <article className="gn__navbar-links">
        <figure className="gn__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
          <h1>LOGO</h1>
        </figure>

        <ul className="gn__navbar-links_container">
          <Manu />
        </ul>
      </article>

      <section className="gn__navbar-sign">
        <h5 className="gn__navbar-sign--text">Sign in</h5>
        <button type="button" className="btn navbar-btn">
          Sign up
        </button>
      </section>

      <section className="gn__navbar-manu">
        {toggleManu ? (
          <RiArrowDropRightLine
            color="#fff"
            size={27}
            onClick={() => setToggleManu(false)}
          />
        ) : (
          <RiArrowRightCircleFill
            color="#fff"
            size={27}
            onClick={() => setToggleManu(true)}
          />
        )}
        {toggleManu && (
          <div className="gn__navbar-manu_container scale-up-center">
            <div className="gn__navbar-manu_container-links">
              <Manu />
              <section className="gn__navbar-manu_container-links-sign">
                <h5 className="gn__navbar-sign--text">Sign in</h5>
                <button type="button" className="btn navbar-btn">
                  Sign up
                </button>
              </section>
            </div>
          </div>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
