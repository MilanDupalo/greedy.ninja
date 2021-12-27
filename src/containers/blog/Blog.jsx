import React from "react";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { Article } from "../../components";

export const Blog = () => {
  return (
    <article className="blog section__padding">
      <section className="blog-heading">
        <h3 className="blog-heading-title gradient__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        </h3>
      </section>
      <main className="blog-container">
        <section className="blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Dec 26, 2021"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit dolor lorem"
          />
        </section>

        <section className="blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Dec 26, 2021"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit dolor lorem"
          />
          <Article
            imgUrl={blog03}
            date="Dec 26, 2021"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit dolor lorem"
          />
          <Article
            imgUrl={blog04}
            date="Dec 26, 2021"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit dolor lorem"
          />
          <Article
            imgUrl={blog05}
            date="Dec 26, 2021"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit dolor lorem"
          />
        </section>
      </main>
    </article>
  );
};

export default Blog;
