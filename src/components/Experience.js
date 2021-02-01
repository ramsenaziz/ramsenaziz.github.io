import React from "react";

const Experience = ({ title, period, descriptions }) => {
  return (
    <>
      <h3>{title}</h3>
      <span className="period-text">{period}</span>

      {descriptions.map((description, i) => (
        <p key={i}>{description}</p>
      ))}
    </>
  );
};

export default Experience;
