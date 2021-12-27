import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";

export const Possibility = () => {
  return (
    <section className="possibility section__padding" id="possibility">
      <figure className="possibility-image-box">
        <img
          className="possibility-image"
          src={possibility}
          alt="possibilityImage"
        />
      </figure>
      <section className="possibility-content">
        <h4 className="possibility-content-subtitle">
          Request Early Access to Get Started{" "}
        </h4>
        <h3 className="gradient__text possibility-content-title">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p className="possibility-content-text">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a className="possibility-content-link" href="#">
          Request Early Access to Get Started
        </a>
      </section>
    </section>
  );
};

export default Possibility;
