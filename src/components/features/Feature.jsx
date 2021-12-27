import React from "react";
import "./feature.css";

export const Feature = ({ title, text }) => {
  return (
    <article className="features-container__feature">
      <h3 className="features-container__feature-title">{title}</h3>
      <p className="features-container__feature-text">{text}</p>
    </article>
  );
};

export default Feature;
