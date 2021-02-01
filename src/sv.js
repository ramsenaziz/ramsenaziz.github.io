import React from "react";
import yearsDiff from "./utils/yearsDiff";

export const HeaderDescription = () => (
  <p className="intro-text">
    Webbutvecklare med {yearsDiff(Date.UTC(2018))} års erfarenhet, specialiserad
    i frontend. Lagspelare. Skillad i JavaScript & React. Gillar utmaningar och
    har ett öga för detaljer.
  </p>
);

export const skills = [
  {
    title: "Språk",
    description: "JavaScript, Node, ES5/6, HTML5 & CSS3",
  },
  {
    title: "Ramverk & bibliotek",
    description: "React.js, Npm, Sass, Firebase, Amplify",
  },
  {
    title: "Övriga kunskaper",
    description:
      "Agile, Scrum, Git, Sketch, Figma, Github, Trello, Kibana, Gitlab, Jenkins",
  },
];

export const experience = [
  {
    title: "Axakon, Stockholm — IT Consultant | Frontend Developer",
    period: "SEPT 2018 - NUVARANDE",
    descriptions: [
      "Nuvarande arbetar jag för en av Sveriges ledande telekommunikations operatör som frontend utvecklare i ett cross-funktionellt team.",
      "Arbetade under en 2 års period i Axakons cross-functionella inhouse team med utvecklingen av en applikation för en av våra största kunder.",
      "Byggt en cms baserad webbsida åt vår kund. Denna sajt bestod av en publik domän, mina sidor och e-handel för deras kunder.",
    ],
  },
  {
    title: "Online Force, Stockholm — Praktik | Junior Frontend Developer",
    period: "NOV 2017 - MARS 2018",
    descriptions: [
      "Kundkontakt/support via telefon, chatt och e-post.",
      "Byggt en kundpanels prototyp i React.js.",
      "Daglig handledning av en senior fullstack utvecklare under en 12-veckors period",
    ],
  },
];

export const education = [
  {
    title: "KYH — Front End Developer",
    period: "SEP 2016 - MAJ 2018, STOCKHOLM",
    descriptions: [
      "Utbildning med fokus på JavaScript och frontend utveckling",
    ],
  },
  {
    title: "Tumba Gymnasium — Teknik, inriktning data",
    period: "AUG 2006 - MAJ 2009, STOCKHOLM",
    descriptions: [
      "Högskoleförberedande gymnasieutbildning med datavetenskap som inriktning - nätverksteknik, programmering och webbdesign",
    ],
  },
];
