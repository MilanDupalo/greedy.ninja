import React from "react";
import Feature from "../../components/features/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly ",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing ",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

export const Features = () => {
  return (
    <article className="features section__padding" id="features">
      <section className="features-heading">
        <h3 className="gradient__text features-heading-title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          soluta. Illo, non? Natus impedit vel mollitia incidunt modi dolores!
        </h3>
        <a className="features-heading-link" href="#">
          {" "}
          Request Early Access to Get Start
        </a>
      </section>

      <section className="features-containers">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </section>
    </article>
  );
};

export default Features;
