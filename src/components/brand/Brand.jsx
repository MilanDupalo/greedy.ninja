import React from "react";
import "./brand.css";

import { google, slack, atlassian, dropbox, shopify } from "./import.js";

export const Brand = () => {
  return (
    <section className="brand section__padding">
      <figure className="brand-image-box">
        <img className="brand-image" src={google} alt="google" />
      </figure>
      <figure className="brand-image-box">
        <img className="brand-image" src={slack} alt="slack" />
      </figure>
      <figure className="brand-image-box">
        <img className="brand-image" src={atlassian} alt="atlassian" />
      </figure>
      <figure className="brand-image-box">
        <img className="brand-image" src={dropbox} alt="dropbox" />
      </figure>
      <figure className="brand-image-box">
        <img className="brand-image" src={shopify} alt="shopify" />
      </figure>
    </section>
  );
};

export default Brand;
