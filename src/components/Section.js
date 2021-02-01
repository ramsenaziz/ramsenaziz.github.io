import React from "react";

const Section = ({ icon, header, children }) => {
  return (
    <section>
      <span className="flex justify-left align-center">
        <img src={icon} className="icon" alt={header} />
        <h2>{header}</h2>
      </span>
      {children}
    </section>
  );
};

export default Section;
