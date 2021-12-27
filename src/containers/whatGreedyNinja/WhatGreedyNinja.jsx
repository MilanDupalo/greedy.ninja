import React from "react";
import { Feature } from "../../components/features/Feature";
import "./whatGreedyNinja.css";

export const WhatGreedyNinja = () => {
  return (
    <article className="about section__margin" id="whatGreedyNinja">
      <section className="about-feature">
        <Feature
          title="About us"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </section>
      <section className="about-heading">
        <h2 className="gradient__text about-heading-title">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <a className="about-heading-link" href="#">
          {" "}
          Explore The Library{" "}
        </a>
      </section>

      <section className="about-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </section>
    </article>
  );
};

export default WhatGreedyNinja;
