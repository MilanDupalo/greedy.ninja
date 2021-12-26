import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

export const Header = () => {
  return (
    <header className="header section__padding" id="home">
      <section className="header-content">
        <h1 className="header-content-title gradient__text">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h1>
        <p className="header-content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque
          ipsum sequi quia minus quis, sit doloribus debitis possimus vitae! Id
          itaque voluptatum error libero maxime necessitatibus vel?
        </p>

        <form action="" className="header-content__input">
          <input
            className="form-input"
            type="email"
            placeholder=" Your Email Address"
          />
          <button type="button" className="btn header-btn">
            Get Started
          </button>
        </form>

        <section className="header-content__people">
          <figure>
            <img className="people-img" src={people} alt="people" />
          </figure>
          <p className="people-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
        </section>

        <figure className="header-image-box">
          <img className="header-image" src={ai} alt="ai" />
        </figure>
      </section>
    </header>
  );
};

export default Header;
