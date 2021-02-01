import React from "react";
import yearsDiff from "./utils/yearsDiff";

export const HeaderDescription = () => (
  <p className="intro-text">
    Web developer with {yearsDiff(Date.UTC(2018))} year experience specialized
    in frontend. Teamplayer. Skilled in JavaScript & React. Enjoy being
    challenged and have a strong passion for the details.
  </p>
);

export const skills = [
  {
    title: "Languages",
    description: "JavaScript, Node, ES5/6, HTML5 & CSS3.",
  },
  {
    title: "Frameworks & libraries",
    description: "React.js, Npm, Sass, Firebase, Amplify.",
  },
  {
    title: "Other skills",
    description:
      "Agile, Scrum, Git, Sketch, Figma, Github, Trello, Kibana, Gitlab, Jenkins.",
  },
];

export const experience = [
  {
    title: "Axakon, Stockholm — IT Consultant | Frontend Developer",
    period: "SEPT 2018 - CURRENT",
    descriptions: [
      "Currently working for one of the Swedens leading telecommunications operator as frontend developer in a cross-functional team.",
      "Worked during a 2 year period in Axakons cross-functional inhouse team developing an application from scratch for a major client.",
      "Built an cms based website for our client. The site had a public domain, my pages and e-commerce for the customers.",
    ],
  },
  {
    title: "Online Force, Stockholm — Internship | Junior Frontend Developer",
    period: "NOV 2017 - MARCH 2018",
    descriptions: [
      "Built a customer panel prototype with React.js.",
      "Customer support through telephone, chat and email.",
      "Daily mentoring by a senior full stack developer during a 12-week period.",
    ],
  },
];

export const education = [
  {
    title: "KYH — Front End Developer",
    period: "SEP 2016 - MAY 2018, STOCKHOLM",
    descriptions: [
      "Education with focus on JavaScript and frontend development.",
    ],
  },
  {
    title: "Tumba Gymnasium — Technical program",
    period: "AUG 2006 - MAJ 2009, STOCKHOLM",
    descriptions: [
      "High-school education with the technical program with special focus on computer science.",
    ],
  },
];
