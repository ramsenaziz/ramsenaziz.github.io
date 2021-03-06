import React from "react";
import scientist from "../assets/images/scientist.svg";
import administrator from "../assets/images/administrator.svg";
import books from "../assets/images/books.svg";
import Section from "../components/Section";
import Item from "../components/Item";
import Experience from "./Experience";
import Header from "../components/Header";
import { HeaderDescription, skills, experience, education } from "../sv";

const CvEng = () => {
  return (
    <div className="container">
      <Header>
        <HeaderDescription />
      </Header>

      <Section icon={scientist} header="Kunskaper">
        {skills.map((item, i) => (
          <Item title={item.title} description={item.description} key={i} />
        ))}
      </Section>
      <Section icon={administrator} header="Erfarenhet">
        {experience.map((item, i) => (
          <Experience
            title={item.title}
            period={item.period}
            descriptions={item.descriptions}
            key={i}
          />
        ))}
      </Section>
      <Section icon={books} header="Utbildning">
        {education.map((item, i) => (
          <Experience
            title={item.title}
            period={item.period}
            descriptions={item.descriptions}
            key={i}
          />
        ))}
      </Section>
    </div>
  );
};

export default CvEng;
