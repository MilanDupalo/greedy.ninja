import React from "react";
import "./article.css";

export const Article = ({ imgUrl, date, title }) => {
  return (
    <article className="card">
      <figure className="card-image-box">
        <img className="card-image" src={imgUrl} alt="blogimg" />
      </figure>
      <section className="card-content">
        <header className="card-content-heading">
          <p className="card-content-heading-date">{date}</p>
          <h3 className="card-content-heading-text">{title}</h3>
        </header>
        <a className="card-content-link" href="#">
          Read Full story
        </a>
      </section>
    </article>
  );
};

export default Article;
