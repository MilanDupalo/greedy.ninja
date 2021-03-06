import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer section__padding">
      <section className="footer-heading">
        <h3 className="footer-heading-title gradient__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Quos quibusdam
        </h3>
      </section>

      <section className="footer-button-box">
        <button type="button" className="btn footer-button">
          Lorem ipsum dolor
        </button>
      </section>

      <section className="footer-links">
        <figure className="footer-links-logo">
          <h5 className="footer-logo">Logo</h5>
          <figcaption className="footer-links-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur.
          </figcaption>
        </figure>

        <section className="footer-links-group">
          <h4 className="footer-links-group-title">Links</h4>
          <a className="footer-links-group-link" href="#">
            lorem
          </a>
          <a className="footer-links-group-link" href="#">
            lorem
          </a>
          <a className="footer-links-group-link" href="#">
            lorem
          </a>
          <a className="footer-links-group-link" href="#">
            lorem
          </a>
        </section>
        <section className="footer-links-group">
          <h4 className="footer-links-group-title">Company</h4>
          <a className="footer-links-group-link" href="#">
            lorem
          </a>
          <a className="footer-links-group-link" href="#">
            lorem
          </a>
          <a className="footer-links-group-link" href="#">
            lorem
          </a>
        </section>

        <section className="footer-links-group">
          <h4 className="footer-links-group-title">Links</h4>
          <a className="footer-links-group-link" href="#">
            lorem
          </a>
          <a className="footer-links-group-link" href="#">
            lorem
          </a>
          <a className="footer-links-group-link" href="#">
            lorem Lorem, ipsum dolor
          </a>
        </section>
      </section>
      <section className="footer-copyright">
        <h5 className="footer-copyright-text">
          {" "}
          ?? 2021 GPT-3. All rights reserved.
        </h5>
      </section>
    </footer>
  );
};

export default Footer;
