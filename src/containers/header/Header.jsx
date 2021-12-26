import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

export const Header = () => {
  return (
    <header className="header section__padding" id="home">
      <section className="header-content">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque
          ipsum sequi quia minus quis, sit doloribus debitis possimus vitae! Id
          itaque voluptatum error libero maxime necessitatibus vel?
        </p>

        <form action="" className="header-content__input">
          <input type="email" placeholder=" Your Email Address" />
          <button type="button" className="btn">
            Get Started
          </button>
        </form>

        <section className="header-content__people">
          <figure>
            <img src={people} />
          </figure>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </section>

        <figure className="header-image">
          <img src={ai} alt="ai" />
        </figure>
      </section>
    </header>
  );
};

export default Header;
