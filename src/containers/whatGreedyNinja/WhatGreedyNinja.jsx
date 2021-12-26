import React from "react";
import { Feature } from "../../components/features/Feature";
import "./whatGreedyNinja.css";

export const WhatGreedyNinja = () => {
  return (
    <article className="about section__padding" id="whatGreedyNinja">
      <section className="about-features">
        <Feature />
      </section>
      <section className="about-heading">
        <h2 className="gradient__text ">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <a href="#"> Explore The Library </a>
      </section>
      <section className="about-container">
        <Feature />
        <Feature />
        <Feature />
      </section>
    </article>
  );
};

export default WhatGreedyNinja;
