import React from "react";
import "./cta.css";

export const CTA = () => {
  return (
    <article className="cta">
      <section className="cta-contnet">
        <h4 className="cta-content-subtitle">
          Request Early Access to Get Started
        </h4>
        <h3 className="cta-content-title">
          Register today & start exploring the endless possiblities.
        </h3>
      </section>
      <section className="cta-button-box">
        <button className="btn cta-button"> Get Started</button>
      </section>
    </article>
  );
};

export default CTA;
